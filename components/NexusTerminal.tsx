
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

// Icons
const TerminalIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const XIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const SendIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: number;
}

const SYSTEM_PROMPT = `You are Nexus Core, the intelligent interface for the Nexus AI Suite.
Your mission: Assist users in understanding how to leverage AI for SEO domination, organic traffic growth, and topical authority.
Knowledge Base:
${PROJECTS.map(p => `- ${p.name}: ${p.description}`).join('\n')}
Behavior: Concise, professional, cyberpunk tone.
`;

const NexusTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', text: 'NEXUS_OS v4.2 INITIALIZED. AWAITING QUERY...', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
      if (process.env.API_KEY) {
          aiRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
      }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !aiRef.current) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      const chatHistory = messages
        .filter(m => m.role !== 'system')
        .map(m => ({
             role: m.role,
             parts: [{ text: m.text }]
        }));
      chatHistory.push({ role: 'user', parts: [{ text: userMsg.text }]});

      const response = await aiRef.current.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: chatHistory,
        config: { systemInstruction: SYSTEM_PROMPT }
      });

      let fullResponse = '';
      const responseId = Date.now();
      setMessages(prev => [...prev, { role: 'model', text: '', timestamp: responseId }]);

      for await (const chunk of response) {
        const text = chunk.text;
        if (text) {
            fullResponse += text;
            setMessages(prev => 
                prev.map(msg => 
                    msg.timestamp === responseId 
                    ? { ...msg, text: fullResponse } 
                    : msg
                )
            );
        }
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'system', text: 'ERR: UPLINK FAILED.', timestamp: Date.now() }]);
    } finally {
      setIsThinking(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 group flex items-center gap-3 p-1 pr-4 rounded bg-[var(--bg-panel)] border border-[var(--accent-core)] shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all"
      >
        <div className="w-10 h-10 bg-[var(--accent-core)] flex items-center justify-center text-black font-bold">
            <TerminalIcon className="w-5 h-5" />
        </div>
        <div className="text-left font-mono">
            <div className="text-[10px] text-[var(--accent-core)] tracking-widest uppercase">Nexus Core</div>
            <div className="text-[10px] text-[var(--text-secondary)]">Standby...</div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 left-4 sm:left-8 z-50 w-[95vw] sm:w-[450px] h-[500px] flex flex-col bg-[var(--bg-deep)] border border-[var(--accent-dim)] shadow-[0_0_40px_rgba(0,0,0,0.8)] font-mono text-sm">
      {/* HUD Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-panel-highlight)] border-b border-[var(--accent-dim)]">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--accent-core)] animate-pulse"></div>
            <span className="text-[var(--accent-core)] uppercase tracking-widest text-xs">Terminal uplink</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-[var(--text-secondary)] hover:text-white">
            <XIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
                className={`max-w-[90%] p-3 border-l-2 ${
                    msg.role === 'user' 
                    ? 'border-white bg-[rgba(255,255,255,0.05)] text-white' 
                    : msg.role === 'system'
                    ? 'border-transparent text-[var(--accent-dim)] italic text-xs'
                    : 'border-[var(--accent-core)] bg-[rgba(249,115,22,0.05)] text-[var(--text-primary)]'
                }`}
            >
               {msg.role === 'model' && <span className="text-[var(--accent-core)] text-[10px] block mb-1">:: NEXUS_RESPONSE</span>}
               {msg.text}
               {msg.role === 'model' && idx === messages.length - 1 && isThinking && <span className="animate-pulse">_</span>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-2 bg-[var(--bg-panel)] border-t border-[var(--border-subtle)] flex gap-2">
        <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER COMMAND..."
            className="flex-1 bg-black border border-[var(--border-subtle)] text-[var(--accent-core)] p-2 focus:outline-none focus:border-[var(--accent-core)] uppercase placeholder:text-[var(--text-tertiary)]"
        />
        <button 
            type="submit"
            disabled={!input.trim() || isThinking}
            className="p-2 bg-[var(--accent-core)] text-black font-bold hover:bg-white disabled:opacity-50 transition-colors"
        >
            <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default NexusTerminal;
