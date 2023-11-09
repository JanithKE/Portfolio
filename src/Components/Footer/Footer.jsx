import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-container">

            <div className="left">


                <div className="location">
                    <FaHome size={20} style={{color: "#fff", margin: "40px"}}/>
                    <div>
                        <p>252/1/A , "Singha" Vilagedara</p>
                        <p>Thuththiripitigama</p>
                    </div>
                    
                </div>

                <div className="phone"> 
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", margin: "40px"}}/> 
                        +94 76 6225607
                    </h4>
                </div>

                <div className="email"> 
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", margin: "40px"}}/> 
                        Janithke.97@gmail.com
                    </h4>
                </div>

            </div>



            <div className="right">
                <h4>About Me</h4>
                <p>
                    Learn React JS Completely from scratch in this 2:30hrs Crash Course. This course is designed specially for new web developers, 
                    who just started to learn react js. In this course we will build a complete portfolio website using react js.
                </p>

                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", margin: "20px"}}/>
                    <FaInstagram size={30} style={{color: "#fff", margin: "20px"}}/>
                    <FaWhatsapp size={30} style={{color: "#fff", margin: "20px"}}/>
                    <FaGithub size={30} style={{color: "#fff", margin: "20px"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", margin: "20px"}}/>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
