import { Link } from "react-router-dom";
import "../styles/Detail.scss";
import ExitGif from "../images/portal.gif";

function CharacterDetail({ characterDetail }) {
  return (
    <>
      <div className="character-detail-container">
        <div className="character-detail">
          <img src={characterDetail.picture} alt={characterDetail.name} />
          <h1>{characterDetail.name}</h1>
          <p>Specie: {characterDetail.specie}</p>
          <p>Status: {characterDetail.status}</p>
          <p>Origin: {characterDetail.origin}</p>
          <p>Episodes: {characterDetail.episodes}</p>
        </div>
      </div>
      <div className="exit-btn-img">
        <img className="exit" src={ExitGif} alt="" />
        <Link className="btn-link" to="/">
          Back to home
        </Link>
      </div>
    </>
  );
}

export default CharacterDetail;
