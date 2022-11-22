import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>ANUBHAV LADHA</a>
      <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/anubhav-ladha-617b1b190/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://www.instagram.com/anubhav_2102/?hl=en" target='_blank' rel='noreferrer'><BsInstagram/></a>
        <a href="https://twitter.com/anubhav_ladha" target='_blank' rel='noreferrer'><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Anubhav Ladha. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
