"use client";
// <- TODO: !!! Try to get rid of this directive

import { LlmChat } from "@promptbook/components";
// import { MockedFackedLlmExecutionTools } from "@promptbook/fake-llm";
import { RemoteLlmExecutionTools } from "@promptbook/remote-client";
import { useMemo } from "react";

export function ChatWithMe() {
  const llmTools = useMemo(() => {
    // new MockedFackedLlmExecutionTools();

    const llmTools = new RemoteLlmExecutionTools({
      remoteServerUrl: "https://promptbook.s5.ptbk.io/",
      identification: { isAnonymous: false, appId: "20a65fee-59f6-4d05-acd0-8e5ae8345488" },
    });

    return llmTools;
  }, []);

  return (
    <LlmChat
      participants={[
        {
          name: "USER",
          fullname: "User",
          avatarSrc: "https://i.pravatar.cc/300?u=USER",
          color: "blue",
          isMe: true,
        },
      ]}
      {...{ llmTools }}
    />
  );
}
