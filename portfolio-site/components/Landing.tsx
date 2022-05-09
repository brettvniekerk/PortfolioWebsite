import styles from '../styles/Landing.module.scss'
import { useState, useEffect } from 'react'

const Landing = () => {

  // state and effect
  const [underscoreOn, setUnderscoreOn] = useState(true) // state for if underscore showing

  useEffect(() => { // runs on each render -- triggered by the timeout lmao
    const timer = setTimeout(() => { // creates a timer that runs after 500 milliseconds
      setUnderscoreOn(!underscoreOn) // inverts state
    }, 500)

    return () => clearTimeout(timer) // clears timer if component unmounted
  })

  return (
    <div className={styles['landing-page']}>
      <h1 className={styles['title']}>Hi{ underscoreOn && <span className={styles['underscore']}> |</span> }</h1> {/* shows blinking | (used to be underscore but cbs to change state name) -- if emoji use  &#128075; */}
      <h2 className={styles['subtitle']}>{`My name's Brett, and I wanna be your next front end developer!`}</h2> {/* use string literal to prevent build errors */}
    </div>
  )
}

export default Landing