import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <div className={styles['about-section']}>
      <div className={styles['about-box']}>
        <h1 className={styles['section-title']}>ABOUT ME</h1>
        <br />
        <p className={styles['section-p']}>&emsp;{`I'm currently looking for some full-time, front-end development work. I believe I can offer your team enthusiasm, energy, a strong work ethic, and a willingness to learn new things!`}</p>
        <br />
        <p className={styles['section-p']}>&emsp;{`I'm passionate about bringing designs to life on the web, and have exercised these interests by building skills in HTML, CSS, and various JavaScript frameworks.`}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className={styles['section-title']}>MY SKILLS</h1>
        <ul>
          <li className={styles['list-item']}>Node frameworks such as React, Express, and Next</li>
          <li className={styles['list-item']}>JavaScript, HTML5, CSS3</li>
          <li className={styles['list-item']}>SCSS, and Sass</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className={styles['section-title']}>MY LINKS</h1>
      </div>
    </div>
  )
}

export default About