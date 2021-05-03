import React from 'react';
import '../../App.css'

import HeroSection from '../HeroSection'
import  Cards from '../Cards'
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer />
            <div className="scroll-down"></div>

            <a href="#CardScroll">
              <div className="scroll-down" />
            </a>
            
        </>
    );
}


export default Home;