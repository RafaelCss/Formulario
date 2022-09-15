import { createContext, ReactNode,useState } from "react";
import { ListaProdutos, Produto } from "../../Interfaces";
import { buscarProdutos } from "../rotas/Produtos/cadastro";
interface Props {
  children: ReactNode
}

interface ProdutoContext {
  cadastroValores?: Produto
  guardarValores: (dados: Produto) => void
  buscar : () => Promise<ListaProdutos>
}
export const CadastroContext: React.Context<ProdutoContext> = createContext<ProdutoContext>({} as ProdutoContext)

export function CadastroProvider({ children }: Props) {
  const [cadastroValores, setCadastroValores] = useState<Produto>()
  const [dadoUser ,setDadosUser] = useState()


  function guardarValores(dados: Produto) {
    setCadastroValores((values: any) => {
      return {
        ...values,
        ...dados
      }
    })
  }
 async function buscar(){
   const produtos : ListaProdutos = await buscarProdutos()
   .then(res => {return res})
   .catch(err => {return err})
   return produtos;
  }
  return (
    <CadastroContext.Provider value={{ cadastroValores, guardarValores, buscar }}>
      {children}
    </CadastroContext.Provider>
  )
}
