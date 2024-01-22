import React from 'react'
import google from '/src/assets/images/google.svg'
import facebook from '/src/assets/images/facebook.svg'
import twiter from '/src/assets/images/twiter.svg'
import { Link } from 'react-router-dom'
export default function Rigester() {
  return (
    <div className='accountsMainSection'>
      <div className='accountsSection01'>
        <div className='formContentDiv01'>
            <h2>Register Yourself</h2>
            <p>Please enter your email and password to register your account.</p>
            <form action="" className='accountForm01'>

                <input type="text" name="" className='form-control accountsInput' placeholder='Type email / Phone Number'/>

                <input type="password" name="" className='form-control accountsInput' placeholder='Type password'/>

                <input type="password" name="" className='form-control accountsInput' placeholder='Confirm Password'/>

                <Link to="/register-verify">
                    <button className='accountButton01'>Register</button>
                </Link>
            </form>
        </div>
      </div>
      <div className='accountsSection02'>
        <div className="formContentDiv02">
            <h3>Already a Member?</h3>
            <p>Please enter your email and passwords to Login your account.</p>
            <Link to="/login">
                <button className='accountButton02'>Login</button>
            </Link>
            <h6>Or login via social media</h6>

            <div className='socialItemDiv'>
                <a href="#">
                    <img src={google} alt="" />
                </a>
                <a href="#">
                    <img src={facebook} alt="" />
                </a>
                <a href="#">
                    <img src={twiter} alt="" />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
