
import { CadastroUser, IsAuthenticate } from '../../../Interfaces'
import api from '../../rotas/config'
import Router from 'next/router';
import { salvarToken } from '../funcao';
const rota = Router


async function logar(dados: CadastroUser) {
  const resposta = await api.post('/login', dados)
    .then(async (res) => {
      const { dados } =  res.data
      if (dados.auth == true) {
        await salvarToken(dados)
        rota.push('/produtos')
      }
      return dados
    })
    .catch(err => { return err })

    return resposta
  }

export default { logar }