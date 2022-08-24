import type { NextPage } from 'next'
import Head from 'next/head'
import FormLogin from '../Componentes/Entidades/Login'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      <FormLogin />
    </div>
  )
}

export default Home
