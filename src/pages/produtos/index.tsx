import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import HomeCadastro from '../../Componentes/Entidades/Produtos'
import { IsAuthenticate } from '../../libs/Interfaces'


function Produtos() {
  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      <HomeCadastro />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['user']: token } = parseCookies(ctx)
  const user: IsAuthenticate = token && token ? JSON.parse(token) :  false

  if (!user.auth) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default Produtos




