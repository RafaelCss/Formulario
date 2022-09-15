
import { CadastroUser, IsAuthenticate } from '../../../Interfaces'
import api from '../../rotas/config'
import Router from 'next/router';
import { salvarToken } from '../funcao';
const rota = Router


async function logar(dados: CadastroUser) {
 await api.post('/login', dados)
  .then(async (res) => {
    const {dados} = await res.data
    if(dados.auth == true){
      await salvarToken(dados)
      rota.push('/produtos')
      }
    })
    .catch(err => { return err })
  }

export default { logar }