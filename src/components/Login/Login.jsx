import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Please Login</h2>
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
          <input className="btn-submit" type="submit" value="Login"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
