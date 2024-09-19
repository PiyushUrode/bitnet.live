import React from "react";
import "./Ourproduct.css";

const Ourproduct = () => {
  return (
    <>
      <div className="Ourproduct" id="product">
        <h1 className="ourproduct-h1"> Our Products </h1>
        <div className="ourproduct-features">
          <div className="ourproduct-features1">
            <h1 className="ourproduct-features1-h1">BitVR</h1>
            <p className="ourproduct-features1-p">
            Range of virtual realty products from gaming to spirituality & learning to 
            entertainment. 
            </p>
            <button className="ourproduct-features1-btn"> Explore</button>
          </div>

          <div className="ourproduct-features1">
            <h1 className="ourproduct-features1-h1">BitEdutech</h1>
            <p className="ourproduct-features1-p">
             Platform for tech enthusiasts to shape their career with future technologies. 
            
            </p>
            <button className="ourproduct-features1-btn"> Explore</button>
          </div>

          <div className="ourproduct-features1">
            <h1 className="ourproduct-features1-h1">BitXpro</h1>
            <p className="ourproduct-features1-p">
             Trading platform for crypto & forex beginners to professionals. 
            </p>
            <button className="ourproduct-features1-btn"> Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourproduct;
