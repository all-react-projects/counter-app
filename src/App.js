
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);

  const handleIncrease=()=>{
    setCount(count+1)
  }

  const handleDecrease=()=>{
    if(count===0)
      alert('Negative number is starting')
    setCount(count-1);
  }

  const handleReset=()=>{
    setCount(0);
  }

  
  return (
    <div className="App">
      <div className="card">
        <button className='inc' onClick={handleDecrease}>-</button>
        <div className='num'>{count}</div>
        <button className='dec' onClick={handleIncrease}>+</button>
      </div>
      <button id='reset' onClick={handleReset}>Reset</button>
      
    </div>
  );
}

export default App;
