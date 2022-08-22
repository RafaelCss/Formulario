import axios from 'axios';
import { CadastroUser} from '../../Interfaces'

axios.create({
  baseURL : process.env.API_URL
})

async function logar(dados : CadastroUser) {
  await axios.post('https://testeapiheroku.herokuapp.com', dados)
  .then(res => { return res.data})
  .catch(err => { return err })
}

async function buscar() {
  axios.get('https://testeapiheroku.herokuapp.com')
  .then(res => {res.data})
}



export default {logar, buscar}