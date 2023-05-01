import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Login.css";

const Login = () => {

  const [error, setError] = useState('');
  const {signIn} = useContext(AuthContext);

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
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              required
            />
          </div>
          <input className="btn-submit" type="submit" value="Login"/>
        </form>
        <p><small>New to Ema-John? <Link to="/signup">Create New Account</Link> </small></p>
      </div>
    </div>
  );
};

export default Login;
