import React from "react";
import f1 from "../Assets/24x7.png";
import "./Features.css";
const Features = () => {
  return (
    <div className="features">
      <div className="title">
        <h2 className="about-title">The Most Trusted Cryptocurrency Platform</h2>
      </div>
      <p className="about-details">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor atque
        cumque neque esse porro in quo, quidem magnam ipsum consequuntur?
        Numquam nostrum doloremque dolores accusamus labore. Excepturi officiis
        ad
      </p>

       <h1 className="features-title">Features</h1>

      <div className="container">
        <div className="feature-card">
          <div className="img">
            <img src={f1} alt="/" />
          </div>
          <h2 className="feature">Available 24x7</h2>
          <p className="feature-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus quasi vitae a quibusdam nostrum fuga amet, vel voluptas excepturi facere alias. Cupiditate soluta ab culpa repudiandae, ipsam consequatur numquam! </p>
        </div>

        <div className="feature-card">
          <div className="img">
            <img src={f1} alt="/" />
          </div>
          <h2 className="feature">Available 24x7</h2>
          <p className="feature-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus quasi vitae a quibusdam nostrum fuga amet, vel voluptas excepturi facere alias. Cupiditate soluta ab culpa repudiandae, ipsam consequatur numquam! </p>
        </div>


        <div className="feature-card">
          <div className="img">
            <img src={f1} alt="/" />
          </div>
          <h2 className="feature">Available 24x7</h2>
          <p className="feature-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus quasi vitae a quibusdam nostrum fuga amet, vel voluptas excepturi facere alias. Cupiditate soluta ab culpa repudiandae, ipsam consequatur numquam! </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
