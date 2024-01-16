import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../actions/userData.action";

const Navigation = ({ text, name, onSignOut }) => {
  const location = useLocation();
  const isUserPage = location.pathname === "/user";
  const dispatch = useDispatch();

  const handleSignOut = () => {
    onSignOut ? onSignOut() : dispatch(signOut());
  };

  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="/designs/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className="contentFlex">
          {isUserPage && (
            <p key="username" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <span> </span>
              {name}
            </p>
          )}
          <NavLink to="/SignIn" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-user-circle"></i>
            {text}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

