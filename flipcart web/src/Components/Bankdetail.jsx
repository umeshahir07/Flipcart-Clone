import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style/Bankdetail.css';

function Bankdetail() {


  const [state,setState]=useState({
    accountno:'',
    accountname:'',
    bankifsc:'',
    typeofbankaccount:'',
   
  })

  const navigate = useNavigate();

    function handlechange(e) {
      const {name,value} = e.target
      setState((prevstate)=>({
          ...prevstate,
          [name]:value
      }))
    }

      function handlesubmit(e) {
        e.preventDefault();
        localStorage.setItem('xyz',JSON.stringify(state))
        navigate('/Thankyoupage')
        
      }

  return (
   <form onSubmit={handlesubmit} >
     <div className="bank-container">
      <div className="bank">
        <p className="bank-title">Please enter bank details</p>

        <div className="bank-group">
          <label htmlFor="account-no">Account No*</label>
          <input id="accountno" type="text" name='accountno' value={state.accountno} onChange={handlechange} />
        </div>
        <div className="bank-group">
          <label htmlFor="account-name">Account Name*</label>
          <input id="accountname" type="text" name='accountname' value={state.accountname} onChange={handlechange} />
        </div>
        <div className="bank-group">
          <label htmlFor="bank-ifsc">Bank IFSC*</label>
          <input id="bankifsc" type="text" name='bankifsc' value={state.bankifsc} onChange={handlechange} />
        </div>
        <div className="bank-group">
          <label htmlFor="account-type">Type of Account*</label>
          <input id="accounttype" type="text" name='typeofaccount' value={state.typeofaccount} onChange={handlechange} />
        </div>

        <Link to="/Thankyoupage">
          <button className="submit-btn">Submit</button>
        </Link>
      </div>
    </div>
   </form>
  );
}

export default Bankdetail;
