import Head from "next/head"
import { GetServerSideProps } from "next/types"
import { parseCookies } from "nookies"
import TabelaProdutos from "../../Componentes/Entidades/Tabela"
import { IsAuthenticate } from "../../libs/Interfaces"

function Tabela() {
  return (
    <>
      <Head>
        <title>Tabela de Produtos</title>
        <meta name="description" content="Gerenciador de produtos" />
      </Head>
      <TabelaProdutos/>
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

export default Tabela