import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Account from "../components/Account";
import { useSelector } from "react-redux";

const User = () => {
  const dataUserLog = useSelector((state) => state.userReducer); // Récupération de userData au store
  return (
    <div>
      <Navigation />
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
