import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { signOut, userData } from "../actions/userData.action";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.postReducer.body.token);
  const dataUserLog = useSelector((state) => state.userReducer);
  const handleSignOut = () => {
    dispatch(signOut());
  };
  useEffect(() => {
    if (token) {
      dispatch(userData(token));
    }
  }, [dispatch, token]);

  return (
    <div>
      <Navigation text=" Sign Out" name={dataUserLog.userName} onSignOut={handleSignOut}/>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {dataUserLog.firstName} {dataUserLog.lastName} !
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" number="$2,082.79" />
        <Account title="Argent Bank Savings (x6712)" number="$10,928.42" />
        <Account title="Argent Bank Credit Card (x8349)" number="$184.30" />
      </main>
      <Footer />
    </div>
  );
};

export default User;
