import React from 'react'
import './Description.css'
import pro1 from '../Assets/pro1.jpg'
import pro2 from '../Assets/pro2.jpg'
import pro3 from '../Assets/pro3.jpg'

//The description of the projects that shown in projects page is here

const Description = () => {
  return (
    <div className='desproj'>
        <div className='descript'>

          <div className="left">

            <h1>A Restaurent</h1>
            <h1>Web Applicattion</h1>
            <p>This is a web application for a Restaurent. This application includes the side navigation and the filtering features to filter food item according to price or preffered food type.
            </p>
            <p>
              This application uses ReactJs , HTML , CSS , Js , Tailwind CSS as programming languages .
            </p>

          </div>

          <div className="right">
                <img src={pro1} className='img' alt="" />
          </div>

        </div>


        <div className='descript'>

          <div className="left">

            <h1>An E-Commerce </h1>
            <h1>Web Applicattion</h1>
            <p>This is a E-Commerce web application designed for a Clothing company with an online ordering system. This web app consists of 3 main categories and each of the items in the list can be displayed seperately and we can view their details. Add to cart option also included in this application</p>
            <p>
              This application uses ReactJs , HTML , CSS , Js  as programming languages . This application uses local APIs to store the products and categories.
            </p>
          </div>

          <div className="right">
                <img src={pro2} className='img' alt="" />
          </div>

        </div>


        <div className='descript'>

          <div className="left">

            <h1>A Portfolio</h1>
            <h1>Web Applicattion</h1>
            <p>This is a Portfolio web app to display the details of me, qualifications, the projects i have done and my contact details. Here i have use dynamic cards for displaying the projects in the home page. For that i have used a simple local API to store the project details</p>
            <p>
              This application uses ReactJs , HTML , CSS , Js  as programming languages .
            </p>
          </div>

          <div className="right">
                <img src={pro3} className='img' alt="" />
          </div>

        </div>
    </div>
    
    
  )
}

export default Description
