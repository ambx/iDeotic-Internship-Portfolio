import Layout from '../components/Layout/index'
import '../styles/global.scss'
import "@fontsource/montserrat"
import "@fontsource/poppins"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}