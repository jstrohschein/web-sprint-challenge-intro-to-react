import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterCards from './components/CharacterCards'
import Title from './components/title'

const App = () => {

  const [characters, setCharacters] = useState([])

  const effectFn = () => {
    axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log('RESPONSE: ', response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => console.log('ERROR: ', error))
  }

  useEffect(effectFn, [])


  return (
    <div className="App">
      <Title />
      <CharacterCards data={characters} />
    </div>
  );
}

export default App;
