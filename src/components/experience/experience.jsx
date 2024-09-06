import React from 'react'
import './experience.css'
import pel from '../../assets/pel.jpg'
import amal from '../../assets/amal.png'


const experience = () => {
  return (
    <section id='experience'>
      <h5 className='qualification' >What Experience I Have</h5>
      <h2 style={{marginBottom:'7rem'}}>Experience</h2>

      <div className="container experience_container">
        <div className="experience_content">
          <div className="experience_cards">
            <div className='experience_card'>
              <div>
              <img className='pel' src={pel} alt="" />
              </div>
              <div className='experience_content'>
              <h5>Pal Elektron Limited (PEL)</h5>
              <h5>IT Internship</h5>
              <h5>July 2024 - August 2024</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="experience_content">
          <div className="experience_cards">
            <div className='experience_card'>
              <div>
              <img className='amal' src={amal} alt="" />
              </div>
              <div className='experience_content'>
              <h5>Amal Academy</h5>
              <h5>Career Prep Fellowship</h5>
              <h5>March 2024 - June 2024</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default experience
