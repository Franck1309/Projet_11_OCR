import React, { useRef } from "react";
import { NavLink } from "react-router-dom";



const SignInForm = () => {

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <NavLink to="/User">
            <p className="sign-in-button"> Sign In</p>
          </NavLink>
        </form>
      </section>
    </main>
  );
};

export default SignInForm;
