import React from 'react'
import './Homedes.css'

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

                <h1>Who Am I ?</h1>
                <p>A small description about me.A small description about me.A small description about me.</p>

            </div>

            <div className="right">
                <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" className='img' alt="" />
            </div>

            </div>

    </div>
  )
}

export default Homedes
