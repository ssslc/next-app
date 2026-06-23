'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { nanoid } from 'nanoid';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SESSION_STORAGE_KEY = 'agent_session_id';

export default function AgentPage() {
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 初始化 sessionId 并加载历史记录
  useEffect(() => {
    const initSession = async () => {
      // 从 localStorage 获取或创建新的 sessionId
      let sid = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!sid) {
        sid = nanoid();
        localStorage.setItem(SESSION_STORAGE_KEY, sid);
      }
      setSessionId(sid);

      // 加载历史记录
      await loadHistory(sid);
      setInitialLoading(false);
    };

    initSession();
  }, []);

  // 加载历史记录
  const loadHistory = async (sid: string) => {
    try {
      const res = await fetch(`/api/agent/history?sessionId=${sid}`);
      const data = await res.json();

      if (data.success && data.data.messages.length > 0) {
        const historyMessages: Message[] = data.data.messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        }));
        setMessages(historyMessages);
      }
    } catch (error) {
      console.error('加载历史记录失败:', error);
    }
  };

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 发送消息
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content, sessionId }),
      });

      const data = await res.json();

      if (data.success) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.data.reply,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // 显示错误消息
        const errorMessage: Message = {
          role: 'assistant',
          content: `❌ ${data.message || '发送失败，请重试'}`,
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('发送失败:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: '❌ 网络错误，请检查连接后重试',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // 新建会话
  const newChat = async () => {
    if (messages.length > 0 && !confirm('确定要新建会话吗？当前会话将被保存。')) {
      return;
    }

    const newSessionId = nanoid();
    localStorage.setItem(SESSION_STORAGE_KEY, newSessionId);
    setSessionId(newSessionId);
    setMessages([]);
  };

  // 清空对话
  const clearChat = async () => {
    if (!confirm('确定要清空当前对话吗？此操作将删除数据库中的所有历史记录。')) return;

    try {
      await fetch(`/api/agent/history?sessionId=${sessionId}`, {
        method: 'DELETE',
      });
      setMessages([]);
    } catch (error) {
      console.error('清空失败:', error);
      alert('清空失败，请重试');
    }
  };

  // 处理回车发送
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-5xl mx-auto p-6">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">智能助手</h1>
          <p className="text-gray-500 text-sm mt-1">
            输入你想了解的话题，获取专业解答
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={newChat} variant="outline" size="sm">
            新建会话
          </Button>
          <Button onClick={clearChat} variant="outline" size="sm" disabled={messages.length === 0}>
            清空对话
          </Button>
        </div>
      </div>

      {/* 对话区域 */}
      <div className="flex-1 overflow-y-auto border rounded-lg p-6 mb-4 bg-gray-50 space-y-4">
        {initialLoading ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4" />
            <p className="text-sm">加载中...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <p className="text-lg font-medium">开始对话</p>
            <p className="text-sm mt-2">
              你可以问我关于设备管理、操作指导等任何问题
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    <span className="ml-2">正在思考...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* 输入区域 */}
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="输入你想了解的话题..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading || initialLoading}
        />
        <Button
          onClick={sendMessage}
          disabled={loading || !input.trim() || initialLoading}
          size="lg"
        >
          发送
        </Button>
      </div>

      {/* 会话信息 */}
      {sessionId && (
        <div className="flex justify-center items-center gap-4 mt-2">
          <p className="text-xs text-gray-400">
            会话ID: {sessionId.slice(0, 8)}...
          </p>
          {messages.length > 0 && (
            <p className="text-xs text-gray-400">
              共 {messages.length} 条消息
            </p>
          )}
        </div>
      )}
    </div>
  );
}
