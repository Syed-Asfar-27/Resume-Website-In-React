import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {SiAcademia} from 'react-icons/si'

const headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/syed-asfar-ahmad-bukhari" target="blank"><BsLinkedin/></a>
        <a href="https://www.github.com/Syed-Asfar-27" target="blank"><BsGithub/></a>
        <a href="https://www.facebook.com/syedasfar786" target="blank"><BsFacebook/></a>
        <a href="https://ciitlahore.academia.edu/SyedAsfarAhmadBukhari" target="blank"><SiAcademia/></a>
    </div>
  )
}

export default headersocials