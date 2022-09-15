
import React, { createContext, ReactElement, ReactNode, SetStateAction, useEffect, useState } from "react";
import { DadosAuthenticate, IsAuthenticate } from "../../Interfaces";
import { setCookie, parseCookies } from 'nookies'
import { buscarToken } from "../auth/funcao";

interface Props {
  children: ReactNode
}

interface Auth {
  autenticado?: boolean
  userAuth?: string
}

export const AuthContext: React.Context<Auth> = createContext<Auth>({} as Auth)

export function AuthProvider({ children }: Props): ReactElement {
  const [userAuth, setUserAuth] = useState<string>()
  const [autenticado, setAutenticado] = useState<boolean>()


  useEffect(() => {
    const  user : IsAuthenticate= buscarToken()
    if (typeof user !== undefined) {
      setUserAuth(user?.usuario)
      setAutenticado(user?.auth)
    }
  })


  return (
    <AuthContext.Provider value={{ autenticado, userAuth }}>
      {children}
    </AuthContext.Provider>
  )

}


