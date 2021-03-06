import Head from 'next/head'
import Navbar from '../components/shared/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Casa Baltazar</title>
        <meta name='description' content='Casa Baltazar Website' />
      </Head>

      <Navbar />
    </div>
  )
}
