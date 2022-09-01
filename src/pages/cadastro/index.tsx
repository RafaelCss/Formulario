import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import HomeCadastro from '../../Componentes/Entidades/Cadastro'
import { AuthContext } from '../../libs/servicos/cadastroProduto'
import Router from 'next/router';
const rota = Router;

function Cadastro() {
  const context = useContext(AuthContext)
  const [auth, setAuth] = useState(context)
  useEffect(() => {
    if (!auth.token) {
      rota.push('/')
    }
  })
  return (
    <>
      <Head>
        <title>Cadastro de Produtos</title>
        <meta name="description" content="Gerenciador de produtos e fornecedores" />
      </Head>
      {
        auth &&
          auth ?
          <HomeCadastro />
          : <>Você não está logado</>
      }
    </>
  )
}



export default Cadastro




