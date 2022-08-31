
import { CadastroUser, IsAuthenticate } from '../../../Interfaces'
import api from '../../config'
import Router from 'next/router';
import { salvarToken } from '../funcao';
const rota = Router


async function logar(dados: CadastroUser) {
  await api.post('/login', dados)
    .then(async (res) => {
      const user = await  res.data
      if(user.dados.auth == true){
        await salvarToken(dados)
      }

    })
    .catch(err => { return err })
}

async function buscar() {
  api.get('/')
    .then(res => { res.data })
}



export default { logar, buscar }