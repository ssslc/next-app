/**
 * AI 客户端配置
 * 支持 DeepSeek API（兼容 OpenAI SDK）
 */
import OpenAI from 'openai';

/**
 * 获取 AI 客户端实例
 * 默认使用 DeepSeek API
 */
export function getAIClient() {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  
  if (!apiKey) {
    throw new Error('DEEPSEEK_API_KEY 环境变量未配置');
  }

  return new OpenAI({
    apiKey,
    baseURL: 'https://api.deepseek.com',
  });
}

/**
 * 获取模型名称
 */
export function getModelName() {
  return process.env.AI_MODEL || 'deepseek-chat';
}

/**
 * 获取系统提示词
 */
export function getSystemPrompt() {
  return process.env.AI_SYSTEM_PROMPT || 
    '你是一个专业的设备管理助手，帮助用户了解设备信息、操作指导和故障排查。请用简洁、专业的语言回答问题。';
}
