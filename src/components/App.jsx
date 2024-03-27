import "../styles/App.scss";
import FilterByName from "./FilterByName";

import { useState, useEffect } from "react";
import getItemsAPI from "../services/getItemsAPI";
import List from "./CharactersList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getItemsAPI().then((charactersData) => {
      setCharacters(charactersData);
      console.log(charactersData);
    });
  }, []);

  const handleChangeName = (value) => {
    setFilterName(value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Titulo</h1>
      </header>
      <main>
        <FilterByName onChangeName={handleChangeName} value={filterName} />
        <List characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
