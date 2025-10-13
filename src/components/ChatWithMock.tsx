"use client";
// <- TODO: !!! Try to get rid of this directive

import { Chat } from "@promptbook/components";

export function ChatWithMock() {
  return (
    <Chat
      title="Chat with Mock"
      messages={[
        {
          id: "1",
          from: "USER",
          content: "Question?",
          date: new Date(),
          isComplete: true,
        },
        {
          id: "2",
          from: "ASSISTANT",
          content: "Thinking...",
          date: new Date(),
          isComplete: false,
        },
      ]}
      participants={[
        {
          name: "USER",
          fullname: "You",
          isMe: true,
          color: "#3b82f6",
          avatarSrc: "https://i.pravatar.cc/300?u=USER",
        },
        { name: "ASSISTANT_1", fullname: "AI Assistant", color: "#10b981" },
        { name: "ASSISTANT_2", fullname: "Code Helper", color: "#f59e0b" },
      ]}
    />
  );
}
