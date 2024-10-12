import React, { useState } from 'react';
import './BuyNowForm.css';
import { Link, useNavigate } from 'react-router-dom';

const BuyNowForm = () => {
  const [state,setState]=useState({
    name: '',
    address: '',
    pincode: '',
    mobileno: '',
    email: '',
    
  }) 
  const navigate = useNavigate()

    function handlechange(e) {
      const {name,value} = e.target
      setState((prevstate)=>({
        ...prevstate,
        [name]:value
      }))
    }

    function handlesubmit(e) {
        e.preventDefault();
        localStorage.setItem('abc',JSON.stringify(state))
        navigate('/bankdetail')

    }

    

  return (
  <form onSubmit={handlesubmit} >
      <div  className="form-container">
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Enter Name:</label>
          <input type="text" id="name" name='name' value={state.name} onChange={handlechange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name='address' value={state.address} onChange={handlechange}  />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin Code:</label>
          <input type="text" id="pincode" name='pincode' value={state.pincode} onChange={handlechange}  />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input type="text" id="mobile" name='mobileno' value={state.mobileno} onChange={handlechange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" name='email' value={state.email} onChange={handlechange}  />
        </div>

        <button className="submit-btn">Submit</button>
        
      </div>
    </div>
  </form>
  );
};

export default BuyNowForm;
