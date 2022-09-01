
import React, { createContext, ReactElement, ReactNode, SetStateAction, useEffect, useState } from "react";
import { IsAuthenticate } from "../../Interfaces";
import { buscarToken } from "../auth/funcao";


interface Props {
  children: ReactNode
}

interface Auth {
  autenticado?: boolean
  userAuth?: SetStateAction<IsAuthenticate>
}

export const AuthContext: React.Context<Auth> = createContext<Auth>({} as Auth)

export function AuthProvider({ children }: Props): ReactElement {
  const [userAuth, setUserAuth] = useState<IsAuthenticate>()

  const user : IsAuthenticate = buscarToken()
  const autenticado =   user?.auth
  useEffect(() => {
    setUserAuth(user)
  }, [])

  return (
    <AuthContext.Provider value={{ autenticado, userAuth }}>
      {children}
    </AuthContext.Provider>
  )

}


