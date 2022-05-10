import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

// components
import Landing from '../components/Landing'
import Scroll from '../components/Scroll'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home: NextPage = () => {

  useEffect(() => { // useEffect to make the site scroll back to top on page load
    window.scroll({
      top: 0,
      behavior: 'smooth', // auto doesn't work i have not idea why
    })
  }, [])

  return (

    <div>
      <Head>
        <title>PORTFOLIO | BRETT VAN NIEKERK</title>
        <meta name="description" content="This is my portfolio website! Take some time to look around :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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
