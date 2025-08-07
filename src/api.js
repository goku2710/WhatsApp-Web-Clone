import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/messages'; // If running locally

export const getChats = () => axios.get(`${API_BASE}/chats`);

export const getMessagesByUser = (wa_id) =>
  axios.get(`${API_BASE}/messages/${wa_id}`);

export const sendMessage = (data) =>
  axios.post(`${API_BASE}/send`, data);
