import { Link } from "react-router-dom";
import "../styles/Card.scss";

function CharacterCard({ characterData }) {
  return (
    <li className="character-card">
      <Link className="link-style" to={`/character/${characterData.id}`}>
        <img src={characterData.picture} alt={characterData.name} />
        <h1>{characterData.name}</h1>
        <p>{characterData.specie}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
