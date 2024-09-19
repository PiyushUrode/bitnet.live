import React from "react";
import "./Informative.css"
import Book1 from "../images/book.svg"
import Book2 from "../images/ball.svg"


const Informative = () => {
  return (
    <>
      <div className="informative">

        <div className="informative-left">
          <h1 className="informative-left-h1">BitNews</h1>
          <p className="informative-left-p">
            {" "}
            Welcome to the Bitnet.live BitNews – your ultimate source
            for breaking news, in-depth analysis, and expert insights on
            Metaverse, AI, Blockchain, Robotics, and Web3.0. Stay informed and
            inspired with the latest updates and trends shaping the future of
            technology.
          </p>
        </div>

        
        <div className="informative-right">
          
          <div className="informative-right-a">
            <img src= {Book1} alt="" className="informative-right-a-img" />
            <div className="informative-content">
                <p className="informative-content-p">Welcome to the Bitnet.live BitNews your ultimate source for breaking news, in-depth analysis, and expert insights on Metaverse, AI, Block</p>
                <button className="informative-content-btn"> Learn More</button>
                 </div>
          </div>

          <div className="informative-right-b">

          <div className="informative-right-aa">
            <img src={Book1} alt="" className="informative-right-aa-img" />
            <div className="informative-content-b">
                <p className="informative-content-p-b">Welcome to the Bitnet.live BitNews your ultimate source for breaking news, in-depth analysis, and expert insights on Metaverse, AI, Block</p>
                <button className="informative-content-btn-b"> Learn More</button>
                 </div>
          </div>
          <img src={Book2} alt="" className="ballb" />

          </div>
        </div>



      </div>
    </>
  );
};

export default Informative;
