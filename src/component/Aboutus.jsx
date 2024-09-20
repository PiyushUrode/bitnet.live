


import "aos/dist/aos.css";

import "./Aboutus.css";
import Aboutusshadownleft from "../images/aboutusshadownleft.svg"
import Aboutusshadownright from "../images/aboutusshadownright.svg"
import Group10 from "../images/Group10.png"


const Aboutus = () => {
  return (
    <>
      <div className="aboutus" id="aboutus"    data-aos="fade-up"
    //  data-aos-duration="1000"
    //  data-aos-anchor-placement="center-bottom"
     
     >
        <div className="aboutusleft">

         <img src={Aboutusshadownleft} alt="" className="abtshadowleft" />
          <img src={Group10} alt="" id="aboutusimg" 
          data-aos="fade-right"
 />

        </div>
        <div className="aboutusright">
        <img src={Aboutusshadownright} alt="" className="abtshadowright" />
    
          <h1 className="aboutus-h1"  data-aos="fade-left"
    //  data-aos-offset="300"
    //  data-aos-easing="ease-in-sine"
     data-aos-duration="3000"
     > ABOUT US</h1>
          <p className="aboutus-p"
          data-aos="fade-left"

          >
            Bitnet.live is a pioneering tech hub dedicated to exploring and
            promoting emerging technologies. Our team consists of industry
            experts, innovators, and enthusiasts committed to delivering
            high-quality content, products, and services.
          </p>
          <p className="aboutus-p"
          data-aos="fade-left"
> We believe in the
            transformative power of technology and work tirelessly to bring the
            most relevant and impactful innovations to our audience.</p>

        </div>
      </div>
      {/* <div className="header23"> </div> */}
    </>
  );
};

export default Aboutus;
