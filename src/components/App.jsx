import "../styles/App.scss";
import getItemsAPI from "../services/getItemsAPI";
import { useState, useEffect } from "react";
import List from "./CharactersList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getItemsAPI().then((charactersData) => {
      setCharacters(charactersData);
      console.log(charactersData);
    });
  }, []);

  return (
    <>
      <header>
        <h1>Titulo</h1>
      </header>
      <main>
        <List characters={characters} />
      </main>
    </>
  );
}

export default App;
