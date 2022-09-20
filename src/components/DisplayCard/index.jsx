import "./DisplayCard.scss";

function DisplayCard() {
  return (
    <div class="display-card ">
      <div class="body body-display">
        <div class="body-header">
          <small>#12345</small>
          <p>PixelGoat</p>
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
            <p>1.2 ETH</p>
          </div>
        </div>
        <a href="#">Learn more about this collection</a>
      </div>
    </div>
  );
}

export default DisplayCard;
