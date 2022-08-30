import { IsAuthenticate } from "../../../Interfaces"


export async function salvarToken(dados: any) {
  const convertJson = JSON.stringify(dados)
  localStorage.setItem('user', convertJson)
}

export async function buscarToken() {
   var user = localStorage.getItem('user')
   return   user as IsAuthenticate
}

export function deleteToken() {
  const session = () => localStorage.removeItem('user')
}


