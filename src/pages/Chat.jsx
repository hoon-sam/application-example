import React, { useEffect, useState } from 'react';
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';

const sockJs = new SockJs('/ws');
const stompClient = Stomp.over(sockJs);

export default function Chat({ match }) {

  const roomId = match.params.roomId;
  const [message, setMessage] = useState('');

  useEffect(() => {
    stompClient.connect({}, (frame) => {
      console.log('Connected:', frame);
      stompClient.subscribe(`/subscribe/${roomId}`, (message) => {
        console.log(message);
      })
    });
  }, [roomId]);

  const sendMessage = () => {
    stompClient.send(`/app/${roomId}`, {}, JSON.stringify({
      nickname: 'test', message: message,
    }))
  }

  const updateMessage = (e) => {
    setMessage(e.target.value);
  }

  return (
    <section>
      <h3>{roomId} 채팅방</h3>
      <input type="text" onKeyUp={updateMessage} />
      <button onClick={sendMessage}>전송</button>
    </section>
  )
}