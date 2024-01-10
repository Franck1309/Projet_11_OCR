import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img
            class="main-nav-logo-image"
            src="/designs/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <NavLink to="/SignIn">
            <p class="main-nav-item">
              <i class="fa fa-user-circle"></i>
              Sign In
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
