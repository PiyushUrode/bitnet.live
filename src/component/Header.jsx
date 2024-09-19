import React from "react";
import "./Header.css"
// import Popup from "./Popup";
import Neonleft from "../images/NeonLeftTop.svg"
import Headerimg from "../images/header.png"
import Starsvg from "../images/star.svg"
import Group24 from "../images/Group 24.svg"


const Header = () => {
  return (
    <>
{/* <Popup/> */}
      <div className="header" id="header">
        <div
          className="  header-left  "
          id="header-left"
        >
          <div className="header-h1"> 

          <h1 className="header-left-h1 ">
            {" "}
            Your Gateway to           <img
              src={Starsvg}
              alt=""
              className="header-left-img"
              /> Cutting-Edge Tech
          </h1>

              </div>
          <div className="header-left-p-div">  </div>
          <p className="header-left-p">
            Welcome to Bitnet.live, your ultimate hub for the latest
            advancements in technology. Dive into the world of
            <span className="header-left-p-span ">
              {" "}
              Metaverse, Artificial Intelligence, Blockchain, Robotics, and
              Web3.0.{" "}
            </span>
          </p>
          <img
              src={Neonleft}
              alt=""
              className="header-left-img1"
            />



        </div>
        <div className="w-1/2" id="header-right">
          <div className="header-right-div-img">
            <img
              src={Group24}
              alt=""
              className="header-right-img"
            />
          </div>
          <img src={Headerimg} alt="" id="header-right-img2" />
        </div>
      </div>

      <div className="header2"> </div>
    </>
  );
};

export default Header;
