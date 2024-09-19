import React from "react";
import "./Whychoose.css";
import Why1 from "../images/pic1.svg"
import Why2 from "../images/why1.svg"
import Why3 from "../images/why2.svg"
import Why4 from "../images/why3.svg"


const Whychoose = () => {
  return (
    <>
      <div className="whychoose">

        <h1 className="whychoose-h1"> Why Choose Investment Plan</h1>
        <p className="whychoose-p">
          Help agencies to define their new business objectives and then create
          professional software.
        </p>

        <div className="whychoosefeature">
          <div className="whychoosefeature1">
                      <img src={Why1} alt="" className="whychoosefeatureicon" />
            <div className="whychoosefeature1point">
              <h1 className="whychoosefeature1pointh1"> Expert Management</h1>
              <div className="whychoosefeature1pointdiv"></div>
              <p className="whychoosefeature1pointpara">
                {" "}
                Replacing a maintains the amount of lines. When replacing a
                selection. help agencies to define their new business objectives
                and then create.{" "}
              </p>
            </div>
          </div>

            <div className="whychoosefeature1">
                      <img src={Why2} alt="" className="whychoosefeatureicon" />
            <div className="whychoosefeature1point">
              <h1 className="whychoosefeature1pointh1"> Registerd Company</h1>
              <div className="whychoosefeature1pointdiv"></div>
              <p className="whychoosefeature1pointpara">
                {" "}
                Replacing a maintains the amount of lines. When replacing a
                selection. help agencies to define their new business objectives
                and then create.{" "}
              </p>
            </div>
          </div>



            <div className="whychoosefeature1">
                      <img src={Why3} alt="" className="whychoosefeatureicon" />
            <div className="whychoosefeature1point">
              <h1 className="whychoosefeature1pointh1"> Secure Investment</h1>
              <div className="whychoosefeature1pointdiv"></div>
              <p className="whychoosefeature1pointpara">
                {" "}
                Replacing a maintains the amount of lines. When replacing a
                selection. help agencies to define their new business objectives
                and then create.{" "}
              </p>
            </div>
          </div>



            <div className="whychoosefeature1">
            <img src={Why4} alt="" className="whychoosefeatureicon" />
            <div className="whychoosefeature1point">
              <h1 className="whychoosefeature1pointh1"> Instant Withdrawal</h1>
              <div className="whychoosefeature1pointdiv"></div>
              <p className="whychoosefeature1pointpara">
                {" "}
                Replacing a maintains the amount of lines. When replacing a
                selection. help agencies to define their new business objectives
                and then create.{" "}
              </p>
            </div>
          </div>
          
        </div>




      </div>
    </>
  );
};

export default Whychoose;
