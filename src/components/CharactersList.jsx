import Card from "./CharacterCard";
function CharactersList({ characters }) {
  return (
    <section>
      <ul>
        {characters.map((character) => {
          return <Card characterData={character} />;
        })}
      </ul>
    </section>
  );
}

export default CharactersList;
