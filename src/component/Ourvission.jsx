import React from "react";
import "./Ourvission.css";
import Ourvisionimg from "../images/ourvision.svg"
import Ourvisionimg2 from "../images/ourmission.svg"

const Ourvission = () => {
  return (
    <>
      <div className="main">
        <div className="small">
          <div className="small-p">
            <p>
              {" "}
              At Bitnet.live, we envision a future where technology seamlessly
              integrates into every aspect of life, revolutionizing how we
              interact with the world. We aim to be at the forefront of this
              transformation, driving innovation and fostering a community that
              thrives on cutting-edge advancements. At Bitnet.live, we envision
              a future where technology seamlessly integrates into every aspect
              of life, revolutionizing how we interact with the world. We aim to
              be at the forefront of this transformation, driving innovation and
              fostering a community that thrives on cutting-edge advancements.
              We believe in the transformative power of technology and work
              tirelessly to bring the most relevant and impactful innovations to
              our audience. We believe in the transformative power of technology
              and work tirelessly to bring the most relevant and impactful
              innovations to our audience.
            </p>
          </div>


          <div className="ourvision-heading">
            <h1 id="Heading-h1">  OUR <img id="Heading-img"  src={Ourvisionimg} alt="" /> VISION</h1>
             </div>
        </div>
      </div>






      {/* our mission */}

      <div className="main">
        <div className="small">
          <div className="small-p1">
            <p>
              {" "}
              At Bitnet.live, we envision a future where technology seamlessly
              integrates into every aspect of life, revolutionizing how we
              interact with the world. We aim to be at the forefront of this
              transformation, driving innovation and fostering a community that
              thrives on cutting-edge advancements. At Bitnet.live, we envision
              a future where technology seamlessly integrates into every aspect
              of life, revolutionizing how we interact with the world. We aim to
              be at the forefront of this transformation, driving innovation and
              fostering a community that thrives on cutting-edge advancements.
              We believe in the transformative power of technology and work
              tirelessly to bring the most relevant and impactful innovations to
              our audience. We believe in the transformative power of technology
              and work tirelessly to bring the most relevant and impactful
              innovations to our audience.
            </p>
          </div>


          <div className="ourvision-heading">
            <h1  data-text="GeeksforGeeks" id="Heading-h1">  OUR <img id="Heading-img"  src={Ourvisionimg2} alt="" /> MISSION</h1>
             </div>
        </div>
      </div>
    </>
  );
};

export default Ourvission;
