import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector } from "react-redux";

function App() {

  let count = useSelector((store) => {
    return store.count;
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        
        <h4>Count: {count}</h4>
      </header>
    </div>
  );
}

export default App;
