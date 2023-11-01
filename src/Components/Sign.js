import React from "react";
import "./sign.css";
import rocket from "../Assets/Rocket.png";

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign-details">
        <h1 className="sign-head">Start your Crypto Journey Today</h1>
        <p className="sign-details">
          CryptoManiac makes it easy to get started.Sign up Today to
          <strong> buy and sell 200+ cryptocurrencies</strong>
        </p>
        <button className="sign-btn">Get started with CryptoManiac</button>
      </div>
      <div className="sign-img">
        <img src={rocket} alt="/" />
      </div>
    </div>
  );
};

export default Sign;
