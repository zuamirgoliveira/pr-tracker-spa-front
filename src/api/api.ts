import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BFF_URL,
  withCredentials: true,
  timeout: 5000,
});

export default api;