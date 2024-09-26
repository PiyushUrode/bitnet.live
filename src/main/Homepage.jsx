import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navbar'
// import Navbar2 from '../component/Navbar2'
import Header from '../component/Header'
 import Aboutus from '../component/Aboutus'
 import Ourvission from '../component/Ourvission'
  import Howitwork from '../component/Howitwork'
  // import Investplan from "../component/Investplan"
 import Whychoose from '../component/Whychoose'
 import Ourproduct from '../component/Ourproduct'
  import Informative from '../component/Informative'
import Contact from '../component/Contact'
import Fotter from '../component/Fotter'
import Popup from '../component/Popup';









const Homepage = () => {
  return (
<>
<Popup/>
 <Navbar/> 
 {/* <Navbar2/> */}
 <Header/> 
 <Aboutus/>
 <Ourvission/> 
 <Howitwork/> 
  {/* <Investplan/>  */}
 <Whychoose/> 


 
 <Ourproduct/>
 <Informative/>
 <Contact/>
 <Fotter/>






</>
    
  )
}

export default Homepage