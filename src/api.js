import axios from 'axios';

const API_BASE = "https://whatsapp-clone-backend-ytez.onrender.com"; 

export const getChats = () => axios.get(`${API_BASE}/chats`);
export const getMessagesByUser = (wa_id) =>
  axios.get(`${API_BASE}/messages/${wa_id}`);
export const sendMessage = (data) =>
  axios.post(`${API_BASE}/send`, data);
