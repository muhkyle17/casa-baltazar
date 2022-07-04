import Head from 'next/head'
import Navbar from '../components/shared/Navbar'
import Carousel from '../components/shared/Carousel'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Casa Baltazar</title>
        <meta name='description' content='Casa Baltazar Website' />
      </Head>

      <Navbar />
      <About />
    </div>
  )
}
