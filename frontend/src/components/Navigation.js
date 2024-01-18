import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, userData } from "../actions/userData.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const tokenLocal = window.localStorage.getItem("tokenLocal");
  const dataUserLog = useSelector((state) => state.userReducer); // Récupération de userData au store

  const handleSignOut = () => {
    dispatch(signOut());
    window.localStorage.setItem("tokenLocal", "undefined");
  };

  useEffect(() => {
    // Au montage du composant j'enregistre les infos user
    if (tokenLocal !== "undefined") {
      dispatch(userData(tokenLocal));
    }
  }, [dispatch, tokenLocal]);

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
          {tokenLocal !== "undefined" && (
            <NavLink to="/user" className="main-nav-item">
              <p className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                <span> </span>
                {dataUserLog.userName}
              </p>
            </NavLink>
          )}
          <NavLink
            to="/SignIn"
            className="main-nav-item"
            onClick={handleSignOut}
          >
            <p>
              <i className="fa fa-user-circle"></i>
              <span> </span>
              {tokenLocal !== "undefined" ? "Sign Out" : "Sign In"}
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
