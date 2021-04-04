import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Body from '../components/Body'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fund Raiser</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>``
        <Header />
        <Body />
      </main>

      <Footer />
    </div>
  )
}
