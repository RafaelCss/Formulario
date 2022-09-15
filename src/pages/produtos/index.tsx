import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import HomeCadastro from '../../Componentes/Entidades/Produtos'
import { IsAuthenticate } from '../../libs/Interfaces'


function Produtos({usuario} : any) {
  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      <HomeCadastro usuario={usuario} />
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
    props: {
      usuario :user.usuario
    },
  }
}

export default Produtos




