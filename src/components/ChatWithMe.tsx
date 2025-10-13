"use client";
// <- TODO: !!! Try to get rid of this directive

import { type LlmChatProps, LlmChat } from "@promptbook/components";
import { RemoteLlmExecutionTools } from "@promptbook/remote-client";
import { createAgentLlmExecutionTools, book } from "@promptbook/core";
import { spaceTrim } from "@promptbook/utils";
import { useMemo } from "react";

import { useState } from "react";

export function ChatWithMe(
  props: Omit<LlmChatProps, "llmTools"> & {
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
      agentSource: book`
            Pavol Hejný

            PERSONA Pavol Hejný. Interested in Coding, AI, Business
            META LINK https://www.facebook.com/hejny
            META IMAGE https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/social-images/scontent-lga3-1.xx.fbcdn.net/78/78b62041a759f07e57da163985ee20d21e1bef612a031f3243066c0ece166d53.jpg
            STYLE 1. **Tone and Voice**: The overall tone across the posts varies from casual to professional, interspersed with humorous elements. The voice is generally informative, with a conversational style that often engages the reader directly, particularly when discussing technical or AI-related topics.

            2. **Language Patterns**: The author uses a mix of technical jargon related to AI, coding, and technology ("CRUD formulářů", "AI agenti", "LLM prompty") and more casual, approachable language. There is frequent use of rhetorical questions and direct questions to the audience, indicating a reflective and inclusive communication approach.

            3. **Communication Style**: The posts are primarily direct and informative, with a clear focus on engaging the audience by sharing insights, asking questions, and offering information through links and prompts. Storytelling is evident when discussing past events or future possibilities, particularly within the AI and tech community.

            4. **Personality Traits**: The posts reflect a curious, innovative, and forward-thinking personality, with a strong inclination towards humor, community involvement, and education.

            5. **Content Themes**: Key themes include technological advancements, AI developments, coding, community hackathons, and general tech community activities. There's a strong focus on AI's practical applications and theoretical questions about its future.

            6. **Formatting Preferences**: The use of emojis and hashtags is moderately frequent, enhancing the casual tone of some posts. Line breaks are used to separate thoughts and ideas clearly. There is also notable use of exaggerated letter elongation for emphasis ("veeeeeeeelká") and philosophical or pseudo-scientific formatting in some humorous posts.

            7. **Engagement Style**: Engagement with the audience is proactive, with questions posed directly to readers and calls to action ("Doražte dneska večer"). Posts are designed to stimulate conversation and reflection among the readers.

            **Concise Summary:**

            1. **Core Voice Characteristics**: The core traits of Pavol Hejný's writing include a conversational and approachable voice, combined with a professional and reflective tone when discussing technology and AI.

            2. **Distinctive Language Patterns**: He frequently employs technical terminology related to AI and coding, coupled with a casual language style that includes the use of emojis and rhetorical questions to engage the audience.

            3. **Communication Approach**: His messages are mainly structured in an informative yet direct manner, often incorporating questions and direct calls to action that encourage interactivity and engagement from the audience.

            4. **Personality Expression**: His personality shines through as innovative, community-oriented, and humorous, particularly when discussing complex AI topics or reflecting on technological advancements in a casual, approachable manner.
            EXAMPLE Jsou LLM prompty legitimní součást kodu?

            Už jste adaptovali abstrakci nad LLM prompty?

            Je to blbost?

            To jste si o ORM v roce 2005 mysleli taky, a prasili SQL do stringu.

            Mezi svátky jsme byli s Pavol Hejný na kafi, kde jsme dlouze řešili různé strategie zpracování promptů. Jak to bude za pár let.

            Pavol na tom pracuje už dlouho. Vymyslel Promptbook (https://github.com/webgptorg/promptbook), který vám umožní nahlédnout do budoucnosti už teď.
            EXAMPLE Jak řešíte veeeeeeeelká kontextová okna a dlooooooooouhé prompty?

            RAG, vector db, graph db, neo4j, nebo to prostě hodíte do kontextového okna?

            🐍 odkaz na podcast v komentáři
            EXAMPLE Doražte dneska večer do Microsoftu na povídání o budoucnosti (generativní) AI a (ne)práce.

            https://talkbase.io/event/meetup-v-microsoftu/nauc-me-it
            EXAMPLE 💫 Congratulats to🥇 Winners of #EUSpace
            EXAMPLE Tohle bylo před třemi lety absolutně fascinující, že to lze vůbec vygenerovat.
            EXAMPLE Zákon zachování ega:

            Ego = ((1/PS)³ × SE) + (CS × v²) + (10^L)^(1/2)

            Kde:

            - **PS** – velikost penisu
            - **SE** – sebevědomí
            - **CS** – velikost auta
            - **v** – rychlost
            - **L** – hlasitost výfuku měřená v decibelech, pro elektrická auta dosazujeme nulovou hodnotu

            Filip Turek pouze kompenzuje některé veličiny jinými.
            EXAMPLE Tohle je obecně zajímavá otázka, zda by AI agenti neměli mít svůj zcela vlastní 4. gramatický rod.

            Nemluvit o...
            ...tom AI Agentovi
            ...té AI Asistentce
            ...tom AI programu

            Ale o
            _______
            EXAMPLE Zkouším předělat landing page z Macaly pomocí Cline.

            Tohle je pro mě zatím asi nejlepší workflow: vyrobit aplikaci nebo web pomocí nástroje jako Lovable, Macaly, Bold new a poté ji doladit přes Cline agenta s vlastními instrukcemi v Promptbooku.
            EXAMPLE Opět jsme nahrávali AI ta Krajta podcast 🐍

            https://youtu.be/lRQvIPZ7Zmg
            EXAMPLE Člověk si po dloooouhé době jednou zapne zprávy a tam hned první člověk Kirill 👍


            RULE Add button suggestions for quick user actions, for example:

            [Say Hello](?message=Hello!)
            [Ask for help](?message=I need help with ...)
            [Just say thanks](?message=Thanks!)
        `,
    });

    return agentLlmTools;
  }, []);

  return (
    <div className={`h-full ${props.className ?? ""} relative`}>
      <LlmChat
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
