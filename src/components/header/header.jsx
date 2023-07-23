import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Profile_Picture.png'
import HeaderSocials from './headersocials'

const header = () => {
  return (
    <section id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Syed Asfar Ahmad Bukhari</h1>
        <h5 className='text-light'>Frondend Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
      </section>
  )
  
}


export default header