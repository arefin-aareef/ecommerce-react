import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
      <div className="form-container">
        <h2 className="form-title">Please Sign Up!</h2>
        <form>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="confirm your password"
              required
            />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up"/>
        </form>
      </div>
    </div>
    );
};

export default SignUp;