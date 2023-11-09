
import React from 'react';
import './index.css';
import {Routes , Route} from 'react-router-dom';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Qualifications from './Routes/Qualifications';


function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Qualifications' element={<Qualifications/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   
    
  );
}

export default App;
