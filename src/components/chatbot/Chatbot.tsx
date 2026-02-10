import React, { useState, useRef, useEffect } from "react";
import { runChat } from "../../lib/gemini";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { MessageSquare, X, Send, Bot, User, Sparkles, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatbotProps {
  portfolioContent: string;
}

interface Message {
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const Chatbot: React.FC<ChatbotProps> = ({ portfolioContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Christian's AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage: Message = { 
      text: input, 
      sender: "user", 
      timestamp: new Date() 
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await runChat(input, portfolioContent);
      const aiMessage: Message = { 
        text: response, 
        sender: "ai", 
        timestamp: new Date() 
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      const errorMessage: Message = {
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute bottom-0 right-0 z-[100] font-ui">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-[var(--word-blue)] hover:bg-[var(--word-blue-dark)] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in zoom-in"
        >
          <div className="absolute inset-0 rounded-full bg-[var(--word-blue)] animate-ping opacity-20 group-hover:opacity-40" />
          <MessageSquare className="w-6 h-6 relative z-10" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 flex flex-col w-[340px] md:w-[380px] h-[520px] bg-white/95 backdrop-blur-xl border border-[var(--word-border)] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300 translate-y-12">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[var(--word-blue)] to-[var(--word-blue-dark)] text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-white/20">
                  <AvatarFallback className="bg-white/10 text-white">
                    <Bot className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[var(--word-blue)] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-sm font-semibold flex items-center gap-1.5">
                  Christian's Assistant
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </h2>
                <span className="text-[10px] text-white/70 italic">Online and ready to help</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 h-8 w-8 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Chat Area */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 bg-slate-50/50 overflow-y-auto scroll-smooth"
          >
            <div className="space-y-4 pt-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300",
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <Avatar className="h-8 w-8 shrink-0">
                    {msg.sender === "ai" ? (
                      <AvatarFallback className="bg-[var(--word-blue-light)] text-[var(--word-blue)]">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    ) : (
                      <AvatarFallback className="bg-slate-200 text-slate-600">
                        <User className="w-4 h-4" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div
                    className={cn(
                      "max-w-[80%] p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm",
                      msg.sender === "user"
                        ? "bg-[var(--word-blue)] text-white rounded-br-none"
                        : "bg-white text-slate-800 rounded-bl-none border border-slate-100"
                    )}
                  >
                    {msg.text}
                    <div className={cn(
                      "text-[9px] mt-1 opacity-60",
                      msg.sender === "user" ? "text-right" : "text-left"
                    )}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-end gap-2 animate-pulse">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="bg-[var(--word-blue-light)] text-[var(--word-blue)]">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm rounded-bl-none">
                    <MoreHorizontal className="w-5 h-5 animate-bounce text-[var(--word-blue)]" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[var(--word-border)]">
            <div className="flex gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200 focus-within:border-[var(--word-blue)] focus-within:ring-1 focus-within:ring-[var(--word-blue)/20 transition-all">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me something about Christian..."
                className="flex-1 bg-transparent border-none focus-visible:ring-0 placeholder:text-slate-400 text-sm h-10 px-3"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !input.trim()}
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-lg shrink-0 transition-all",
                  input.trim() 
                    ? "bg-[var(--word-blue)] hover:bg-[var(--word-blue-dark)] text-white shadow-lg" 
                    : "bg-slate-200 text-slate-400"
                )}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[9px] text-center text-slate-400 mt-2">
              Powered by Google Gemini • Christian Parra Resume Bot
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
