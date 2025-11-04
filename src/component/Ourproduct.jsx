import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Slider1 from "../slider/slider1.jpg"
import Slider2 from "../slider/slider2.jpg"
import Slider3 from "../images/estate3.jpg"
import Slider4 from "../slider/slider4.jpg"
import Slider5 from "../images/game2.jpg"
// import Slider6 from "../slider/slider6.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { Link } from "react-router-dom";

import "./Ourproduct.css";
import "aos/dist/aos.css";


const Ourproduct = () => {
  return (
    <>
      <div className="Ourproduct" id="product"   data-aos="fade-up"
     data-aos-duration="1000"
      
      >
        <h1 className="ourproduct-h1"> Our Products </h1>
        {/* <div className="ourproduct-features">
          <div className="ourproduct-features1" data-aos="zoom-in"   data-aos-duration="2000">
            <h1 className="ourproduct-features1-h1">BitVR</h1>
            <p className="ourproduct-features1-p">
            Range of virtual realty products from gaming to spirituality & learning to 
            entertainment. 
            </p>
            <button className="ourproduct-features1-btn"> Explore</button>
          </div>

          <div className="ourproduct-features1" data-aos="zoom-in"   data-aos-duration="2000">
            <h1 className="ourproduct-features1-h1">BitEdutech</h1>
            <p className="ourproduct-features1-p">
             Platform for tech enthusiasts to shape their career with future technologies. 
            
            </p>
            <button className="ourproduct-features1-btn"> Explore</button>
          </div>

          <div className="ourproduct-features1" data-aos="zoom-in"   data-aos-duration="2000">
            <h1 className="ourproduct-features1-h1">BitXpro</h1>
            <p className="ourproduct-features1-p">
             Trading platform for crypto & forex beginners to professionals. 
            </p>
            <button className="ourproduct-features1-btn"> Explore</button>
          </div>
        </div> */}
<div className="pt-12 pb-12">


<Swiper
                        // spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            dynamicBullets: true,   
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5 phone:flex-row-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BitVR  </h2>
                                        <p className=" text-base tablet:text-sm " >– Experience world of regional places through VR headset from your home.</p>
                                        {/* <Link to="#" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link> */}
                                        <button className="ourproduct-features1-btn"> Explore</button>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider1} className="h-full w-[20rem] phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BitEstate</h2>
                                        <p className=" text-base tablet:text-sm " > Buy global properties with most trusted and transparent portal. </p>
                                         {/* <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link> */}
                                        <button className="ourproduct-features1-btn"> Explore</button>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider3} className="h-full w-[20rem] phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BitWin</h2>
                                        <p className=" text-base tablet:text-sm " > Access of more than 400+ free and paid gaming experience.. </p>
                                         {/* <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link> */}
                                        <button className="ourproduct-features1-btn"> Explore</button>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider5} className="h-full w-[20rem] phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>


                        {/* <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" > Bitestate</h2>
                                        <p className=" text-base tablet:text-sm " >Buy global properties with most trusted and transparent portal. </p>
                                        <a href="" className="btn2 w-fit phone:mx-auto " > Buy Now  → </a>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider2} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide> */}

<SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BitXpro</h2>
                                        <p className=" text-base tablet:text-sm " > – Trading portal for crypto assets having multi trade options and real time
                                        settlement. </p>
                                         {/* <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link> */}
                                        <button className="ourproduct-features1-btn"> Explore</button>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider4} className="h-full w-[20rem] phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id="" className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BitEdutech </h2>
                                        <p className=" text-base tablet:text-sm " > – Participate and get a chance to learn future tech courses with up to 100%
                                        scholarships.</p>
                                        {/* <Link to="https://bitwin.live/" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link> */}
                                        <button className="ourproduct-features1-btn  "> Explore</button>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider2} className="h-full w-[20rem] phone:w-[16rem] object-cover " alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BITWIN</h2>
                                        <p className=" text-base tablet:text-sm " >– Access of more than 400+ free and paid gaming experience.</p>
                                        <a href="" className="btn2 w-fit phone:mx-auto " > Buy Now  → </a>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={Slider4} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide> */}








                        
                         

                        
                    </Swiper>
</div>




        
      </div>
    </>
  );
};

export default Ourproduct;
