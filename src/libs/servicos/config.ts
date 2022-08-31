import axios from 'axios';
import { parseCookies } from 'nookies';
const {'user' : user } = parseCookies()

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_LOCAL,
});

/* if(user.dados.token){

}
 */
export default api;


