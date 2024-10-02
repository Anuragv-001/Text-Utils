import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

// let name = "Anurag";
function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enable or not  
  const [alert, setalert] = useState(null); 

  const showAlert = (message, type) => { 
    setalert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setalert(null);
    },1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const handletoggle = (cls) => {
    removeBodyClasses();
    document.bosdy.classList.add('bg-'+ cls);
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled", "success");
    }
  }
  return (
    // this is the jsx(html(97%) + javascript(3%)) code 
    // used for returning multiple tags. and this is called jsx fragment
    // <> 
    // {/* <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Carrer</li>
    // </nav>
    //   <h1>helllo {name} </h1>
    // <div className="container">
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex fugiat, laboriosam ab sint incidunt debitis adipisci ipsam eaque laudantium corporis, ea aspernatur? Sunt deserunt nulla, ratione illo magni praesentium enim unde numquam expedita.
    // </div> */}
    // </>

    <>

    <Router>
    {/* Navbar component */}
    <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} togglebtn = {handletoggle}/> {/* for custom proptypes */}
    {/* <Navbar/> for dafault proptypes */}

    <Alert alert = {alert}/>

    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode = {mode}/>} />
          <Route exact path="/" element = {<TextForm heading = "Enter the text to analyse below" mode = {mode} showAlert= {showAlert}/>}/>
    </Routes>s
    </div>
    </Router>

    {/* textform component */}
    {/* <div className="container my-3">
    <TextForm heading = "Enter the text to analyse below" mode = {mode} showAlert= {showAlert}/>
    </div> */}

    {/* <div className = "mb-3">
      <About/>
    </div> */}
    </>
  );
}

export default App;
