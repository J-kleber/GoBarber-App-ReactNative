import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.29.66:3333',
});

export default api;
