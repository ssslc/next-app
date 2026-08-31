/**
 * 智能体对话历史 API
 * GET /api/agent/history?sessionId=xxx
 */
import { NextRequest } from 'next/server';
import { Result } from '@/lib/response';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// 解决 BigInt 序列化问题
if (typeof BigInt.prototype.toJSON !== 'function') {
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return Result.badRequest('会话ID不能为空');
    }

    // 查询历史对话
    const history = await prisma.agent_conversation.findMany({
      where: { session_id: sessionId },
      orderBy: { created_at: 'asc' },
      take: 100, // 最多返回 100 条
    });

    return Result.success({
      sessionId,
      messages: history.map((h) => ({
        id: h.id,
        role: h.role,
        content: h.content,
        createdAt: h.created_at,
      })),
      total: history.length,
    });
  } catch (error: any) {
    console.error('获取历史记录 API 错误:', error);
    return Result.error('获取历史记录失败', 500);
  }
}

/**
 * DELETE /api/agent/history?sessionId=xxx
 * 删除指定会话的历史记录
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return Result.badRequest('会话ID不能为空');
    }

    // 删除历史对话
    const result = await prisma.agent_conversation.deleteMany({
      where: { session_id: sessionId },
    });

    return Result.success({
      sessionId,
      deletedCount: result.count,
    }, '历史记录已清空');
  } catch (error: any) {
    console.error('删除历史记录 API 错误:', error);
    return Result.error('删除历史记录失败', 500);
  }
}
