import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {BsBriefcase} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <section>
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==='#home' ? 'active':''}><AiOutlineHome/></a>
      <a href="#education" onClick={()=>setActiveNav('#education')} className={activeNav==='#education' ? 'active':''}><FaGraduationCap/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BsBriefcase/></a>
      <a href="#skill" onClick={()=>setActiveNav('#skill')} className={activeNav==='#skill' ? 'active':''}><FiSettings/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><MdPermContactCalendar/></a>
    </nav>
    </section>
  )
}

export default Nav