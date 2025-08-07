import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import './ChatLayout.css';

const ChatLayout = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="chat-layout">
      <Sidebar onSelectChat={setSelectedChat} />
      <ChatWindow chat={selectedChat} />
    </div>
  );
};

export default ChatLayout;
