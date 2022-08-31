import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { AuthProvider } from '../libs/servicos/cadastroProduto';

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

  )
}

export default MyApp
