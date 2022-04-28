import React from 'react';
import './App.css';
import Header from "./components/Header";
import Section from './components/Section';
import Write from "./components/Write";
import About from "./components/About";
import {BrowserRouter,Route,Routes }from 'react-router-dom';


function App() {
   
  return (
    
    <div className="App">
     <BrowserRouter>
      {/* <Header />
      <Section /> */}
      
    <Routes>
     <Route path="/" element={<><Header /> <Section /></>}/>
      <Route path="/about" element={<About />} />
      <Route path="/write" element={<Write />} />
      
      </Routes> 
      </BrowserRouter>   {/* <Header />
    <Section /> */}
   </div>
  
  );
}

export default App;
