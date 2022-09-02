import { ReactElement } from "react";

export interface Isteps {
  steps: Conteudo;
}

export interface Conteudo {
  conteudo: ReactElement | string;
  titulo: string;
  id: string | number;
  icone: ReactElement;
}


export interface IUser {
  email: string
  senha: string
}

export interface CadastroUser {
  email: string
  senha: string
  data?: Date
}

export interface Autenticado {
  autenticado: boolean
}


export interface IsAuthenticate {
  auth ?: boolean
  token ?: string
  usuario ?: string
}


export interface Produto {
  nomeProduto : string
  tipo : string
  valor : string
  descricao : string
  nomeFornecedor : string
  email : string
  telefone : string
}
export interface Formulario {
  dados : Produto
  enviarDados ?: (dados : string) => void
}
