import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { CadastroProvider } from '../libs/servicos/ContextoCadastro';
import { AuthProvider } from '../libs/servicos/ContextoLogin';

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <AuthProvider>
      <CadastroProvider>
        <Component {...pageProps} />
      </CadastroProvider>
    </AuthProvider>

  )
}

export default MyApp
