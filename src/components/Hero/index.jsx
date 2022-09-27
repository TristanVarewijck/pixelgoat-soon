import { useContext } from "react";
import "./Hero.scss";
import Subscribe from "../Subscribe";
import { DarkTheme } from "../../App";
import DisplayCard from "../DisplayCard";

function Hero() {
  const darkMode = useContext(DarkTheme);
  const data = [
    "/assets/images/nft-example-1.png",
    "/assets/images/nft-example-2.png",
    "/assets/images/nft-example-3.png",
    "/assets/images/nft-example-4.png",
  ];

  return (
    <div className={`hero ${darkMode ? "darkmode" : ""} container-xl`}>
      <div>
        <small>
          <img
            src={`/assets/bulletpoint${darkMode ? "-white" : ""}.svg`}
            alt="bulletpoint icon"
          />
          Pixelgoat Coming soon
        </small>
        <h1>
          Get notified before we launch our platform
          <img
            src={`/assets/hand${darkMode ? "-white" : ""}.svg`}
            alt="Shaking hand icon"
          />
        </h1>
        <p>
          Subscribe and receive a <span>Free NFT</span> welcome gift!
        </p>
        <Subscribe hasIcon={true} />
      </div>

      <div className="cards-group">
        <DisplayCard data={data} isReversed={true} />
        <DisplayCard data={data} isReversed={false} />
      </div>
    </div>
  );
}

export default Hero;
