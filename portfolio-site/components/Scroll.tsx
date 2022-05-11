import styles from '../styles/Scroll.module.scss'
import { useState, useEffect } from 'react'

const Scroll = () => {

  const [scrollAmount, setScrollAmount] = useState(0) // scroll amount
  const [opacityAmount, setOpacityAmount] = useState(1)

  useEffect(() => {

    const getScroll = () => { 
      setScrollAmount(Math.floor(window.scrollY)) // floor scroll pos so it can be compared with the window height
    }

    window.addEventListener('scroll', getScroll)

    return () => window.removeEventListener('scroll', getScroll)

  }, [])

  useEffect(() => {

    setOpacityAmount( (scrollAmount < (window.innerHeight * 0.65)) ? (1 - (scrollAmount / (window.innerHeight * 0.65))) : 0 ) // fade out when scroll up

  }, [scrollAmount])

  const scrollNext = () => { // function to scroll to next section (react-scroll wasn't working) -- also triggers fadeout animation
    window.scroll({
      top: window.innerHeight, // scrolls for height of view window -- conveniently same size as grid rows so it works very nicely -- also scrolls TO position and not BY the view window height so it works regardless of text position
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles['scroll-section']}>
      <div className={styles['scroll']} style={{opacity: opacityAmount}} onClick={scrollNext}>SCROLL <br /> {/* TRUE: fadeOut, FALSE: fadeIn */}
      &#8595;</div>
    </div>
  )
}

export default Scroll