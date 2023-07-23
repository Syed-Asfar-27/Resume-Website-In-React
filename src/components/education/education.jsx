import React from 'react'
import './education.css'
import ME from '../../assets/Profile_Picture_1.jpeg'
import ME1 from '../../assets/COMSATS.png'
import ME2 from '../../assets/PGC.png'
import ME3 from '../../assets/Hashmat.png'


const education = () => {
  return (
    <section id='education'>
      <h5 className='qualification' >What Is My Qualification</h5>
      <h2 style={{marginBottom:'7rem'}}>Education</h2>

      <div className="container education_container">
        <div className="education_me">
          <div className="education_me-image">
          <img src={ME} alt="" />
          </div>
        </div>
        <div className="education_content">
          <div className="education_cards">
            <div className='education_card'>
              <div>
              <img className='comsats' src={ME1} alt="" />
              </div>
              <div className='education_content'>
              <h5>COMSATS University Lahore</h5>
              <h5>BS Software Engineering</h5>
              <h5>2021 - 2025</h5>
              </div>
            </div>
            <div className='education_card'>
              <div>
              <img className='comsats' src={ME2} alt="" />
              </div>
              <div className='education_content'>
              <h5>Punjab Group of Colleges</h5>
              <h5>FSc Pre-Engineering</h5>
              <h5>2018 - 2020</h5>
              </div>
            </div>
            <div className='education_card'>
              <div>
              <img className='comsats' src={ME3} alt="" />
              </div>
              <div className='education_content'>
              <h5>Hashmat Memorial School</h5>
              <h5>Matriculation</h5>
              <h5>2016 - 2018</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default education