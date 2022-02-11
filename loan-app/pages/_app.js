import Layout from '../components/Layout'
import { wrapper } from '../store/store'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={300}>
  <Layout>
      <Component {...pageProps} />
  </Layout>
  </SessionProvider>
  )
}

export default wrapper.withRedux(MyApp)
