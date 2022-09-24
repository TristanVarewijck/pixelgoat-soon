import { useState, useEffect } from "react";
import "./DisplayCard.scss";

function DisplayCard(props) {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState();
  const dataSize = props.data.length - 1;
  const images = props.isReversed ? [...props.data] : [...props.data].reverse();

  setTimeout(() => {
    if (count < dataSize) {
      setCount(count + 1);
    } else if (count >= dataSize) {
      setCount(0);
    }
  }, 800);

  useEffect(() => {
    setUrl(images[count]);
  }, [count]);

  return (
    <div className="display-card ">
      <div className="body body-display">
        <div className="body-header">
          <small>#00000</small>
          <p>
            PixelGoat Launch <img src="/assets/rocket.svg" alt="rocket icon" />
          </p>
        </div>
        <div className="body-img-container">
          <div className="body-img">
            <img src={url} alt=" " />
          </div>
        </div>
        <div className="body-content">
          <div className="total">
            <small>Total</small>
            <p>6000</p>
          </div>
          <div className="mint-price">
            <small>Mint</small>
            <p>FREE</p>
          </div>
        </div>
        <a
          href="https://twitter.com/pixelgoatxyz"
          target="_blank"
          rel="noreferrer"
        >
          Learn more about pixelgoat
        </a>
      </div>
    </div>
  );
}

export default DisplayCard;
