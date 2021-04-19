import Head from 'next/head'

// components
import Header from '@components/Header'
import Body from '@components/Body'
import Hero from '@components/Hero'
import ProgressBar from '@components/ProgressBar'
import DonateBtn from '@components/DonateBtn'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Fundraiser</title>
      </Head>
      <Header title='Fundraiser' />
      <main>
        <Hero />
        <Body />
        <ProgressBar />
        <DonateBtn />
      </main>
      <Footer />
    </div>
  )
}
