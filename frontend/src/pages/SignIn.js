import React from "react";
import Navigation from "../components/Navigation";
import SignInForm from "../components/SignInForm";
import Footer from "../components/Footer";

const SignIn = () => {
  return (
    <div>
      <Navigation text=" Sign In"/>
      <SignInForm />
      <Footer />
    </div>
  );
};

export default SignIn;
