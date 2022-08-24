
import { CadastroUser} from '../../../Interfaces'
import api from '../../config'
import Router from 'next/router';
const rota = Router


async function logar(dados : CadastroUser) {
  await api.post('/', dados)
  .then(res => {
    rota.push('/cadastro')})
  .catch(err => { return err })
}

async function buscar() {
  api.get('/')
  .then(res => {res.data})
}



export default {logar, buscar}