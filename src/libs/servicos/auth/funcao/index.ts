
export function salvarToken(){
 const session =  () =>  localStorage.setItem( 'teste', 'teste' )
}
salvarToken()
export function buscarToken(){
  const session =  () => localStorage?.getItem( 'id_user')
  return JSON.stringify(session)
}

export function deleteToken(){
  const session =  () => localStorage.removeItem( 'id_user')
}


