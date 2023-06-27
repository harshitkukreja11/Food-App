import React from 'react';
import "./App.css";

import Body from './components/Body';

 import { BrowserRouter as Router,Route,Routes} from "react-router-dom";


import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';



function App () {
  return (
    <div className='app'>
    
  
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Header />}>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/> 
              
            </Route>
          </Route>
        </Routes>
      </Router>
  
   
      
      <Body />
  

    </div>
  );
};

    
   
  

 export default App;
          