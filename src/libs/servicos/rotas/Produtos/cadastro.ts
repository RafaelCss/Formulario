import { ListaProdutos, Produto } from "../../../Interfaces";
import api from "../config";

export const cadastrarProdutos = async (dados: Produto) => {
  const reposta = await api.post('/cadastro/produtos', dados)
    .then(res => { return res.data })
    .catch(err => { return err })
  return reposta
}

export const buscarProdutos = async () => {
  const reposta = await api.get('/produtos')
    .then(res => { return res.data })
    .catch(err => { return err })
  return reposta
}

