import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mohit Aggarwal</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mohit.rockstar.9/" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/mohit.rockstar.9/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/MohitAg29167752" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohit Aggarwal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer