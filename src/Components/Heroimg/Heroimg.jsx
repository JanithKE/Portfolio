import React from 'react'
import './Hiroimg.css'
import { Link } from 'react-router-dom'
import prof from '../Assets/prof.png'

//the hero of the landing home page

const Heroimg = () => {
  return (
    <div className='hero'>

        <div className="mask">
            <img className='introimg' src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Developer" />
        </div>

        <div className="content">

            <img className='proimg' src={prof} alt="" />
            <p>HI I'M AN INTERN</p>
            <h1>REACT DEVELOPER</h1>

            <div>
                <Link to='/Projects' className='btn'>Projects</Link>
                <Link to='/Contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
