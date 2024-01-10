import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FeatureItem from '../components/FeatureItem';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <FeatureItem />
            <Footer />
        </div>
    );
};

export default Home;