import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCadastro from '../src/Componentes/Entidades/Cadastro/indext'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>

      <HomeCadastro />
    </div>
  )
}

export default Home
