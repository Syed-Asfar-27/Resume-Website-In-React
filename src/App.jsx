import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Education from './components/education/education'
import Skills from './components/Skills/skills'
import Volunteer from './components/volunteer/volunteer'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Ambassador from './components/ambassador/ambassador'
import Experience from './components/experience/experience'

const App = () => {
  return (
    <>
    <Nav/>
    <Header/> 
    <Education/>
    <Experience/>
    <Skills/>
    <Volunteer/>
    <Ambassador/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App