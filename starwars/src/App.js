import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {

  const effectFn = () => {
    axios
      .get('https://swapi.dev/api/people/1/')
      .then(response => {
        console.log('RESPONSE: ', response)
      })
      .catch(error => console.log('ERROR: ', error))
  }

  useEffect(effectFn, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
