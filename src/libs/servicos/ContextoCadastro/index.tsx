import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { Produto } from "../../Interfaces";
interface Props {
  children: ReactNode
}

interface ProdutoContext {
  cadastroValores?: Produto
  guardarValores: (dados: Produto) => void
}
export const CadastroContext: React.Context<ProdutoContext> = createContext<ProdutoContext>({} as ProdutoContext)

export function CadastroProvider({ children }: Props) {

  const [cadastroValores, setCadastroValores] = useState<Produto>()

  function guardarValores(dados: Produto) {
    setCadastroValores((values: any) => {
      return {
        ...values,
        ...dados
      }
    })
  }

  return (
    <CadastroContext.Provider value={{ cadastroValores, guardarValores }}>
      {children}
    </CadastroContext.Provider>
  )
}
