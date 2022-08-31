import Head from 'next/head'
import React, { useContext } from 'react'
import HomeCadastro from '../../Componentes/Entidades/Cadastro'
import { AuthContext } from '../../libs/servicos/cadastroProduto'
import Router from 'next/router'
import { parseCookies } from 'nookies'
const rota = Router


function Cadastro({token} : any) {
  console.log(token)
  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      {
        <HomeCadastro />
      }
    </>
  )
}

export async function getServerSideProps(ctx : any){
 const token = parseCookies()

 return { props: { token } }
}

export default Cadastro




