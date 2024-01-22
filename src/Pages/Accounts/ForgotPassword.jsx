import React, { useState } from 'react';
import google from '/src/assets/images/google.svg';
import facebook from '/src/assets/images/facebook.svg';
import twiter from '/src/assets/images/twiter.svg';
import { Link, useNavigate } from 'react-router-dom';


export default function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    emailOrPhone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic
    let errors = {
      emailOrPhone: emailOrPhone.trim() ? '' : 'Email/Phone is required',
      password: password.trim() ? '' : 'Password is required',
    };

    // Update the state with the error messages
    setErrorMessages(errors);

    // If there are no errors, you can proceed with the login
    if (Object.values(errors).every((error) => error === '')) {
      // Add logic to handle login (e.g., make an API call)
      console.log('Login successful!');

      // Navigate to the "/inside-wallet" page
      navigate('/inside-wallet');
    }
  };
  return (
    <div className='accountsMainSection'>
        <div className='accountsSection01'>
        <div className='formContentDiv01'>
          <h2>Login</h2>
          <p>Please enter your email and password to login your account.</p>
          <form onSubmit={handleLogin} className='accountForm01'>
            <span className='inputError'>{errorMessages.emailOrPhone}</span>
            <input
              type="text"
              name="emailOrPhone"
              className='form-control accountsInput'
              placeholder='Type email / Phone Number'
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            
            <span className='inputError'>{errorMessages.password}</span>
            <input
              type="password"
              name="password"
              className='form-control accountsInput'
              placeholder='Type password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input accountsCheckInput"
                id="exampleCheck1"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label accountsLabel" htmlFor="exampleCheck1">Remember me on this site</label>
            </div>

            <button type="submit" className='accountButton01'>Login</button>
          </form>
        </div>
      </div>
      <div className='accountsSection02'>
        <div className="formContentDiv02">
            <h3>Forgot Password?</h3>
            <p className='forgotP'>Don’t worry! It happens. Please enter the email associated with your account.</p>
            <input type="email" name="" className='form-control accountsInput' placeholder='Type your email address'/>
            <Link to="/check-email">
                <button className='accountButton02'>Send Code</button>
            </Link>
        </div>
      </div>
    </div>
  )
}
