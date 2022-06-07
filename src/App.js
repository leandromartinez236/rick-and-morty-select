import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  //useState y useEffect
  const [listCharacters, setListCharacters] = useState([]);
  const [selected, setSelected] = useState("");
  const [user, setUser] = useState({});
  //useState y useEffect

  // FETCH API
  const url = "https://rickandmortyapi.com/api/character";
  const FetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const personajes = data.results;
    setListCharacters(personajes);
  };
  useEffect(() => {
    FetchApi();
  }, []);
  // FETCH API
  useEffect(() => {
    const usuario = listCharacters.find((u) => u.id === Number(selected));
    setUser(usuario);
  }, [selected]);

  return (
    <div className="container">
      <h1>Rick and Morty App</h1>

      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select a character</option>
        {listCharacters.map((personaje, index) => (
          <option key={index} value={personaje.id}>
            {personaje.name}
          </option>
        ))}
      </select>

      {user && (
        <div className="card">
          <img src={user.image} alt={user.name} />
          <div className="info">
            <h3>{user.name}</h3>
            <p>
              Species: <strong>{user.species} </strong>
            </p>
            <p>
              Status: <strong>{user.status}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
