import { IsAuthenticate } from "../../../Interfaces"
import { setCookie, parseCookies } from 'nookies'


export async function salvarToken(dados: IsAuthenticate) {
  setCookie(undefined, 'user', JSON.stringify(dados), {
    maxAge: 60 * 60 * 1 // uma hora
  })
  sessionStorage.setItem('token', dados.token as string)
}

export  function buscarToken() {
  const { ['token']: user } =  parseCookies()
 //const formatandoToken = JSON.parse(user)
if(user) return  JSON.parse(user)
}

export function deleteToken() {
  const session = () => localStorage.removeItem('user')
}


