
import { CadastroUser, IsAuthenticate } from '../../../Interfaces'
import api from '../../config'
import Router from 'next/router';
import { salvarToken,buscarToken } from '../funcao';
const rota = Router


async function logar(dados: CadastroUser) {
  await api.post('/login', dados)
    .then(async (res) => {
      const user = await res.data
      if(user.auth == true){
        await salvarToken(user.auth)
        salvarToken(user.token)
        rota.push('/cadastro')
      }

    })
    .catch(err => { return err })
}

async function buscar() {
  api.get('/')
    .then(res => { res.data })
}



export default { logar, buscar }