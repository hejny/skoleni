"use client";

import { ChatWithMe } from "@/components/ChatWithMe";
import { useSendMessageToLlmChat } from "@promptbook/components";
import { useEffect, useState } from "react";

export default function Home() {
  const sendMessage = useSendMessageToLlmChat();
  const [isInitialWelcomeVisible, setInitialWelcomeVisible] = useState(true);

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Ambient background effects - representing the AI presence */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle top bar with essential identity */}
      <div className="relative z-20 flex justify-between items-center p-4 md:p-6 bg-black/10 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            PH
          </div>
          <div>
            <div className="text-white text-sm font-medium">Pavol Hejný</div>
            <div className="text-gray-400 text-xs">AI Workshop Specialist</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm">Online now</span>
        </div>
      </div>

      {/* THE PERSONA IS THE WEBSITE - Full-screen chat interface */}
      <div className="flex-1 relative z-10 p-4 md:p-6">
        <div className="h-full max-w-6xl mx-auto">
          {/* Welcome message overlay - appears on first visit */}
          {isInitialWelcomeVisible && (
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto pointer-events-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Hi! I'm Pavol
                </h1>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Welcome to my AI-powered workspace. I'm here to help transform
                  your business with practical AI integration. Ask me about
                  workshops, pricing, implementation strategies, or anything
                  else you're curious about.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-xs cursor-pointer"
                    onClick={() =>
                      void sendMessage("Tell me about your workshops!")
                    }
                  >
                    Workshop Design
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs cursor-pointer"
                    onClick={() =>
                      void sendMessage("Tell me about your AI strategy!")
                    }
                  >
                    AI Strategy
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-xs cursor-pointer"
                    onClick={() =>
                      void sendMessage("Tell me about your team training!")
                    }
                  >
                    Team Training
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-xs cursor-pointer"
                    onClick={() =>
                      void sendMessage(
                        "Tell me about your implementation process!",
                      )
                    }
                  >
                    Implementation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* The main persona interface - THIS IS THE WEBSITE */}
          <div className="h-full bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="h-full p-6 md:p-8">
              <ChatWithMe
                className="h-full"
                sendMessage={sendMessage}
                onChange={(chatMessages) => {
                  setInitialWelcomeVisible(chatMessages.length === 0);
                }}
              />
            </div>
          </div>

          {/* Floating contextual hints */}
          <div className="absolute bottom-8 left-8 right-8 z-30 pointer-events-none">
            <div className="flex justify-center">
              <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                <p className="text-gray-300 text-xs text-center">
                  💡 Try: "Tell me about your workshops" • "What's your
                  pricing?" • "How can AI help my team?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal footer info integrated into the persona space */}
      <div className="relative z-20 p-4 bg-black/10 backdrop-blur-sm border-t border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-2 sm:space-y-0">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/hejny"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/webgptorg/promptbook"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Promptbook Engine
            </a>
          </div>
          <div>© 2024 Pavol Hejný • AI Integration Specialist</div>
        </div>
      </div>
    </div>
  );
}
