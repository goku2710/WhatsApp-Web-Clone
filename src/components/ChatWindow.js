import React, { useEffect, useState } from 'react';
import './ChatWindow.css';
import MessageBubble from './MessageBubble';
import SendMessageBox from './SendMessageBox';
import { getMessagesByUser } from '../api';

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!chat) return;
      try {
        const res = await getMessagesByUser(chat._id);
        setMessages(res.data);
      } catch (err) {
        console.error('Failed to load messages', err);
      }
    };

    fetchMessages();
  }, [chat]);

  const handleNewMessage = (msgObj) => {
    setMessages((prev) => [...prev, msgObj]);
  };

  if (!chat) {
    return (
      <div className="chat-window empty">
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <strong>{chat.name || chat.number}</strong>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.status === 'sent' ? 'user' : 'other'}
            text={msg.message}
            time={new Date(msg.timestamp).toLocaleTimeString()}
          />
        ))}
      </div>

      <SendMessageBox
        chat={chat}
        onMessageSent={handleNewMessage}
      />
    </div>
  );
};

export default ChatWindow;
