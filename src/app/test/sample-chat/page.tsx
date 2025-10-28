"use client";

import { ChatWithMe } from "@/components/ChatWithMe";
import { LlmChat, useSendMessageToLlmChat } from "@promptbook/components";
import { book, createAgentLlmExecutionTools } from "@promptbook/core";
import { RemoteLlmExecutionTools } from "@promptbook/remote-client";
import { useMemo, useState } from "react";
import { PAVOL_HEJNY_AGENT } from "../../../../pavol-hejny.book";

export default function Page() {


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
      agentSource: book`
            AI Friend
        
        `,
    });

    return agentLlmTools;
  }, []);

  return (
    <LlmChat
      llmTools={llmTools}
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
          agentSource: PAVOL_HEJNY_AGENT,
        },
        {
          name: "USER",
          fullname: "User",
          color: "#115EB6",
          isMe: true,
        },
      ]}
      className={`h-full flex flex-col`}
    />

  );
}
