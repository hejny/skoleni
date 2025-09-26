"use client";

import { ChatWithMe } from "@/components/ChatWithMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full filter blur-xl animate-pulse"></div>
      </div>

      {/* Header Section - Minimal but present */}
      <header className="relative z-10 p-4 md:p-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              PH
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-white">Pavol Hejný</h1>
              <p className="text-sm text-gray-300">AI Workshop Specialist</p>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for workshops
            </div>
          </div>
        </div>
      </header>

      {/* Main Persona Section - This IS the website */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Persona Introduction */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  AI Integration
                </span>
                <span className="block">Consultant</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Ready to transform your business with AI? Let's chat about custom workshops, 
                practical implementation strategies, and how to seamlessly integrate AI into your workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="text-sm text-gray-300">Workshops Delivered</div>
                <div className="text-2xl font-bold text-white">50+</div>
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="text-sm text-gray-300">Companies Trained</div>
                <div className="text-2xl font-bold text-white">25+</div>
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="text-sm text-gray-300">Satisfaction Rate</div>
                <div className="text-2xl font-bold text-white">98%</div>
              </div>
            </div>

            {/* Quick intro topics */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400 uppercase tracking-wide">ASK ME ABOUT:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30">
                  LLM Integration
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30">
                  AI Agents
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30">
                  Workflow Automation
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30">
                  Custom Training
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30">
                  Business AI Strategy
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30">
                  Practical Implementation
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Chat Interface (The Persona) */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Start the Conversation</h3>
                <p className="text-gray-300 text-sm">
                  I'm here to answer your questions about AI workshops, pricing, content, and how we can transform your business together.
                </p>
              </div>
              
              {/* Chat Component - This IS the main interface */}
              <div className="min-h-[400px] md:min-h-[500px]">
                <ChatWithMe className="max-h-[400px] md:max-h-[500px]"/>
              </div>
              
              <div className="mt-4 text-xs text-gray-400 text-center">
                💡 Try asking: "What topics do you cover in workshops?" or "How much does a custom training cost?"
              </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 shadow-lg animate-bounce">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-3 shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Essential info embedded naturally */}
      <footer className="relative z-10 p-4 md:p-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="https://www.facebook.com/hejny" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://github.com/webgptorg/promptbook" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Promptbook
              </a>
              <span>AI Workshop Specialist</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Pavol Hejný • Professional AI Integration Training
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
