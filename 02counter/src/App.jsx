import { useState } from 'react'
import './App.css'

function App() {
  
  let[counter,setcounter]=useState(15);

  const addCounter=()=>{
    if(counter==20){
      setcounter(counter);
    }
    else{
      setcounter(counter++);
      setcounter(counter++);
      setcounter(counter++);
      setcounter(counter++);
    }
   
  }

  const subtractCounter=()=>{
    if(counter>0){
      setcounter(counter--);
    }else{
      setcounter(0);
    }
    
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Count:{counter}</h2>
    <button onClick={addCounter}>Increment</button>
    <br/>
    <button  onClick={subtractCounter}>Decrement</button>
    </>
  )
}

export default App
