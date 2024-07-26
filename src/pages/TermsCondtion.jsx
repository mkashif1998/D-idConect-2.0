import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TermsFeatures from "../component/TermsFeatures";

const TermsCondtion = () => {
  return (
    <>
      <div className="term_back_image p-0 m-0">
        <Navbar />
      </div>
      <div style={{ backgroundColor: "#050206", paddingTop: "80px" }}>
        <p className="privacy_para text-center">
          These terms and conditions ("Terms") govern your use of D-iDconnect
          (the "App"). By downloading, installing, or using the App, you agree
          to be bound by these <br /> Terms. If you do not agree to these Terms,
          please do not use the App.
        </p>
        <TermsFeatures/>
      </div>
      <Footer />
    </>
  );
};

export default TermsCondtion;
