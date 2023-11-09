import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Heroimg from '../Components/Heroimg/Heroimg'
import Footer from '../Components/Footer/Footer'
import Homedes from '../Components/Homedes/Homedes'
import Work from '../Components/Work'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Homedes/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
