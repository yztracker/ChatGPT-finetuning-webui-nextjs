import '@/styles/globals.css'
import { ApiKeyProvider } from '../contexts/ApiKeyContext';

export default function App({ Component, pageProps }) {
  return (
    <ApiKeyProvider>
      <Component {...pageProps} />
    </ApiKeyProvider>

  )
}
