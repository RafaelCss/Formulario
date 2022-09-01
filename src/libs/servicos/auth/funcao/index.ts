import { IsAuthenticate } from "../../../Interfaces"
 import {setCookie, parseCookies} from 'nookies'


export async function salvarToken(dados: IsAuthenticate) {
  setCookie(undefined, 'user',JSON.stringify( dados), {
    maxAge : 60 * 60 * 1 // uma hora
  })
}

 export  function buscarToken() {
   const {'user': user}  = parseCookies()
    return   user ;
}

export function deleteToken() {
  const session = () => localStorage.removeItem('user')
}


