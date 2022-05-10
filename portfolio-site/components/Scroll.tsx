import styles from '../styles/Scroll.module.scss'
import { useState, useEffect } from 'react'

const Scroll = () => {

  // state for is fading
  const [isFade, setIsFade] = useState(false)

  const scrollNext = () => { // function to scroll to next section (react-scroll wasn't working) -- also triggers fadeout animation

    setIsFade(true) // fade out the scroll element

    window.scroll({
      top: window.innerHeight, // scrolls for height of view window -- conveniently same size as grid rows so it works very nicely -- also scrolls TO position and not BY the view window height so it works regardless of text position
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles['scroll-section']}>
      <div className={isFade ? styles['scroll-fadeOut'] : styles['scroll-fadeIn']} onClick={scrollNext}>SCROLL <br /> {/* set scroll element to fadeOut when state changes */}
      &#8595;</div>
    </div>
  )
}

export default Scroll