import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getChatRoomList } from '../api';
import './ChatList.css';

export default function ChatList() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getChatRoomList()
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  const renderChatRooms = () => {
    return (
      rooms.map((room, i) => (
        <li key={i}>
          <Link to={`/chat/${room.id}`}>{room.name}</Link>
        </li>
      ))
    )
  }

  return (
    <div>
      <ul>
        { renderChatRooms() }
      </ul>
    </div>
  );
}