import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './Option/Toggle';
import styles from './Option/Toggle.module.css'
import TogglesSet from './Option/TogglesSet';

function App() {
  const getParam = (param_name:string) => {
    const URLParams = new URLSearchParams(window.location.search);
    console.log(URLParams.values());
    return URLParams.get(param_name);
  }
  const SWITCHES = [
    {
      text: getParam("t1") || "Fast",
      color:styles.blue
    },
    {
      text: getParam("t2") || "Good",
      color:styles.green
    },
    {
      text: getParam("t3") ||"Cheap",
      color:styles.red
    }];  
  
    
  return (
    <>
      <TogglesSet SWITCHES={SWITCHES}/>
    </>
  );
}

export default App;
