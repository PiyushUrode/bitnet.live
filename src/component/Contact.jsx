import React, { useState } from 'react';
import "./Contact.css";
import "aos/dist/aos.css";
import Robot from "../images/robot.png"

const MyForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='form' >
      <div className='form-1'> 

      <label htmlFor="name" className='info'>Your Name :</label>
      <input
        type="text"
        id="name"
        className='info1'
        name="name"
        value={formData.name}
        onChange={handleChange}
        />
        </div>
      <br />
        <div className='form-1'> 
      <label htmlFor="email" className='info'>Email Id :</label>
      <input
        type="email"
        id="email"
        className='info1'
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      </div>
      <br />
      <div className='form-1'> 
      <label htmlFor="phoneno" className='info'  > Phone No :</label>
      <input
        type="text"
        id="phoneno"
        className='info1'
        name="phoneno"
        value={formData.phoneno}
        onChange={handleChange}
      />
      </div>
      <br />

       <div className='form-1' >  
      <label htmlFor="message" className='info'  >Message :</label>
      <input
        type="message"
        id="message"
        className='info1'
        name="message"
        value={formData.message}
        onChange={handleChange}
      /> </div>
      <br />

      {/* <button type="submit" className='submit' >Submit</button> */}
    </form>
  );
};

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    message: '',
  });

  // Function to handle changes in form fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission (replace with your logic)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="contact" id='contact' data-aos="fade-up" > 
        <div className='contact-left' data-aos="fade-right"     data-aos-duration="2000"  > <img src={Robot} alt="" className='contact-left-img'/>  </div>
        <div className='contact-right' data-aos="fade-left"  data-aos-duration="2000" >
          <div className='contact-right-a'>
            <h1 className='contact-right-a-h1'> GET IN TOUCH</h1>
            <div className='contact-right-div'></div>
          </div>

          <div className='contact-right-aa'>
            <MyForm 
              formData={formData} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
