import React from 'react';

export default function ChatMessage({ nickname, content }) {
  return (
    <div>
      <span>{ nickname }: { content }</span>
    </div>
  )
}