'use client';
// <- TODO: Try to get rid of this directive

import Image from "next/image";
import {Chat} from "@promptbook/components";


export function ChatWithMe() {
  return (
        <Chat 
    messages={[
        { id: '1', from: 'USER', content: 'Hello!', date: new Date(), isComplete: true },
        { id: '2', from: 'ASSISTANT', content: 'Hi! How can I help?', date: new Date(), isComplete: true }
    ]} 
    participants={[{
      name: 'USER',
      fullname: 'User',
      avatarSrc: 'https://i.pravatar.cc/300?u=USER',
      color: 'blue',
      isMe: true
    }]}
    onMessage={()=>{}}
    // onReset={handleReset}
/>
  );
}
