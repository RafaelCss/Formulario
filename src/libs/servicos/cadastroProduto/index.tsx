
import React, { createContext, ReactElement, ReactNode, SetStateAction, useEffect, useState } from "react";
import { buscarToken } from "../auth/funcao";


interface Props {
  children: ReactNode
}

interface Auth {
  autenticado: boolean
  token?: string
  userToken?: SetStateAction<undefined>
}

export const AuthContext: React.Context<Auth> = createContext<Auth>({} as Auth)

export function AuthProvider({ children }: Props): ReactElement {
  const [auth, setAuthToken] = useState<string>()
  const token = buscarToken()
  const autenticado = auth ? true : false
  useEffect(() => {
    setAuthToken(token)
  }, [])
  return (
    <AuthContext.Provider value={{ autenticado, token }}>
      {children}
    </AuthContext.Provider>
  )

}


