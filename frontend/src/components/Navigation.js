import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            class="main-nav-logo-image"
            src="/designs/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className="contentFlex">
          <p class="main-nav-item">
            <i class="fa fa-user-circle"></i>
            Name
          </p>
          <NavLink to="/SignIn">
            <p className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
