import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import Testomonial from "../components/Testomonial";
import NewsLetter from "../components/NewsLetter";
import Cars from "./Cars";
const Home = () =>{
    return (
        <>
            <Hero />
            <FeaturedSection />
            <Banner />
            <Testomonial />
            <NewsLetter />
            <Cars />
        </>
    )
}
export default Home 