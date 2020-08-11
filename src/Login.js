import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //   Logged In successfully
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //   Created a user and logged in, redirect to homepage
        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://sguru.org/wp-content/uploads/2018/02/amazon_logo_RGB.jpg"
          alt="Amazon Prime"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__signUpButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
