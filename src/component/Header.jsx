
import "./Header.css"
// import Popup from "./Popup";
import Neonleft from "../images/NeonLeftTop.svg"

import Headerimg from "../images/header.png"
import Starsvg from "../images/star.svg"
import Group24 from "../images/Group 24.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation in milliseconds
      offset: 120,   // offset (in px) from the original trigger point
  delay: 0,      // delay animation start
  // duration: 400, // animation duration
  easing: 'ease-in', // default easing for AOS animations
  once: false, 
    });
  }, []);
  return (
    
    <>
{/* <Popup/> */}
      <div  className="header" id="header" >
        <div
          className="  header-left  "
          id="header-left"
        >
          <div className="header-h1"  > 

          <h1 className="header-left-h1 "  
          data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000"

          >
            {" "}
            Your Gateway to           <img
              src={Starsvg}
              alt=""
              className="header-left-img"
              /> Cutting-Edge Tech
          </h1>

              </div>
          <div className="header-left-p-div">           
          {/* <img
              src={Neonleft}
              alt=""
              className="header-left-img1"
            /> */}

            <div className="header-left-img1"></div>
          <p className="header-left-p"
data-aos="fade-right"
data-aos-easing="ease-in-sine"
data-aos-duration="2000"
// data-aos-offset="300"
          
          >
            Welcome to Bitnet.live, your ultimate hub for the latest
            advancements in technology. Dive into the world of
            <span className="header-left-p-span ">
              {" "}
              Metaverse, Artificial Intelligence, Blockchain, Robotics, and
              Web3.0.{" "}
            </span>
          </p>

          </div>



        </div>
        <div className="w-1/2" id="header-right">
          <div className="header-right-div-img">
            <img
              src={Group24}
              alt=""
              className="header-right-img"
              data-aos="fade-left"
data-aos-easing="ease-in-sine"
data-aos-duration="1000"
            />
          </div>
          <img src={Headerimg} alt="" id="header-right-img2 "   data-aos="fade-left"
data-aos-easing="ease-in-sine"
data-aos-duration="1000" />
        </div>
      </div>

      <div className="header2"> </div>
    </>
  );
};

export default Header;
