import "../styles/Header.scss";
import Pickle from "./Pickle";
import "animate.css";

function Header() {
  return (
    <div className="header-container">
      <Pickle />
      <img
        className="header animate__animated animate__fadeInRightBig"
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Rick y Morty Logo"
      />
    </div>
  );
}

export default Header;
