import styles from '../styles/About.module.scss'
import { RefObject, useRef, useState, useEffect } from 'react'

const About = () => {

  const [scrollAmount, setScrollAmount] = useState(0) // get scroll amount as a Y position
  const [opacityAmount, setOpacityAmount] = useState(0)

  const gRef = useRef<HTMLButtonElement>(null) // github button ref
  const lRef = useRef<HTMLButtonElement>(null) // linkedin button ref

  // button function
  const onClickButton = (buttonPressed: RefObject<HTMLButtonElement>) => {
    window.open(`https://www.${buttonPressed.current?.innerText.toLowerCase()}.com/${buttonPressed.current?.innerText.toLowerCase() === 'linkedin' ? 'in/brett-van-niekerk-2a9799236' : 'brettvniekerk'}`) // scuffed way of constructing URL but i like it
  }

  useEffect(() => {

    const getScroll = () => { 
      setScrollAmount(Math.floor(window.scrollY)) // floor scroll pos so it can be compared with the window height
    }

    window.addEventListener('scroll', getScroll)

    return () => { 
      window.removeEventListener('scroll', getScroll) 
    }

  }, [])

  useEffect(() => {

    setOpacityAmount((scrollAmount / (window.innerHeight * 0.65)) > 1 ? 1 : (scrollAmount / (window.innerHeight * 0.65))) // fade in when scroll up

  }, [scrollAmount])



  return (
    <div className={styles['about-section']}>
      <div className={styles['about-box']} style={{opacity: opacityAmount}}>



        <h1 className={styles['section-title']}>ABOUT ME</h1>
        <p className={styles['section-p']}>&emsp;{`I'm currently looking for some full-time, front-end development work. I believe I can offer your team enthusiasm, energy, a strong work ethic, and a willingness to learn new things!`}</p>
        <p className={styles['section-p']}>&emsp;{`I'm passionate about bringing designs to life on the web, and have exercised these interests by building skills in HTML, CSS, and various JavaScript frameworks.`}</p>

        <br className={styles['break']} />

        <h1 className={styles['section-title']}>MY SKILLS</h1>
        <p className={styles['section-p']}>Core Skills:</p>
        <ul>
          <li className={styles['list-item']}>Node frameworks such as React, Express, and Next</li>
          <li className={styles['list-item']}>JavaScript, HTML5, CSS3</li>
          <li className={styles['list-item']}>SCSS, and Sass</li>
          <li className={styles['list-item']}>Typescript</li>
        </ul>
        <p className={styles['section-p']}>Familiar Skills:</p>
        <ul>
          <li className={styles['list-item']}>Git</li>
          <li className={styles['list-item']}>Python</li>
        </ul>

        <br className={styles['break']} />

        <h1 className={styles['section-title']}>MY LINKS</h1>
        
        <br className={styles['break']} />

        <div className={styles['social-span']}>
          <button className={styles['social-button']} onClick={ () => onClickButton(gRef) } ref={ gRef }>GITHUB</button> {/* pass ref as arg to onclick func */}
          <button className={styles['social-button']} onClick={ () => onClickButton(lRef) } ref={ lRef }>LINKEDIN</button> {/* pass ref as arg to onclick func */}
        </div>



      </div>
    </div>
  )
}

export default About