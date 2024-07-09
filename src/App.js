// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import About from './Components/About.js'
import TextArea from './Components/TextArea.js'

function App() {
  const [mode,setmode]=useState('light');
  let toggle=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    // The return thing below is JSX
    // In jsx we have to return only one tag , example below is (div with className="App")
    // if you want to many tags to be returned then consider all tags in "<> ........ </>"(JSX fragment)
    // Babel Compiles JSX down to React.createElemnt() calls
    <>
    <Router>
    <Navbar title="Jainam Bheda" mode={mode} toggle={toggle}/>
    <div className="container my-3">
      <Routes>
      <Route path="/" element={<TextArea heading="Enter the text to anaylze below" mode={mode}/>} />
      <Route path="/about" element={<About />} />
      </Routes> 
      
     </div>
    </Router>
    </>
  );
}

export default App;
