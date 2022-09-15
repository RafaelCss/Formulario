import { CadastroUser } from "../../../Interfaces"
import api from "../config"

export const cadastroUsuario = async (dados: CadastroUser) => {
  const reposta = await api.post('/cadastro/usuario', dados)
    .then(res => { return res.data })
    .catch(err => { return err })
  return reposta
}
