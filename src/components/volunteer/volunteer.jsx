import React from 'react'
import './volunteer.css'
import {MdOutlineVolunteerActivism} from 'react-icons/md' 

const services = () => {
  return (
    <section id='services'>
    <h5 className='social_work'>What Social Work I did</h5>
    <h2>Volunteer</h2>
    <div className='container volunteer_container'>
    <div className="volunteer_experience">
      <article className="volunteer">
          <MdOutlineVolunteerActivism className='volunteer_icon'/>
          <h3 style={{color:'var(--color-primary)'}}>The Citizens Foundation</h3>
          <h4>TCF Baghbaan Program Fundraiser</h4>
          <h5 style={{color:'var(--color-primary)'}}>Sep 2021 - Dec 2021</h5>
      </article>
      <article className="volunteer">
      <MdOutlineVolunteerActivism className='volunteer_icon'/>
        <h3 style={{color:'var(--color-primary)'}}>Kaavish Foundation</h3>
          <h4>Social Worker</h4>
          <h5 style={{color:'var(--color-primary)'}}>Nov 2021 - Apr 2022</h5>
      </article>
      <article className="volunteer">
      <MdOutlineVolunteerActivism className='volunteer_icon'/>
        <h3 style={{color:'var(--color-primary)'}}>IEEE RAS</h3>
          <h4>Deputy Director Registration</h4>
          <h5 style={{color:'var(--color-primary)'}}>Sep 2022 - Present</h5>
      </article>
    </div>
    <div className="volunteer_experience">
    <article className="volunteer">
      <MdOutlineVolunteerActivism className='volunteer_icon'/>
          <h3 style={{color:'var(--color-primary)'}}>Shaukat Khanum Hospital</h3>
          <h4>Zakat Campaign Fundraiser </h4>
          <h5 style={{color:'var(--color-primary)'}}>Mar 2022 - May 2022</h5>
      </article>
      <article className="volunteer">
      <MdOutlineVolunteerActivism className='volunteer_icon'/>
        <h3 style={{color:'var(--color-primary)'}}>ACM</h3>
          <h4>Deputy Director Registrations</h4>
          <h5 style={{color:'var(--color-primary)'}}>Oct 2022 - Present</h5>
      </article>
      <article className="volunteer">
      <MdOutlineVolunteerActivism className='volunteer_icon'/>
        <h3 style={{color:'var(--color-primary)'}}>Google Developers Student Club</h3>
          <h4>Marketing Lead</h4>
          <h5 style={{color:'var(--color-primary)'}}>Oct 2022 - Present</h5>
      </article>
      
    </div>
    </div>    
    </section>
  )
}

export default services