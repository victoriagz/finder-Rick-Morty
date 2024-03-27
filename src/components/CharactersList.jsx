import "../styles/List.scss";

import Card from "./CharacterCard";
function CharactersList({ characters }) {
  return (
    <section className="container-list">
      <ul className="characters-list">
        {characters.map((character) => {
          return (
            <Card className="characters-list-item" characterData={character} />
          );
        })}
      </ul>
    </section>
  );
}

export default CharactersList;
