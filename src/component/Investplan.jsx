import React from "react";
import "aos/dist/aos.css";

import "./Investplan.css"
import Invest1 from "../images/investleftglow.png"

const Investplan = () => {
  return (
    <div className="Investplan" id="Investmentplan" data-aos="fade-up"
 
     data-aos-duration="1000"
    //  data-aos-anchor-placement="center-bottom"
     >
      <div className="Investplan-div">

      <h1 className="Investplan-h1"> Subscription Page</h1>
      <p className="Investplan-p">
        {" "}
        Explore our flexible subscription packages designed to provide consistent Daily returns
      </p>
      </div>

      <div className="cardmain">  
        {/* <img src="./src/images/investrightglow.png" alt="" className="investrightglow" /> */}
        {/* <img src={Invest1} alt="" className="investleftglow" /> */}
            <div className="Cards"> 
           
            <div className="card"> 
            {/* <h1 className="carda"> Hatchling Plan</h1> */}
            <h2 className="cardb"> $10 - $.041 Daily </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul" >
              <li className="cardsli"> Profit for life time </li>
              <li className="cardsli"> Capital will call back <span className="li-span"> yes</span> </li>
              <li className="cardsli">  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>




          <div className="card"> 
            {/* <h1 className="carda"> Hatchling Plan</h1> */}
            <h2 className="cardb"> $50 - $.208 Daily </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul" >
              <li className="cardsli"> Profit for life time </li>
              <li className="cardsli"> Capital will call back <span className="li-span"> yes</span> </li>
              <li className="cardsli">  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>



          <div className="card"> 
            {/* <h1 className="carda"> Hatchling Plan</h1> */}
            <h2 className="cardb"> $100 - $.416 Daily </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul" >
              <li className="cardsli"> Profit for life time </li>
              <li className="cardsli"> Capital will call back <span className="li-span"> yes</span> </li>
              <li className="cardsli">  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>
  
          <div className="card"> 
            {/* <h1 className="carda"> Secondary Plan</h1> */}
            <h2 className="cardb"> $500 - $2.08 Daily  </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>

          <div className="card"> 
            {/* <h1 className="carda"> Starter <br />Pack</h1> */}
            <h2 className="cardb"> $1000 - $4.16 Daily  </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>


          <div className="card"> 
            {/* <h1 className="carda"> Starter <br />Pack</h1> */}
            <h2 className="cardb"> $5000 - $20.8 Daily  </h2>
            <h2 className="cardc">  720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>



          <div className="card"> 
            {/* <h1 className="carda"> Starter <br />Pack</h1> */}
            <h2 className="cardb"> $10000 - BBX41.6 Daily  </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>



          <div className="card"> 
            {/* <h1 className="carda"> Starter <br />Pack</h1> */}
            <h2 className="cardb"> $25000 – BBX104 Daily  </h2>
            <h2 className="cardc"> 720 Days </h2>
            <div className="line"></div>
            {/* <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul> */}
               <button className="cardsbutton"> InvestNow</button>

          </div>
         



      </div>

      </div>

    </div>
  );
};

export default Investplan;
