import axios from 'axios';
import { IsAuthenticate } from '../../Interfaces';
import { buscarToken } from '../auth/funcao';
const user : IsAuthenticate =  buscarToken() ;
console.log(user.token)
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_LOCAL,
})

if (user && user?.auth === true) {
  api.defaults.headers.common['Authorization'] = user?.token as string;
}
export default api;


