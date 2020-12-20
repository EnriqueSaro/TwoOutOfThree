import React from 'react';
import logo from './logo.svg';

import Toggle from './Toggle';
import styles from './Toggle.module.css'

function TogglesSet({SWITCHES}:any){
    const [switches,setSwitches] = React.useState([true,true,false]);
    const [firstChecked,setfirstChecked] = React.useState(0);
    const [secondChecked,setsecondChecked] = React.useState(1);
  
    const handleSwitch = (e:any) => {    
       if(e.target.checked == true){
          let newSwitches = [...switches];
          newSwitches[parseInt(e.target.name)]= true;
          if(parseInt(e.target.name) != firstChecked || parseInt(e.target.name) != secondChecked){
            newSwitches[firstChecked]= false;
            setfirstChecked(secondChecked);
            setsecondChecked(parseInt(e.target.name));          
          }
          setSwitches(newSwitches);
       }else{
          let newSwitches = [...switches];
          //newSwitches[firstChecked]= false;
          newSwitches[parseInt(e.target.name)]= false;
          setSwitches(newSwitches);
       }        
    }
    return (
      <>
        
        <div className="App">
        <h2 className="center"> Two out of three</h2>
          {switches.map((sw, index) => {                    
            return <Toggle key={index} text={SWITCHES[index].text} color={SWITCHES[index].color} id={index} isSelected={sw} handleChange={handleSwitch}/>;
          })}      
        </div>
      </>
    );
}

export default TogglesSet;