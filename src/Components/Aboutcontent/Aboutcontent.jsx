import React from 'react'
import './Aboutcontent.css'
import { Link } from 'react-router-dom'

//the sections of the about page 

const Aboutcontent = () => {
  return (
    <div className='about'>

        <div className="left">

            <h1>Who Am I ?</h1>
            <p>A small description about me.A small description about me.A small description about me.</p>
            <Link to='/Contact'>
              <button className='btn'>Contact</button>
            </Link>

        </div>

        <div className="right">
            
            <div className="img-container">

              <div className="img-stack top">
                <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" className='img' alt="" />
              </div>
              <div className="img-stack bottom">
                <img src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600" className='img' alt="" />
              </div>

            </div>

        </div>
      
    </div>
  )
}

export default Aboutcontent
