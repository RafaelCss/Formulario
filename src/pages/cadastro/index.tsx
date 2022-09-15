import Head from 'next/head'
import CadastroUsuario from '../../Componentes/Entidades/Cadastro'

function Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Usuários</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      <CadastroUsuario/>
    </>
  )
}


export default Cadastro
