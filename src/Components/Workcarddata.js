//the data related to the project which display on dynamic cards 

import pro1 from './Assets/pro1.jpg';
import pro2 from './Assets/pro2.jpg';
import pro3 from './Assets/pro3.jpg';

const ProjectCardData =[

    {
        imgsrc: pro1,
        title: "A Restaurent Web Applicattion",
        text: "This is a web application for a Restaurent. This application includes the side navigation and the filtering features to filter food item according to price or preffered food type....",
        view:"/Projects",
        source:'https://github.com/JanithKE/Restaurent-web'
    },

    {
        imgsrc: pro2,
        title: "An E-Commerce Web Applicattion",
        text: "This is a E-Commerce web application designed for a Clothing company with an online ordering system. each of the items in the list can be displayed seperately and we can view their details....",
        view:"/Projects",
        source:'https://github.com/JanithKE/E-Commerce-App'
    },

    {
        imgsrc: pro3,
        title: "A Portfolio Web Applicattio",
        text: "This is a Portfolio web app to display the details of me, qualifications, the projects i have done and my contact details. Here i have use dynamic cards for displaying the projects in the home page. For that i have ...",
        view:"/Projects",
        source:'https://github.com/JanithKE/Portfolio'
    },
];

export default ProjectCardData;