import React from 'react'
import OTPInput from "../../Components/Accounts/OTPInput";
import { Link } from 'react-router-dom';
export default function CheckEmail() {
  return (
    <div className='accountsMainSection'>
      <div className='accountsSection01'>
        <div className='formContentDiv01'>
            <h2>Login</h2>
            <p>Please enter your email and password to login your account.</p>
            <form action="" className='accountForm01'>

                <input type="text" name="" className='form-control accountsInput' placeholder='Type email / Phone Number'/>

                <input type="password" name="" className='form-control accountsInput' placeholder='Type password'/>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input accountsCheckInput" id="exampleCheck1"/>
                    <label className="form-check-label accountsLabel" htmlFor="exampleCheck1">Remember me on this site</label>
                </div>

                <a href="#">
                    <button className='accountButton01'>Login</button>
                </a>
            </form>
        </div>
      </div>
      <div className='accountsSection02'>
        <div className="formContentDiv02">
            <h3>Check Email</h3>
            <p className='forgotP'>Please check email we have send code to <br /> <span>helloworld@gmail.com</span></p>
            <div>
            <OTPInput length={4} />
          </div>
            <h6> Didn’t you receive the Code?  <a href="#">Resend</a> </h6>
            <Link to="/reset-password">
                <button className='accountButton02'>Verify</button>
            </Link>
        </div>
      </div>
    </div>
  )
}
