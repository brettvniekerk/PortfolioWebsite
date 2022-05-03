import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing'
import Scroll from '../components/Scroll'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PORTFOLIO | BRETT VAN NIEKERK</title>
        <meta name="description" content="This is my portfolio website! Take some time to look around :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* persists through out page */}
      <Landing />

      {/* scrolling right side elements */}
      <Scroll />
      <About />
      <Projects />

      {/* maybe <Footer /> */}
    </div>
  )
}

export default Home
