import React from 'react'
import "./Howitwork.css"
import Howitworkimg1 from "../images/howitwork.svg"
import Howitworkimg2 from "../images/howitwork.svg"
import Howitworkimg3 from "../images/howitworkshadowright.svg"
import Howitworkimg4 from "../images/circle.svg"



const Howitwork = () => {
  return (
<>

<div className='howitwork-center' id='howitwork' >
       <h1 className='howitwork-h1'> How it work ?</h1>
       </div>
<div className='howitwork'>
   
    <div className='howitwork-left'> 
        <img src={Howitworkimg1} alt="" />
        {/* <img src={Howitworkimg2} alt="" className='howitworkshadowleft' /> */}
    </div>
    <div className='howitwork-right'>
        <div className='topic'>
        <img src={Howitworkimg3} alt="" className='howitworkshadowright' />
 
            
            <div className='topicdata'>
                <div className='topicdata-div'>

                <img src={Howitworkimg4} alt="topicimg" className='topicimg' />
                <h1 className='topicdata-h1'>Register & Log in</h1>
                </div>
                <p className='topicdata-p'> Creating an account is the first step. then you need to log in</p>
            </div>

            <div className='topicdata'>
                <div className='topicdata-div'>

                <img src= {Howitworkimg4} alt="topicimg" className='topicimg' />
                <h1 className='topicdata-h1'>Add Fund</h1>
                </div>
                <p className='topicdata-p'> Next, pick a payment method and add funds to your account</p>
            </div>


            <div className='topicdata'>
                <div className='topicdata-div'>

                <img src={Howitworkimg4} alt="topicimg" className='topicimg' />
                <h1 className='topicdata-h1'>Select Service</h1>
                </div>
                <p className='topicdata-p'> Select the services you want and get ready to receive more publicity</p>
            </div>

            <div className='topicdata1' >
                <div className='topicdata-div'>

                <img src={Howitworkimg4} alt="topicimg" className='topicimg' />
                <h1 className='topicdata-h1'>Enjoy Super Results</h1>
                </div>
                <p className='topicdata-p'> You can enjoy incredible results when your order is complete</p>
            </div>
        </div>


 
    </div>
    </div>

</>


  )
}

export default Howitwork