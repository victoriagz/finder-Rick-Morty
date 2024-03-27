import { Link } from "react-router-dom";
import "../styles/Detail.scss";

function CharacterDetail({ characterDetail }) {
  return (
    <div className="character-detail-container">
      <div className="character-detail">
        <img src={characterDetail.picture} alt={characterDetail.name} />
        <h1>{characterDetail.name}</h1>
        <p>Specie: {characterDetail.specie}</p>
        <p>Status: {characterDetail.status}</p>
        <p>Origin: {characterDetail.origin}</p>
        <p>Episodes: {characterDetail.episodes}</p>
        <Link className="btn-link" to="/">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default CharacterDetail;
