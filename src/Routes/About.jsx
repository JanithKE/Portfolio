import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Heroimg2 from '../Components/Heroimg2/Heroimg2'
import Aboutcontent from '../Components/Aboutcontent/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT ME" text="A small description about me."/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About
