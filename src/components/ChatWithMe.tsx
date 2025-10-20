"use client";
// <- TODO: !!! Try to get rid of this directive

import { type LlmChatProps, LlmChat } from "@promptbook/components";
import { RemoteLlmExecutionTools } from "@promptbook/remote-client";
import { createAgentLlmExecutionTools, book } from "@promptbook/core";
import { spaceTrim } from "@promptbook/utils";
import { useMemo } from "react";
import { useState } from "react";
import { PAVOL_HEJNY_AGENT } from "../../pavol-hejny.book";

export function ChatWithMe(
  props: Omit<LlmChatProps, "title" | "llmTools"> & {
    className?: string;
    sendMessage: (msg: string) => void;
  },
) {
  const [isInitialWelcomeVisible, setInitialWelcomeVisible] = useState(true);

  const llmTools = useMemo(() => {
    // new MockedFackedLlmExecutionTools();

    const baseLlmTools = new RemoteLlmExecutionTools({
      remoteServerUrl: "https://promptbook.s5.ptbk.io/",
      identification: {
        isAnonymous: false,
        appId: "20a65fee-59f6-4d05-acd0-8e5ae8345488",
      },
    });

    const agentLlmTools = createAgentLlmExecutionTools({
      llmTools: baseLlmTools,
      agentSource: PAVOL_HEJNY_AGENT
    });

    return agentLlmTools;
  }, []);

  return (
    <div className={`h-full ${props.className ?? ""} relative`}>
      <LlmChat
        title={"Chat with Pavol Hejný"}
        persistenceKey="chat-with-pavol-hejny"
        isSaveButtonEnabled={false}
        userParticipantName="USER"
        llmParticipantName="PAVOL_HEJNY"
        initialMessages={[]}
        participants={[
          {
            name: "PAVOL_HEJNY",
            fullname: "Pavol Hejný",
            avatarSrc:
              "https://www.pavolhejny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpavol-hejny-transparent.56d4a7a5.png&w=1080&q=100",
            color: "#79EAFD",
            isMe: false,
            agentSource: PAVOL_HEJNY_AGENT
          },
          {
            name: "USER",
            fullname: "User",
            color: "#115EB6",
            isMe: true,
          },
        ]}
        className={`h-full flex flex-col ${props.className ?? ""}`}
        {...{ llmTools }}
        {...props}
        onChange={(chatMessages, ...rest) => {
          setInitialWelcomeVisible(chatMessages.length === 0);
          if (props.onChange) props.onChange(chatMessages, ...rest);
        }}
      >
        {isInitialWelcomeVisible && (
          <div className="h-full w-full">
            <div className="persona-container bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[var(--accent)] max-w-2xl w-full mx-4 sm:mx-auto pointer-events-auto flex flex-col items-center">
              <img
                src="https://www.pavolhejny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpavol-hejny-transparent.56d4a7a5.png&w=1080&q=100"
                alt="Pavol Hejný"
                className="persona-photo"
              />
              <h1 className="persona-title text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                Hi! I'm Pavol
              </h1>
              <p className="persona-subtitle text-gray-300 text-base md:text-lg leading-relaxed text-center max-w-xl">
                Welcome to my AI-powered workspace. I'm here to help transform
                your business with practical AI integration. Ask me about
                workshops, pricing, implementation strategies, or anything else
                you're curious about.
              </p>
              <div className="persona-buttons">
                <button
                  type="button"
                  className="persona-button"
                  onClick={() =>
                    void props.sendMessage("Tell me about your workshops!")
                  }
                >
                  Workshop Design
                </button>
                <button
                  type="button"
                  className="persona-button"
                  onClick={() =>
                    void props.sendMessage("Tell me about your AI strategy!")
                  }
                >
                  AI Strategy
                </button>
                <button
                  type="button"
                  className="persona-button"
                  onClick={() =>
                    void props.sendMessage("Tell me about your team training!")
                  }
                >
                  Team Training
                </button>
                <button
                  type="button"
                  className="persona-button"
                  onClick={() =>
                    void props.sendMessage(
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
      </LlmChat>
    </div>
  );
}
