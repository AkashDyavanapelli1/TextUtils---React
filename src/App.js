import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#07293e'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing now';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode('light')
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - Light';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
