import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";

const Home = () => {
  return (
    <div>
      <Navigation text=" Sign In"/>
      <Banner />
      <div className="features content-features">
        <FeatureItem
          image="/designs/img/icon-chat.png"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          image="/designs/img/icon-money.png"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          image="/designs/img/icon-security.png"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
