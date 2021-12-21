import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
            <Reviews />
            <About />
        </div>
    );
};

export default Home;