"use client";

import { Color } from "@promptbook/color";
import { Chat } from "@promptbook/components";
import { spaceTrim } from "@promptbook/utils";

export function TestChatRichFormatting() {
  return (
    <Chat
      title="Chat Preview"
      participants={[
        {
          name: "USER",
          fullname: "You",
          isMe: true,
        },
        {
          name: "ASSISTANT_1",
          fullname: "AI Assistant",
          // color: Color.fromHex("#10b981"),
          // <- TODO: !!!! Allow to pass here colors
          avatarSrc: "https://randomuser.me/api/portraits/men/0.jpg",
        },
        {
          name: "ASSISTANT_2",
          fullname: "Code Helper",
          // color: Color.fromHex("#f59e0b"),
          avatarSrc: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "ASSISTANT_3",
          fullname: "Writing Assistant",
          // color: Color.fromHex("#8b5cf6"),
          avatarSrc: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      ]}
      messages={[
        {
          id: 1,
          date: new Date("2025-10-13T01:37:11.367Z"),
          from: "USER",
          content:
            "Hi @assistant! Can you show me all the *rich formatting* features you support? 😄 #formatting",
          isComplete: true,
        },
        {
          id: 2,
          date: new Date("2025-10-13T01:37:11.367Z"),
          from: "ASSISTANT_1",
          content: spaceTrim(`
            **Absolutely!** Here’s a quick overview:
            
            - **Bold**
            - _Italic_
            - __Underline__
            - ~~Strikethrough~~
            - \`Inline code\`
            - Code block:
            
            \`\`\`js
            console.log('Hello, world!');
            \`\`\`
            > Blockquote
            > With
            > Multiple lines
            
            
            - Some text with [Link](https://example.com)
            - ![image](https://img.youtube.com/vi/nD1v9dMvnLY/maxresdefault.jpg)
            - Lists:
              - Item 1
                - Nested item
            - Numbered list:
              1. First
                 1. Nested
            - Table:
            
            | Syntax | Description |
            |--------|-------------|
            | Header | Title       |
            | Cell   | Data        |
            
            - Emoji: 😄 🎉
            - Mention: @user
            - Hashtag: #demo
            - Math: $E=mc^2$
            - Horizontal rule:
            
            ---
            `),
          isComplete: true,
        },
        {
          id: 3,
          date: new Date("2025-10-13T01:37:11.367Z"),
          from: "USER",
          content: spaceTrim(`
            Wow, that's a lot! Can you combine some of them?
            
            **Bold _italic_ and \`inline code\`**
            
            Or maybe:
            > _Blockquote with a [link](https://example.com)_
            
            And a table:
            
            | Name | Value |
            |------|-------|
            | Pi   | $\pi$ |
            
            ---
            `),
          isComplete: true,
        },
        {
          id: 4,
          date: new Date("2025-10-13T01:37:11.367Z"),
          from: "ASSISTANT_1",
          content: spaceTrim(`
            Of course! Here’s a creative mix:
            
            - ~~Strikethrough~~ and __underline__
            - 1. Numbered with *italic* and emoji 🚀
            - - Nested \`inline code\`
            
            > Blockquote with math: $a^2 + b^2 = c^2$
            
            ---
            
            Let me know if you want to see more! #rich #features
            `),
          isComplete: true,
        },
        {
          id: 5,
          date: new Date("2025-10-13T01:37:11.367Z"),
          from: "ASSISTANT_1",
          content: spaceTrim(`
            And here are some more emojis:
            
            😄🎉🚀💡📊📝🔥🌟✅❌
            ❤🧡💙💚💛🧡❤️🤎🖤💜
            🐱‍👤🐱‍💻🐱🚀🐱‍🏍💫🎞🎫🎠🎏
            😀😀😁😂🤣😃😄😆😅🤩
            ➿🛂🛃🛄🛅♿📶🚻🚹🚾
            `),
          isComplete: true,
        },
        {
          id: 6,
          date: new Date("2025-10-13T01:37:11.367Z"),
          from: "ASSISTANT_1",
          content: spaceTrim(`
            ## And lists:
            
            - Item 1
            - Item 2
                - Nested Item 2a
                - Nested Item 2b
            - Item 3
            
            1. First item
            2. Second item
               1. Nested second item a
               2. Nested second item b
            3. Third item
            `),
          isComplete: true,
        },
      ]}
      onFeedback={(feedbackData) => {
        console.info(feedbackData);
      }}
      isSaveButtonEnabled
    />
  );
}

/**
 * TODO: !!!! Fix: ChatMessageItem.tsx:199 A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
 */
