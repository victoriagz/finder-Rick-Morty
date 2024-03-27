import { Link } from "react-router-dom";

function CharacterDetail({ characterDetail }) {
  return (
    <div>
      <img src={characterDetail.picture} alt={characterDetail.name} />
      <h2>{characterDetail.name}</h2>
      <p>{characterDetail.specie}</p>
      <p>{characterDetail.status}</p>
      <p>{characterDetail.origin}</p>
      <p>{characterDetail.episodes}</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}

export default CharacterDetail;
