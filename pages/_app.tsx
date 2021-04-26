import '../styles/globals.css'
import { AppProps } from 'next/app'

function Chuusa({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Chuusa
