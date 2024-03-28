import "../styles/Header.scss";
import Pickle from "./Pickle";

function Header() {
  return (
    <div className="header-container">
      <Pickle />
      <img
        className="header"
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Rick y Morty Logo"
      />
    </div>
  );
}

export default Header;
