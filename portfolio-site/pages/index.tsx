import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

// components
import Landing from '../components/Landing'
import Scroll from '../components/Scroll'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home: NextPage = () => {

  useEffect(() => {

    // scroll to top of page on page load
    window.scroll({
      top: 0, 
      behavior: 'smooth',
    })

  }, [])

  return (

    <div>
      <Head>
        <title>PORTFOLIO | BRETT VAN NIEKERK</title>
        <meta name="description" content="This is my portfolio website! Take some time to look around :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* bg image - props make it act like background image */}
      <Image 
        className='bg-image'
        src='/images/background.webp'
        alt='Coffee-like background image'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
      />

      <div className='container'> {/* container for content */}

        <Landing />

        {/* right side */}
        <Scroll />
        <About />
        <Projects />
        
      </div>

      {/* maybe <Footer /> */}
    </div>

  )
}

export default Home
