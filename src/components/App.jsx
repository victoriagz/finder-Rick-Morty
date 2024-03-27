import "../styles/App.scss";
import FilterByName from "./FilterByName";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import { useState, useEffect } from "react";
import getItemsAPI from "../services/getItemsAPI";
import List from "./CharactersList";
import Detail from "./CharacterDetail";
import Header from "./Header";

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

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath("/character/:idCharacter", pathname);
  const idCharacter = characterDetailRoute
    ? parseInt(characterDetailRoute.params.idCharacter)
    : null;
  const characterDetailData = characters.find((character) => {
    return character.id === idCharacter;
  });

  return (
    <>
      <div className="body">
        <Header />
        <main>
          <FilterByName onChangeName={handleChangeName} value={filterName} />
          <Routes>
            <Route
              path="/"
              element={<List characters={filteredCharacters} />}
            />
            <Route
              path="/character/:idCharacter"
              element={<Detail characterDetail={characterDetailData} />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;