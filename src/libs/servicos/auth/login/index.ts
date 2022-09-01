
import { CadastroUser, IsAuthenticate } from '../../../Interfaces'
import api from '../../config'
import Router from 'next/router';
import { salvarToken } from '../funcao';
const rota = Router


async function logar(dados: CadastroUser) {
 await api.post('/login', dados)
  .then(async (res) => {
    const {dados} = await res.data
    if(dados.auth == true){
      await salvarToken(dados)
      rota.push('/cadastro')
      }
    })
    .catch(err => { return err })
  }

async function buscar() {
 await api.get('/')
    .then(res => { res.data })
}



export default { logar, buscar }