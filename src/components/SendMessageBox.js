import React, { useState } from 'react';
import './SendMessageBox.css';
import { sendMessage } from '../api';

const SendMessageBox = ({ chat, onMessageSent }) => {
  const [text, setText] = useState('');

  const handleSend = async () => {
    if (text.trim() === '') return;
    try {
      const res = await sendMessage({
        wa_id: chat._id,
        name: chat.name,
        number: chat.number,
        message: text,
      });
      onMessageSent(res.data);
      setText('');
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <div className="send-box">
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendMessageBox;
