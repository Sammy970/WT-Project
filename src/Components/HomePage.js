import React from 'react'

import NavBar2 from "../Components/Navbar2"
import CarouselHero from "../Components/CarousalHero";
import FeaturesSection from "../Components/Features";
import CustomerR from "../Components/CustomerR"
import HomeAboutPage from "../Components/HomeAboutPage";
import Footer from '../Components/Footer';

// import FormComp from "../Components/FormComp";
// import CardsGrid from "../Components/CardsGrid"

import '../Components/HomePage.css';


const HomePage = () => {
    
    return (
        <>
            <NavBar2 />
            <div className='Hero'>
                <CarouselHero />
            </div>
            <br />
            <br />
            <FeaturesSection />
            <br />
            <div className='home-about'>
                <HomeAboutPage />
            </div>
            <br/>
            <CustomerR />
            <Footer />
        </>
    )
}

export default HomePage