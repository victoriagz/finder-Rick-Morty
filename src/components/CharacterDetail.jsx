import { Link } from "react-router-dom";
import "../styles/Detail.scss";
import ExitGif from "../images/portal.gif";
import "animate.css";

function CharacterDetail({ characterDetail }) {
  return (
    <>
      <div className="character-detail-container animate__animated animate__zoomIn">
        <div className="character-detail">
          <img src={characterDetail.picture} alt={characterDetail.name} />
          <div className="container2">
            <div className="title-container">
              <h1>{characterDetail.name}</h1>
            </div>
            <div className="data-container ">
              <p>SPECIE: {characterDetail.specie}</p>
              <p>STATUS: {characterDetail.status}</p>
              <p>ORIGIN: {characterDetail.origin}</p>
              <p>EPISODES: {characterDetail.episodes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="exit-btn-img">
        <img className="exit" src={ExitGif} alt="" />
        <Link className="btn-link animate__animated animate__bounce" to="/">
          Back to home
        </Link>
      </div>
    </>
  );
}

export default CharacterDetail;
