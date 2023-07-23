import React from 'react'
import './ambassador.css'
import {GiAchievement} from 'react-icons/gi' 

const ambassador = () => {
  return (
    <section id='services'>
    <h5>I worked as a Brand Ambassador</h5>
    <h2>Ambassador</h2>
    <div className='container ambassador_container'>
    <div className="ambassador_experience">
      <article className="ambassador">
          <GiAchievement className='ambassador_icon'/>
          <h3 style={{color:'var(--color-primary)'}}>Punjab University Lahore</h3>
          <h4>GDSC (Ambassador)</h4>
          <h5 style={{color:'var(--color-primary)'}}>Oct 2021 - Aug 2022</h5>
      </article>
      <article className="ambassador">
      <GiAchievement className='ambassador_icon'/>
        <h3 style={{color:'var(--color-primary)'}}>NUCES FAST Lahore</h3>
          <h4>SOFTEC'22 (Ambassador)</h4>
          <h5 style={{color:'var(--color-primary)'}}>Jan 2022 - Mar 2022</h5>
      </article>
    </div>
    <div className="ambassador_experience">
    <article className="ambassador">
      <GiAchievement className='ambassador_icon'/>
          <h3 style={{color:'var(--color-primary)'}}>LUMS</h3>
          <h4>CodinGuru4.0 (Ambassador)</h4>
          <h5 style={{color:'var(--color-primary)'}}>Jan 2022 - Feb 2022</h5>
      </article>
    </div>
    </div>    
    </section>
  )
}

export default ambassador