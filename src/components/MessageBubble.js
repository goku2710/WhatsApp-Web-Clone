import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ sender, text, time }) => {
  return (
    <div className={`bubble ${sender}`}>
      <p>{text}</p>
      <span className="time">{time}</span>
    </div>
  );
};

export default MessageBubble;