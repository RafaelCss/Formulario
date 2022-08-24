import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCadastro from '../../Componentes/Entidades/Cadastro'
import { buscarToken, salvarToken } from '../../libs/servicos/auth/funcao'
import Router from 'next/router';
import { Autenticado } from '../../libs/Interfaces';
import { useEffect } from 'react';
const rota = Router


function Cadastro({ autenticado }: Autenticado) {

  useEffect(() =>{
    if(!autenticado){
      rota.push('/')
    }
  },[autenticado])

  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      {
        autenticado && autenticado ?
          (<HomeCadastro />) : (<></>)
      }
    </>
  )
}

export function getServerSideProps(ctx: any) {
  const authSession = buscarToken();
  if (!authSession) {
    return {
      props: {
        autenticado: false,
      },
    };
  }

  return {
    props: {
      autenticado: true,
    },
  };
}



export default Cadastro




