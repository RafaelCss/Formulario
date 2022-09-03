import { ListaProdutos, Produto } from "../../../Interfaces";
import api from "../config";

export const cadastrarProdutos = async (dados: Produto) => {
  await api.post('/cadastro/produtos', dados)
    .then(res => res.data)
    .catch(err => err)
}

export const buscarProdutos =   async () => {
  await api.get('/produtos')
    .then(res => {return res.data})
    .catch(err => {return err})
}

