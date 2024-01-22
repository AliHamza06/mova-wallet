import React, { useState } from 'react';
import google from '/src/assets/images/google.svg';
import facebook from '/src/assets/images/facebook.svg';
import twiter from '/src/assets/images/twiter.svg';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
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
          <h3>Not a member yet?</h3>
          <p>Please enter your email and passwords to register your account.</p>
          <Link to="/registration">
            <button className='accountButton02'>Register</button>
          </Link>
          <h6>Or register via social media</h6>

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
  );
}
