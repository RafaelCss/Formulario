import { ReactElement } from "react";

export interface Isteps {
  steps : Conteudo;
}

export interface Conteudo {
  conteudo: ReactElement | string;
  titulo: string;
  id: string | number;
  icone: ReactElement;
}


export interface IUser{
  dados : CadastroUser
}

export interface CadastroUser{
  email: string
  senha : string
  data ?: Date
}