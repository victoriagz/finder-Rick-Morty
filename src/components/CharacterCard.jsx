function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.picture} alt={characterData.name} />
      <h2>{characterData.name}</h2>
      <p>{characterData.specie}</p>
    </li>
  );
}

export default CharacterCard;
