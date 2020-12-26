import React from 'react';


export default function Chat({ match }) {

  const roomId = match.params.roomId;

  return (
    <section>
      <h3>{roomId} 채팅방</h3>
    </section>
  )
}