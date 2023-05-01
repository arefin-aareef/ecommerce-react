import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Login.css";

const Login = () => {
  const [show, setShow] = useState(false)

  const [error, setError] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || '/';

  const handleLogIn = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError('');

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      alert('Login Successful')
      form.reset()
      navigate(from, { replace: true })
    })
    .catch(error => {
      console.log(error);
      setError(alert(error.message))
    })
  }

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Please Login</h2>
        <form onSubmit={handleLogIn}>
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
              type={show ? "text" : "password"}
              name="password"
              id="password"
              placeholder="enter your password"
              required
            />
            <p onClick={() => setShow(!show)}><small>
              {
                show ? <span>Hide Password</span> : <span>Show Password</span>
              }
              </small></p>
          </div>
          <input className="btn-submit" type="submit" value="Login"/>
        </form>
        <p><small>New to Ema-John? <Link to="/signup">Create New Account</Link> </small></p>
      </div>
    </div>
  );
};

export default Login;
