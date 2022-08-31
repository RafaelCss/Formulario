import { IsAuthenticate } from "../../../Interfaces"
 import {setCookie, parseCookies} from 'nookies'


export async function salvarToken(dados: any) {
  console.log(dados)
  const convertJson = JSON.stringify(dados as IsAuthenticate)
  setCookie(undefined, 'user', convertJson, {
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


