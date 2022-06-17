import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span>Costs</span> &copy; <p className={styles.year}>2022</p>
      </div>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      
    </footer>
  )
}

export default Footer