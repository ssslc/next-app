/**
 * 智能对话 API（支持 Function Calling）
 * POST /api/agent/chat
 */
import { NextRequest } from 'next/server';
import { Result } from '@/lib/response';
import { prisma } from '@/lib/prisma';
import { getAIClient, getModelName, getSystemPrompt } from '@/lib/ai-client';
import { tools, executeTool } from '@/lib/agent-tools';

export const dynamic = 'force-dynamic';

// 扩展 BigInt 类型定义
declare global {
  interface BigInt {
    toJSON(): number;
  }
}

// 解决 BigInt 序列化问题
if (typeof BigInt.prototype.toJSON !== 'function') {
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    // 参数验证
    if (!message || typeof message !== 'string' || !message.trim()) {
      return Result.badRequest('消息内容不能为空');
    }

    if (!sessionId || typeof sessionId !== 'string') {
      return Result.badRequest('会话ID不能为空');
    }

    // 1. 保存用户消息到数据库
    await prisma.agent_conversation.create({
      data: {
        session_id: sessionId,
        role: 'user',
        content: message.trim(),
      },
    });

    // 2. 获取历史对话（最近10条）
    const history = await prisma.agent_conversation.findMany({
      where: { session_id: sessionId },
      orderBy: { created_at: 'asc' },
      take: 10,
    });

    // 3. 准备对话消息
    const messages: any[] = [
      {
        role: 'system' as const,
        content: getSystemPrompt() + '\n\n你可以使用提供的工具函数来查询系统中的真实数据，以便更准确地回答用户的问题。',
      },
      ...history.map((h) => ({
        role: h.role as 'user' | 'assistant',
        content: h.content,
      })),
    ];

    const client = getAIClient();
    const model = getModelName();
    
    let reply = '';
    let totalUsage = {
      prompt_tokens: 0,
      completion_tokens: 0,
      total_tokens: 0,
    };

    // 4. 多轮工具调用循环（最多 5 轮）
    const maxIterations = 5;
    for (let iteration = 0; iteration < maxIterations; iteration++) {
      const completion = await client.chat.completions.create({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 2000,
        tools,
        tool_choice: 'auto',
      });

      const choice = completion.choices[0];
      const assistantMessage = choice.message;

      // 累计 token 使用量
      if (completion.usage) {
        totalUsage.prompt_tokens += completion.usage.prompt_tokens || 0;
        totalUsage.completion_tokens += completion.usage.completion_tokens || 0;
        totalUsage.total_tokens += completion.usage.total_tokens || 0;
      }

      // 检查是否调用工具
      if (choice.finish_reason === 'tool_calls' && assistantMessage.tool_calls) {
        // AI 决定调用工具
        messages.push(assistantMessage);

        // 执行所有工具调用
        for (const toolCall of assistantMessage.tool_calls) {
          // 类型断言：确保 TypeScript 理解 tool_calls 的结构
          const functionCall = (toolCall as any).function;
          const toolName = functionCall.name;
          const toolArgs = JSON.parse(functionCall.arguments || '{}');

          console.log(`[工具调用] ${toolName}`, toolArgs);

          // 执行工具函数
          const toolResult = await executeTool(toolName, toolArgs);

          console.log(`[工具结果] ${toolName}`, toolResult);

          // 将工具结果添加到消息历史
          messages.push({
            role: 'tool' as const,
            tool_call_id: (toolCall as any).id,
            content: JSON.stringify(toolResult),
          });
        }

        // 继续循环，让 AI 基于工具结果生成回复
        continue;
      }

      // AI 生成了最终回复
      reply = assistantMessage.content || '抱歉，我无法生成回复。';
      break;
    }

    // 5. 保存 AI 回复到数据库
    await prisma.agent_conversation.create({
      data: {
        session_id: sessionId,
        role: 'assistant',
        content: reply,
      },
    });

    // 6. 返回结果
    return Result.success({
      reply,
      sessionId,
      usage: totalUsage,
    });
  } catch (error: any) {
    console.error('智能对话 API 错误:', error);

    // 友好的错误提示
    let errorMessage = '对话失败，请稍后重试';

    if (error.message?.includes('API key')) {
      errorMessage = 'API 密钥配置错误';
    } else if (error.message?.includes('timeout')) {
      errorMessage = '请求超时，请重试';
    } else if (error.message?.includes('rate limit')) {
      errorMessage = '请求过于频繁，请稍后再试';
    }

    return Result.error(errorMessage, 500);
  }
}
