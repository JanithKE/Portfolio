import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Heroimg2 from '../Components/Heroimg2/Heroimg2'
import Form from '../Components/Form/Form'

//all the components of the contact page connected

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT ME" text="Contact me through. Let's have a chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
