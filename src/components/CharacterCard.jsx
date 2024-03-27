import { Link } from "react-router-dom";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`}>
        <img src={characterData.picture} alt={characterData.name} />
        <h2>{characterData.name}</h2>
        <p>{characterData.specie}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
