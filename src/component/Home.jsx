import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Blockchain from "./Blockchain";
import Ecosystem from "./Ecosystem";
import Redefining from "./Redefining";
import FAQs from "./FAQs";
import Experience from "./Experience";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="main_back_image p-0 m-0">
        <Navbar />
        <HeroSection />
      </div>
      <Blockchain />
      <Ecosystem/>
      <Redefining/>
      <FAQs/>
      <Experience/>
      <Footer/>
    </>
  );
};

export default Home;
