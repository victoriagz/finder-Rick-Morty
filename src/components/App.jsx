import "../styles/App.scss";
import getItemsAPI from "../services/getItemsAPI";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getItemsAPI().then((itemsData) => {
      setCharacters(itemsData);
      console.log(itemsData);
    });
  }, []);

  return <h1>hola</h1>;
}

export default App;
