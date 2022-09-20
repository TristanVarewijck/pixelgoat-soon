import { useContext } from "react";
import "./Hero.scss";
import Subscribe from "../Subscribe";
import { DarkTheme } from "../../App";
import DisplayCard from "../DisplayCard";

function Hero() {
  const darkMode = useContext(DarkTheme);
  return (
    <div className={`hero ${darkMode ? "darkmode" : ""}`}>
      <div>
        <small>
          <img
            src={`/assets/bulletpoint${darkMode ? "-white" : ""}.svg`}
            alt="bulletpoint icon"
          />
          Pixelgoat Coming soon
        </small>
        <h1>
          Get Notified before we Launch our Platform
          <img src="/assets/rocket.svg" alt="rocket icon" />
        </h1>
        <p>
          Subscribe for a High valuable <span>Free NFT</span> Gift!
        </p>
        <Subscribe hasIcon={true} />
      </div>

      <div className="cards-group">
        <DisplayCard />
        <DisplayCard />
      </div>
    </div>
  );
}

export default Hero;
