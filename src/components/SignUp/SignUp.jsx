import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {

    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);

        if(password !== confirm){
            setError('Your password did not match!')
            return
        }
        else if(password.length < 6){
            setError("Password must be 6 character at least")
            return
        }
    }

  return (
    <div className="form-container">
      <h2 className="form-title">Please Sign Up!</h2>
      <form onSubmit={handleSignUp}>
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
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
