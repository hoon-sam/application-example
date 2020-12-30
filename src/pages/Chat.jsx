import React, { useEffect, useState, useRef } from 'react';
import { useImmer } from 'use-immer'
import ChatMessage from '../components/ChatMessage';
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';

const sockJs = new SockJs('http://localhost:8080/ws');
const stompClient = Stomp.over(sockJs);

export default function Chat({ match }) {

  const roomId = match.params.roomId;
  const [content, setContent] = useState('');
  const [messageList, setMessageList] = useImmer([]);
  const inputEl = useRef();

  useEffect(() => {
    connect();
  }, [messageList, roomId]);

  const connect = () => {
    stompClient.connect({}, () => {
      stompClient.subscribe(`/subscribe/${roomId}`, (message) => {
        const _message = JSON.parse(message.body);
        setMessageList((draft) => {
          draft.push(_message);
        });
      });
    });
  }

  const sendMessage = () => {
    stompClient.send(`/app/${roomId}`, {}, JSON.stringify({
      nickname: 'test', content,
    }));
    inputEl.current.value = '';
    inputEl.current.focus();
    setContent('');
  }

  const updateContent = (e) => {
    setContent(e.target.value);
  }

  const renderMessage = () => {
    return (
        messageList.map((message, i) => {
          return (
            <ChatMessage
              nickname={message.nickname}
              content={message.content}
              key={i}
            />
          );
        })
    )
  }

  return (
    <section>
      <h3>{roomId} 채팅방</h3>
      { renderMessage() }
      <input type="text" onKeyUp={updateContent} ref={inputEl} />
      <button onClick={sendMessage}>전송</button>
    </section>
  )
}