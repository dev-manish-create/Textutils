import React, { useState } from 'react';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const changeMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#03346E"
      showAlert("Dark mode is successfully activated", "success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is successfully activated", "success")

    }
  }

  return (
    <>
       <Router>
        <Navbar title="Textutils" Mode={changeMode} modes={mode} />
        <Alert alert={alert} />
        <div className="container">
       
          <Routes>
          <Route path="/" element = {<TextForm heading="Enter your Text to Analyze..." modes={mode} showAlert={showAlert} />} />
           

            <Route exact path="/about"  element = {<About />} />
            

           
          </Routes>
          
        </div>
     


        </Router>
    </>
  );
}

export default App;
