'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIAgent() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content:
        '您好！我是深贝思AI助手，很高兴为您服务。我可以帮助您了解我们的北美出海服务，包括保税仓储、企业孵化、合规运营等。请问有什么可以帮助您的吗？',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- 工具函数 ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const normalize = (s: string) => s.toLowerCase().trim();

  // --- 意图识别（从 ChatBot 合并而来） ---
  // 命中返回目标路由，不命中返回 null
  const matchNavigationIntent = (raw: string): { route: string; label: string } | null => {
    const s = normalize(raw);

    // 中英关键词都支持
    const hits = [
      {
        route: '/about',
        label: 'About Us',
        keys: ['about', '关于我们', '关于', 'about us']
      },
      {
        route: '/services',
        label: 'Services',
        keys: ['service', 'services', '服务']
      },
      {
        route: '/operation-plan',
        label: 'Operation Plan',
        keys: ['operation', '运营', 'operation plan', '运营计划']
      },
      {
        route: '/silicon-valley-campus',
        label: 'Silicon Valley Campus',
        keys: ['silicon', 'silicon valley', '硅谷', '硅谷园区', '硅谷基地']
      }
    ];

    for (const item of hits) {
      if (item.keys.some(k => s.includes(k.toLowerCase()))) {
        return { route: item.route, label: item.label };
      }
    }
    return null;
  };

  // --- 原 AIAgent 的业务问答 ---
  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('服务') || input.includes('业务') || input.includes('做什么')) {
      return '我们提供一站式北美出海服务，包括：\n• 保税仓储服务（100万㎡仓储空间）\n• 企业孵化与加速\n• 合规运营指导\n• 市场调研与定位\n• 法律税务咨询\n• 人才招聘服务';
    }
    if (input.includes('仓储') || input.includes('仓库') || input.includes('存储')) {
      return '我们拥有100万㎡的保税仓储空间，分布在7个服务基地。提供：\n• 智能仓储管理系统\n• 24/7监控服务\n• 快速通关服务\n• 灵活的存储方案\n• 成本优化的物流解决方案';
    }
    if (input.includes('孵化') || input.includes('创业') || input.includes('加速')) {
      return '我们已成功孵化100+企业，提供：\n• 办公空间与基础设施\n• 商业网络对接\n• 融资咨询服务\n• 技术转移支持\n• 市场进入策略\n• 持续运营指导';
    }
    if (input.includes('合规') || input.includes('法律') || input.includes('税务')) {
      return '我们拥有500+专业人才，提供全面的合规服务：\n• 美国法律合规咨询\n• 税务筹划与申报\n• 知识产权保护\n• 数据隐私合规\n• 反垄断合规\n• 环境法规遵循';
    }
    if (input.includes('价格') || input.includes('费用') || input.includes('成本')) {
      return '我们的服务定价透明合理：\n• 仓储费用：按使用面积和时长计费\n• 孵化服务：基础套餐+增值服务\n• 合规咨询：按项目复杂度定价\n• 提供灵活的付款方案\n• 新客户可享受首月优惠';
    }
    if (input.includes('联系') || input.includes('电话') || input.includes('邮箱')) {
      return '您可以通过以下方式联系我们：\n• 美国电话：+1 (650) 690-2661 \n• 中国电话：+86 18676379410\n• 邮箱：support@sBayX.com\n• 在线预约：点击"立即咨询"按钮\n• 微信客服：扫描页面二维码\n• 工作时间：周一至周五 9:00-18:00';
    }
    if (input.includes('案例') || input.includes('成功') || input.includes('客户')) {
      return '我们已帮助众多企业成功出海：\n• 某科技公司：3个月完成北美市场布局\n• 某制造企业：年销售额增长300%\n• 某电商平台：用户数量突破100万\n• 某服务企业：获得A轮融资500万美元';
    }
    if (
      input.includes('资源') ||
      input.includes('资料') ||
      input.includes('指南') ||
      input.includes('报告')
    ) {
      return '我们提供丰富的资源库：\n• 北美市场进入完整指南\n• 2024年中国企业扩张趋势报告\n• 法律合规检查清单\n• 商业计划模板\n• 文化融合网络研讨会\n• 制造业成功案例研究\n• 北美商业生态系统导航网站\n\n您可以在网站"资源与洞察"部分查看所有资源，或直接访问我们的商业生态系统平台。';
    }
    return '感谢您的咨询！如果您需要了解具体的服务详情、价格信息或预约咨询，请告诉我您的具体需求，我会为您提供更详细的信息。您也可以直接点击"立即咨询"按钮，我们的专业团队会尽快与您联系。';
  };

  // --- 发送消息（先跳转意图，后业务回答） ---
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const text = inputValue; // 保存原文
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // ① 先检索是否有页面跳转意图
    const nav = matchNavigationIntent(text);

    if (nav) {
      const jumping: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `已识别到您的需求：${nav.label}。正在为您跳转至相关页面…`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, jumping]);
      setIsTyping(false);

      // 稍作延迟，让用户看到提示气泡
      setTimeout(() => {
        router.push(nav.route);
        // 也可以选择跳转后自动关闭聊天窗：
        // setIsOpen(false);
      }, 800);

      return;
    }

    // ② 无跳转意图，则生成业务回答
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const assistantMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        style={{
          background: 'linear-gradient(135deg, #2563eb, #0891b2)',
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
        }}
        aria-label="打开AI智能助手"
      >
        <div className="relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
          AI智能助手
        </div>
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col border border-gray-200">
            {/* 头部 */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">深贝思AI助手</h3>
                  <p className="text-sm text-blue-100">在线为您服务</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="关闭AI智能助手"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 消息区域 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-200'
                    }`}
                  >
                    <div className="whitespace-pre-line text-sm">{message.content}</div>
                    <div
                      className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {/* 打字指示器 */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* 输入区域 */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="请输入您的问题..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="发送消息"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

              {/* 快捷问题 */}
              <div className="mt-3 flex flex-wrap gap-2">
                {['服务介绍', '仓储费用', '成功案例', '资源库', '联系我们', '关于我们', '运营计划', '硅谷园区'].map(q => (
                  <button
                    key={q}
                    onClick={() => setInputValue(q)}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
