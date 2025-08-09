import axios from 'axios';

// ✅ Backend base URL (Render)
const API_BASE = "https://whatsapp-clone-backend-ytez.onrender.com/api/messages";

// GET /api/messages/chats
export const getChats = () => axios.get(`${API_BASE}/chats`);

// GET /api/messages/messages/:wa_id
export const getMessagesByUser = (wa_id) =>
  axios.get(`${API_BASE}/messages/${wa_id}`);

// POST /api/messages/send
export const sendMessage = (data) =>
  axios.post(`${API_BASE}/send`, data);
