"use client";
// <- TODO: Try to get rid of this directive

import { LlmChat } from "@promptbook/components";
import { MockedFackedLlmExecutionTools } from "@promptbook/fake-llm";
import { useMemo } from "react";

export function ChatWithMe() {
  const llmTools = useMemo(() => {
    return new MockedFackedLlmExecutionTools();
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
