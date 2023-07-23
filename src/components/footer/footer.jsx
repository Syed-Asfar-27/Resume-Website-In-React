import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {SiAcademia} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {BsSnapchat} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {RiWhatsappLine} from 'react-icons/ri'
import Logo from '../../assets/Website_logo.png'

const footer = () => {
  return (
    
    <footer className='footer'>
      <a href="#home" className='footer_logo'><img src={Logo} alt="" /></a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/syed-asfar-ahmad-bukhari" target="blank"><BsLinkedin/></a>
        <a href="https://www.github.com/Syed-Asfar-27" target="blank"><BsGithub/></a>
        <a href="https://www.facebook.com/syedasfar786" target="blank"><BsFacebook/></a>
        <a href="https://ciitlahore.academia.edu/SyedAsfarAhmadBukhari" target="blank"><SiAcademia/></a>
        <a href="https://www.instagram.com/syed_asfar_27" target="blank"><BsInstagram/></a>
        <a href="https://www.snapchat.com/add/syedasfarahmad" target="blank"><BsSnapchat/></a>
        <a href="https://www.twitter.com/Syed_Asfar_27" target="blank"><FiTwitter/></a>
        <a href="https://wa.me/923184318539" target="blank"><RiWhatsappLine/></a>

      </div>
      <div className="footer-copyright">
        <small><b> &copy; Syed Asfar Ahmad Bukhari, All Rights Reserved.</b> </small>
      </div>
    </footer>
  )
}

export default footer