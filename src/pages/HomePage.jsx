import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Blockchain from "../component/Blockchain";
import Ecosystem from "../component/Ecosystem";
import Redefining from "../component/Redefining";
import FAQs from "../component/FAQs";
import Experience from "../component/Experience";
import Footer from "../component/Footer";

const HomePage = () => {
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

export default HomePage
