import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PORTFOLIO | BRETT VAN NIEKERK</title>
        <meta name="description" content="This is my portfolio website! Take some time to look around :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <About />
      <Projects />

      <Footer />

    </div>
  )
}

export default Home
