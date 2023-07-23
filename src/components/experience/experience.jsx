import React from 'react'
import './experience.css'
import ecs from '../../assets/ecs.png'


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
              <img className='ecs' src={ecs} alt="" />
              </div>
              <div className='experience_content'>
              <h5>Excellence Code Solution (ECS)</h5>
              <h5>Frontend Web Developer</h5>
              <h5>Jult 2022 - October 2022</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default experience