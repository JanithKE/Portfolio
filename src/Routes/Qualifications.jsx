import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Heroimg2 from '../Components/Heroimg2/Heroimg2'
import Footer from '../Components/Footer/Footer'
import Qcontent from '../Components/Qcontent/Qcontent'

//all the components of the qualifications page connected

const Qualifications = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="QUALIFICATIONS" text="Some of my acadamic achievements shown here."/>
      <Qcontent/>
      <Footer/>
    </div>
  )
}

export default Qualifications;
