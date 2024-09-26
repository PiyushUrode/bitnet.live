import React from "react";
import "./Informative.css"

import "aos/dist/aos.css";
import Book1 from "../images/book.svg"
import Book3 from "../images/bitnews12.jpg"
import Book2 from "../images/ball.svg"


const Informative = () => {
  return (
    <>
      <div className="informative" data-aos="fade-up"
     >

        <div className="informative-left" >
          <h1 className="informative-left-h1" data-aos="fade-left"
data-aos-easing="ease-in"
data-aos-duration="2000"
         >BitNews</h1>
          <p className="informative-left-p" data-aos="fade-left"
data-aos-easing="ease-in"
data-aos-duration="2000">
            {" "}
            Welcome to the Bitnet.live BitNews – your ultimate source
            for breaking news, in-depth analysis, and expert insights on
            Metaverse, AI, Blockchain, Robotics, and Web3.0. Stay informed and
            inspired with the latest updates and trends shaping the future of
            technology.
          </p>
        </div>

        
        <div className="informative-right">
          
          <div className="informative-right-a" data-aos="fade-right"
>
            <img src= {Book1} alt="" className="informative-right-a-img" />
            <div className="informative-content">
                <p className="informative-content-p"> The metaverse economy is projected to reach new heights by 2026, with leading companies adopting virtual worlds for commerce, education, and entertainment. </p>
                <button className="informative-content-btn"> Learn More</button>
                 </div>
          </div>

          <div className="informative-right-b">

          <div className="informative-right-aa">
            <img src={Book3} alt="" className="informative-right-aa-img" />
            <div className="informative-content-b">
                <p className="informative-content-p-b"> AI-powered robots are transforming healthcare, providing advanced diagnostic tools and enhancing patient care.  </p>
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
