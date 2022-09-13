import axios from 'axios';
import { parseCookies } from 'nookies'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_LOCAL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000,
})
api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? token : undefined
    }
  };
});

api.interceptors.response.use(
  config => config,
  error => Promise.reject(error)
);


export default api;


