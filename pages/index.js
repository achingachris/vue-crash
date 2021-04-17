import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Fundraiser</title>
      </Head>

      <main>
        <Header title='Fundraiser' />
        <p className='description'>
          Get your Dontaions stress free and let everyone see your progess
        </p>
      </main>

      <Footer />
    </div>
  )
}
