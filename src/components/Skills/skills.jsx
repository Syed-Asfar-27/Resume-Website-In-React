import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const skills = () => {
  return (
    <section id='skill'>
    <h5 className='skills'>What Skills I have</h5>
    <h2 className='myskills'>My Skills</h2>

    <div className="container skill_container">
      <div className="skill_frontend">
        <h3>Forntend Development</h3>
        <div className="skill_content">
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Media Queries</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
        </div>

      </div>
      <div className="skill_frontend">
        <h3>Data Science</h3>
        <div className="skill_content">
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Data Visualization</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Machine Learning</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Artificial Intelligence</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Data Analytics</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
        </div>

      </div>

      <div className="other_skills">
      <h3>Other Skills</h3>
        <div className="skill_content">
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>C/C++</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Java</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Canva</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Microsoft Office</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Video Editing</h4>
          <small className='text-light'>Intermediate</small>
          </div>

          </article>
      </div>
    </div>

      <div className="tools">
      <h3>Tools</h3>
        <div className="skill_content">
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>VS Code</h4>
          </div>
          
          </article>
          <article className='skill_details'>
          <BsPatchCheckFill className='skill_details-icon'/>
          <div>
          <h4>Colaboratory</h4>
          </div>
          
          </article>
      </div>
    </div>
    </div>
    </section>
  )
}

export default skills
