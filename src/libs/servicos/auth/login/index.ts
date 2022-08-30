
import { CadastroUser} from '../../../Interfaces'
import api from '../../config'
import Router from 'next/router';
import { salvarToken } from '../funcao';
const rota = Router


async function logar(dados : CadastroUser) {
  await api.post('/login', dados)
  .then(res => {
     salvarToken(res.data)
    rota.push('/cadastro')
    return res.data
  })
  .catch(err => { return err })
}

async function buscar() {
  api.get('/')
  .then(res => {res.data})
}



export default {logar, buscar}