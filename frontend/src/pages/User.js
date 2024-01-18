import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Account from "../components/Account";
import EditForm from "../components/EditForm";

const User = () => {
  return (
    <div>
      <Navigation />
      <EditForm />
      <Account title="Argent Bank Checking (x8349)" number="$2,082.79" />
      <Account title="Argent Bank Savings (x6712)" number="$10,928.42" />
      <Account title="Argent Bank Credit Card (x8349)" number="$184.30" />
      <Footer />
    </div>
  );
};

export default User;
