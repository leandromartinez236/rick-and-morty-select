<!-- import React, { useState, useEffect } from 'react';
import './App.css';

function App () {

  //useState y useEffect
  const [listCharacters, setListCharacters] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();
  //useState y useEffect

  // FETCH API
  const url = 'https://rickandmortyapi.com/api/character'
  const FetchApi = async ()=>{
    const response =  await fetch(url)
    const data = await response.json();
    const personajes = data.results
    setListCharacters(personajes)
  }
  useEffect(()=>{
    FetchApi();
  },[])
  // FETCH API

  //SUBMIT
  const submitHandler =(e)=>{
    e.preventDefault();
    const characterId= e.target.value
    // console.log(characterId);
    const selectedCharacter = listCharacters.filter((character)=> character.id == characterId)[0]
    setSelectedCharacter(selectedCharacter)
  }
  //SUBMIT

  return(
    <div className='container'>
      <h1>Rick and Morty App</h1>

      <select  onChange={(e)=> submitHandler(e)} name="select" id="select">
        <option value="">-- Select a Character --</option>
        {listCharacters && listCharacters.map(
        (personaje)=> <option key={personaje.id} value={personaje.id}>{personaje.name}</option>
        )}
      </select>

      {selectedCharacter &&
        <div className="card">
          <img src={selectedCharacter.image} alt="Image" />
          <div className='info'>
            <h3>{selectedCharacter.name}</h3>
            <p>Species: <strong>{selectedCharacter.species} </strong></p>
            <p>Status: <strong>{selectedCharacter.status}</strong></p>
          </div>
        </div>
      }
    </div>

  )
}

export default App;  -->
