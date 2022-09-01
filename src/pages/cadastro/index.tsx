import { GetServerSideProps } from 'next'
import Head from 'next/head'
import {parseCookies} from 'nookies'
import HomeCadastro from '../../Componentes/Entidades/Cadastro'


function Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>''
        <HomeCadastro />
    </>
  )
}

export const getServerSideProps  : GetServerSideProps= async (ctx) => {

  const {['user'] : token }= parseCookies(ctx)
  console.log(token)
  if (!token) {
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

export default Cadastro




