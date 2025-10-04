'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Assalomu alaykum! Innoweb.uz ga xush kelibsiz. Sizga qanday yordam bera olaman?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session-${Date.now()}`);

  const scrollToBottom = () => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }
    scrollToBottom();
  }, [messages, isOpen, isInitialLoad]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
          sessionId: sessionId.current,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Kechirasiz, xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button with Neon Glow */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.8)] bg-gradient-primary hover:bg-gradient-hover z-50 group border-2 border-neon-cyan animate-glow-pulse transition-all duration-300 hover:scale-110"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white animate-scale-in" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </Button>

      {/* Chat Window with Neon Theme */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[600px] shadow-neon-cyan z-50 flex flex-col overflow-hidden border-2 border-neon-cyan/50 glass-effect backdrop-blur-2xl animate-scale-in">
          {/* Header with Gradient */}
          <div className="bg-gradient-primary text-white p-4 flex items-center justify-between border-b border-neon-cyan/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-glow-pulse">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black">Innoweb AI</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                  Online · Javob beradi
                </p>
              </div>
            </div>
          </div>

          {/* Messages with Neon Styling */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/60">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex animate-fade-in',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl px-4 py-3',
                    message.role === 'user'
                      ? 'bg-gradient-primary text-white shadow-neon-cyan'
                      : 'glass-effect border border-neon-cyan/30 text-gray-200'
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass-effect rounded-2xl px-4 py-3 border border-neon-cyan/30 animate-pulse">
                  <Loader2 className="w-5 h-5 animate-spin text-neon-cyan" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input with Neon Border */}
          <div className="p-4 border-t border-neon-cyan/30 bg-black/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Xabar yozing..."
                className="flex-1 px-4 py-3 rounded-xl glass-effect border-2 border-neon-cyan/30 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 transition-all duration-300"
                disabled={loading}
              />
              <Button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                size="icon"
                className="rounded-xl bg-gradient-primary hover:bg-gradient-hover shadow-neon-cyan hover:shadow-[0_0_30px_rgba(0,255,242,0.8)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
