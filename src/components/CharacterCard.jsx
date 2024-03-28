import { Link } from "react-router-dom";
import "../styles/Card.scss";

function CharacterCard({ characterData }) {
  return (
    <Link className="link-style" to={`/character/${characterData.id}`}>
      <li className="character-card">
        <div className="container-img">
          <img src={characterData.picture} alt={characterData.name} />
        </div>
        <h1>{characterData.name}</h1>
        <p>{characterData.specie}</p>
      </li>
    </Link>
  );
}

export default CharacterCard;
