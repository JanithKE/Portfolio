import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Heroimg2 from '../Components/Heroimg2/Heroimg2'
import Description from '../Components/Description/Description'

//all the components of the projects page connected

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Some of my most recent works."/>
      <Description/>
      <Footer/>
    </div>
  )
}

export default Projects
