import styles from '../styles/Scroll.module.scss'

const Scroll = () => {

  const scrollNext = () => { // function to scroll to next section (react-scroll wasn't working)
    window.scroll({
      top: window.innerHeight, // scrolls for height of view window -- conveniently same size as grid rows so it works very nicely -- also scrolls TO position and not BY the view window height so it works regardless of text position
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles['scroll-section']}>
      <div className={styles['scroll']} onClick={scrollNext}>SCROLL <br />
      &#8595;</div>
    </div>
  )
}

export default Scroll