import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCadastro from '../../Componentes/Entidades/Cadastro'
import { buscarToken, salvarToken } from '../../libs/servicos/auth/funcao'
import Router from 'next/router';
import { Autenticado, IsAuthenticate } from '../../libs/Interfaces';
import { useEffect, useState } from 'react';
const rota = Router


function Cadastro() {
  const [autenticado, setAutenticado] = useState<boolean>()
  const authSession = buscarToken().then(res => setAutenticado(res.auth))

  console.log(authSession)
  useEffect(() => {
    if (!autenticado) {
      rota.push('/')
    }
  }, [autenticado])

  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      {
        (<HomeCadastro />)
      }
    </>
  )
}

 export async function getServerSideProps(ctx: any) {
  const authSession : IsAuthenticate = await buscarToken();
  if (!authSession.auth) {
    return {
      props: {
        autenticado: false,
      },
    };
  }

  return {
    props: {
      autenticado: authSession.auth,
    },
  };
}



export default Cadastro




