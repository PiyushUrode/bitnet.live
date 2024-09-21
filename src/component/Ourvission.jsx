import React from "react";


import "aos/dist/aos.css";
import "./Ourvission.css";
import Ourvisionimg from "../images/ourvision.svg"
import Ourvisionimg2 from "../images/ourmission.svg"

const Ourvission = () => {
  return (
    <>
      <div className="main" data-aos="fade-up"
     data-aos-duration="1000"
    //  data-aos-anchor-placement="center-bottom"
    //  data-aos-offset="300"
     data-aos-easing="ease-in"  >


        <div className="small">

                    <div className="ourvision-heading">
            <h1 id="Heading-h1">  OUR <img id="Heading-img" data-aos="fade-left"
   
     data-aos-duration="1000"  src={Ourvisionimg} alt="" /> VISION</h1>
             </div>

          <div className="small-p">
            <p data-aos="fade-right"
   
     data-aos-duration="2000">
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



        </div>
      </div>






      {/* our mission */}

      <div className="main">
        <div className="small">

                    <div className="ourvision-heading">
            <h1  data-text="GeeksforGeeks" id="Heading-h1">  OUR <img id="Heading-img"  data-aos="fade-left"
  
     data-aos-duration="1000" src={Ourvisionimg2} alt="" /> MISSION</h1>
             </div>

             
          <div className="small-p1">
            <p data-aos="fade-right"
     
     data-aos-duration="2000">
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



        </div>
      </div>
    </>
  );
};

export default Ourvission;
