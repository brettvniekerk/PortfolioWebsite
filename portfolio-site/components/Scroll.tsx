import styles from '../styles/Scroll.module.scss'
import { useState, useEffect } from 'react'

const Scroll = () => {

  // state for is fading
  const [isFade, setIsFade] = useState(false)

  useEffect(() => {

    const onScroll = () => {
      setIsFade(window.scrollY !== 0)
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)

  }, [])

  const scrollNext = () => { // function to scroll to next section (react-scroll wasn't working) -- also triggers fadeout animation
    window.scroll({
      top: window.innerHeight, // scrolls for height of view window -- conveniently same size as grid rows so it works very nicely -- also scrolls TO position and not BY the view window height so it works regardless of text position
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles['scroll-section']}>
      <div className={`${styles['scroll']} ${styles[`${isFade ? 'fadeOut' : 'fadeIn'}`]}`} onClick={scrollNext}>SCROLL <br /> {/* TRUE: fadeOut, FALSE: fadeIn */}
      &#8595;</div>
    </div>
  )
}

export default Scroll