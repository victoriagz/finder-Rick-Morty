import React, { useState } from "react";
import pickle from "../images/pickle.gif";
import otherUniverse from "../images/otherUniverse.png";
import themeTwo from "../images/2.jpg";
import themeThree from "../images/3.jpg";
import themeFour from "../images/4.jpg";
import themeFive from "../images/5.jpg";
import "../styles/Pickle.scss";

const Theme = () => {
  const [background, setBackground] = useState(
    "https://c0.wallpaperflare.com/preview/267/964/934/stars-sky-night.jpg"
  );

  const handleThemeChange = () => {
    if (
      background ===
      "https://c0.wallpaperflare.com/preview/267/964/934/stars-sky-night.jpg"
    ) {
      setBackground(themeTwo);
    } else if (background === themeTwo) {
      setBackground(themeThree);
    } else if (background === themeThree) {
      setBackground(themeFour);
    } else if (background === themeFour) {
      setBackground(themeFive);
    } else {
      setBackground(
        "https://c0.wallpaperflare.com/preview/267/964/934/stars-sky-night.jpg"
      );
    }
  };

  document.body.style.background = `url(${background}) no-repeat`;
  document.body.style.backgroundSize = "cover";

  return (
    <div className="themeContainer" onClick={handleThemeChange}>
      <img
        className="chat"
        src={otherUniverse}
        alt="Chat"
        title="Change theme"
      ></img>
      <img
        className="pickle"
        src={pickle}
        alt="Pickle Rick"
        title="Change theme"
      ></img>
    </div>
  );
};

export default Theme;
