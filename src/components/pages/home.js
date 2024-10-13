import React from "react";
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Analytics from '../../components/Analytics';
import Cards from '../../components/Cards';
import Newsletter from '../../components/Newsletter';

const Home = () => {
    return (
        <div>
            <h1>Welcome to GeeksforGeeks</h1>
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;