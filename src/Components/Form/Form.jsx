import React from 'react'
import './Form.css'
import { FaFacebook, FaGithub,FaInstagram, FaLinkedin,FaWhatsapp} from 'react-icons/fa'

const Form = () => {
  return (
    <div className='form'>

        <div className="contact">

            <div className="left">

                <h1>Phone Number</h1>
                <p>+94 76 622 5607</p>

            </div>

            <div className="left">

                <h1>Email Address</h1>
                <p>Janithke.97@gmail.com</p>

            </div>

        </div>

        <div className="socialicons">

            <hr/>

            <FaFacebook size={30} style={{color: "#333", margin: "20px 40px " }}/>
            <FaInstagram size={30} style={{color: "#333", margin: "20px 40px " }}/>
            <FaWhatsapp size={30} style={{color: "#333", margin: "20px 40px " }}/>
            <FaGithub size={30} style={{color: "#333", margin: "20px 40px " }}/>
            <FaLinkedin size={30} style={{color: "#333", margin: "20px 40px " }}/>

            <hr />

        </div>
        

        <div>

            <h1 className='leavemessage'>Leave a message here.</h1>

            <form>

                <label>Your Name :</label>
                <input type='text'></input>

                <label>Your Email :</label>
                <input type='email'></input>

                <label>Subject :</label>
                <input type='text'></input>

                <label>Message :</label>
                <textarea rows="6" placeholder='Type your message here.'/>

                <button className='btn btn-light'>SEND</button>

            </form>
        </div>
        
      
    </div>
  )
}

export default Form
