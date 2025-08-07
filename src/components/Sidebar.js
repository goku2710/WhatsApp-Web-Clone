import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { getChats } from '../api';

const Sidebar = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await getChats();
        setChats(res.data);
      } catch (err) {
        console.error('Failed to load chats', err);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="sidebar">
      <h2>Chats</h2>
      {chats.length === 0 ? (
        <p>No chats yet</p>
      ) : (
        chats.map((chat) => (
          <div
            key={chat._id}
            className="chat-item"
            onClick={() => onSelectChat(chat)}
          >
            <strong>{chat.name || chat.number}</strong>
            <div className="last-message">{chat.lastMessage}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Sidebar;
