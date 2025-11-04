import React from "react";
import "../component/Voucher.css"
const Voucher = () => {
  return (
    <>
<div className="ourvision-heading ">
<h1 className="whychoose-h1" id="BuyVouchers"> Buy Vouchers</h1>
        <p className="whychoose-p">Benefits of BitVouchers – Buy any voucher of your choice and get discount up to 70% in
        your any tech development or our existing product purchase.
      
        </p>     </div>


      <div className="bg-light shadow rounded tab:mx-5 mb-3 p-5 py-20 ">
        <div className=" main-voucher   ">
          {/* Voucher 1 */}
          <div className="col-sm-4 px-4 pt-0 pb-5 w-full  ">
            <div className="voucher">
              <div className="voucher-body bg-orange-gradient">
                <div className="voucher-text">
                  <h5 className="text-white mb-0 font-weight-bold text-3xl">
                  BitStart Voucher
                  </h5>
                  <p
                    className="text-white mb-0"
                    style={{ lineHeight: 1 }}
                  >
                    <strong style={{ fontSize: "1.25rem" }}> ₹10000 + GST </strong>
                   
                  </p>
                </div>

                <div className="voucher-border-left"></div>
                <div className="voucher-border-right"></div>
              </div>
              <div className="voucher-footer">
                <div className="voucher-details">
                  <div className="details-icon">
                    {/* Time SVG */}
                    <svg
                      version="1.1"
                      id="time_icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path fill="none" d="M0,0h24v24H0V0z" />
                        <path
                          fill="#ffefed"
                          d="M12,2.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5"
                        />
                        <path
                          fill="#ff4933"
                          d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,3.5c-4.7,0-8.5,3.8-8.5,8.5 s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S16.7,3.5,12,3.5z"
                        />
                        <path
                          fill="#ff4933"
                          d="M12.7,5.5c0-0.4-0.3-0.8-0.7-0.8s-0.7,0.3-0.7,0.8v7.2c0,0.4,0.3,0.8,0.7,0.8h5.8c0.4,0,0.7-0.3,0.7-0.8 s-0.3-0.8-0.7-0.8h-5.1V5.5z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="details-text">
                    <div className="text-title">10% Discount  </div>
                    <div className="text-description text-primary">
                    up to 1lakh
                    </div>
                  </div>
                </div>
                <div >
                <div >
                  <button className=" custom-btn btn-1">
                    Buy Now
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 px-4 pt-0 pb-5 w-full  ">
            <div className="voucher">
              <div className="voucher-body bg-orange-gradient">
                <div className="voucher-text">
                  <h5 className="text-white mb-0 font-weight-bold text-3xl">
                  BitBoost Voucher
                  </h5>
                  <p
                    className="text-white mb-0"
                    style={{ lineHeight: 1 }}
                  >
                    <strong style={{ fontSize: "1.25rem" }}> ₹50,000 + GST </strong>
                   
                  </p>
                </div>

                <div className="voucher-border-left"></div>
                <div className="voucher-border-right"></div>
              </div>
              <div className="voucher-footer">
                <div className="voucher-details">
                  <div className="details-icon">
                    {/* Time SVG */}
                    <svg
                      version="1.1"
                      id="time_icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path fill="none" d="M0,0h24v24H0V0z" />
                        <path
                          fill="#ffefed"
                          d="M12,2.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5"
                        />
                        <path
                          fill="#ff4933"
                          d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,3.5c-4.7,0-8.5,3.8-8.5,8.5 s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S16.7,3.5,12,3.5z"
                        />
                        <path
                          fill="#ff4933"
                          d="M12.7,5.5c0-0.4-0.3-0.8-0.7-0.8s-0.7,0.3-0.7,0.8v7.2c0,0.4,0.3,0.8,0.7,0.8h5.8c0.4,0,0.7-0.3,0.7-0.8 s-0.3-0.8-0.7-0.8h-5.1V5.5z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="details-text">
                    <div className="text-title"> 30% Discount   </div>
                    <div className="text-description text-primary">
                    up to ₹3,00,000
                    </div>
                  </div>
                </div>
                <div >
                <div >
                  <button className=" custom-btn btn-1">
                    Buy Now
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-sm-4 px-4 pt-0 pb-5 w-full  ">
            <div className="voucher">
              <div className="voucher-body bg-orange-gradient">
                <div className="voucher-text">
                  <h5 className="text-white mb-0 font-weight-bold text-3xl">
                  BitPro Voucher
                  </h5>
                  <p
                    className="text-white mb-0"
                    style={{ lineHeight: 1 }}
                  >
                    <strong style={{ fontSize: "1.25rem" }}> ₹1,00,000 + GST </strong>
                   
                  </p>
                </div>

                <div className="voucher-border-left"></div>
                <div className="voucher-border-right"></div>
              </div>
              <div className="voucher-footer">
                <div className="voucher-details">
                  <div className="details-icon">
                    {/* Time SVG */}
                    <svg
                      version="1.1"
                      id="time_icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path fill="none" d="M0,0h24v24H0V0z" />
                        <path
                          fill="#ffefed"
                          d="M12,2.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5"
                        />
                        <path
                          fill="#ff4933"
                          d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,3.5c-4.7,0-8.5,3.8-8.5,8.5 s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S16.7,3.5,12,3.5z"
                        />
                        <path
                          fill="#ff4933"
                          d="M12.7,5.5c0-0.4-0.3-0.8-0.7-0.8s-0.7,0.3-0.7,0.8v7.2c0,0.4,0.3,0.8,0.7,0.8h5.8c0.4,0,0.7-0.3,0.7-0.8 s-0.3-0.8-0.7-0.8h-5.1V5.5z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="details-text">
                    <div className="text-title">50% Discount   </div>
                    <div className="text-description text-primary">
                    up to ₹5,00,000
                    </div>
                  </div>
                </div>
                <div >
                <div >
                  <button className=" custom-btn btn-1">
                    Buy Now
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-sm-4 px-4 pt-0 pb-5 w-full  ">
            <div className="voucher">
              <div className="voucher-body bg-orange-gradient">
                <div className="voucher-text">
                  <h5 className="text-white mb-0 font-weight-bold text-3xl">
                  BitElite Voucher
                  </h5>
                  <p
                    className="text-white mb-0"
                    style={{ lineHeight: 1 }}
                  >
                    <strong style={{ fontSize: "1.25rem" }}> ₹2,00,000 + GST </strong>
                   
                  </p>
                </div>

                <div className="voucher-border-left"></div>
                <div className="voucher-border-right"></div>
              </div>
              <div className="voucher-footer">
                <div className="voucher-details">
                  <div className="details-icon">
                    {/* Time SVG */}
                    <svg
                      version="1.1"
                      id="time_icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 24 24" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path fill="none" d="M0,0h24v24H0V0z" />
                        <path
                          fill="#ffefed"
                          d="M12,2.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5"
                        />
                        <path
                          fill="#ff4933"
                          d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,3.5c-4.7,0-8.5,3.8-8.5,8.5 s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S16.7,3.5,12,3.5z"
                        />
                        <path
                          fill="#ff4933"
                          d="M12.7,5.5c0-0.4-0.3-0.8-0.7-0.8s-0.7,0.3-0.7,0.8v7.2c0,0.4,0.3,0.8,0.7,0.8h5.8c0.4,0,0.7-0.3,0.7-0.8 s-0.3-0.8-0.7-0.8h-5.1V5.5z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="details-text">
                    <div className="text-title">70% Discount   </div>
                    <div className="text-description text-primary">
                    up to ₹10,00,000
                    </div>
                  </div>
                </div>
                <div >
                <div >
                  <button className=" custom-btn btn-1">
                    Buy Now
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>




          {/* Implement changes using JS logic */}
        </div>
      </div>
    </>
  );
};
 






export default Voucher;

