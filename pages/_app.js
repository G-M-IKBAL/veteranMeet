import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MyNavbar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <MyNavbar/>
      <Component {...pageProps} />

    </SessionProvider>
  )
}

export default MyApp
