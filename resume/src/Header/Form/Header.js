import React from 'react'
import styles from './Header1.module.css'
import resumeSvg from '../../assets/resume.svg'
import resume from '../../assets/resume.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
    <div className={styles.container}>
    <div className={styles.left}>
      <p className={styles.heading}>A <span>Resume</span> that stands out!</p>
      <p className={styles.heading}>Build your own <span>Resume</span></p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt={resume}/>
      </div>
    </div>
    <Link to="/Demo"  className=  "btn btn-primary btn-md header-btn" >Create Resume</Link>
    </div>
  )
}

export default Header
