import "./DisplayCard.scss";

function DisplayCard() {
  return (
    <div class="display-card ">
      <div class="body body-display">
        <div class="body-header">
          <small>#00000</small>
          <p>
            PixelGoat Launch <img src="/assets/rocket.svg" alt="rocket icon" />
          </p>
        </div>
        <div class="body-img-container">
          <div class="body-img">
            <img src="/assets/example.png" alt="nft collection profile image" />
          </div>
        </div>
        <div class="body-content">
          <div class="total">
            <small>Total</small>
            <p>6000</p>
          </div>
          <div class="mint-price">
            <small>Mint</small>
            <p>FREE</p>
          </div>
        </div>
        <a href="#">Learn more about pixelgoat</a>
      </div>
    </div>
  );
}

export default DisplayCard;
