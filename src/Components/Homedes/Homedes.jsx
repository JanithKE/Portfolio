import React from 'react'
import './Homedes.css'
import { Link } from 'react-router-dom'

//middle sections of the home page

const Homedes = () => {
  return (
    <div className='homedes'>

        <div className="des">
            <h4>
                About Me
            </h4>
            
            <p>
                Learn React JS Completely from scratch in this 2:30hrs Crash Course. This course is designed specially for new web developers,
                who just started to learn react js. In this course we will build a complete portfolio website using react js.
            </p>
            
        </div>

      <div className='description'>

            <div className="left">

                <h1>Look in to</h1>
                <h1>My Qualifications</h1>
                <p>I am a Graduate in Software engineering and I have more Qualifictions and skills . So look at my Qualifications.</p>
                <Link to='/Qualifications'><button className='btn btn-light'>See more..</button></Link>

            </div>

            <div className="right">
                <img src="https://media.istockphoto.com/id/836469840/photo/qualification-concept.jpg?b=1&s=612x612&w=0&k=20&c=gBFzWHPsCD1wsT8KZOsLQ_mwABhKvXP1olQz5CMVvl0=" className='img' alt="" />
            </div>

            </div>

    </div>
  )
}

export default Homedes
