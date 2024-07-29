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
      <div className="mainTermBox">
        <p className="privacy_para text-center ps-3 pe-3 ps-lg-0 pe-lg-0">
          These terms and conditions ("Terms") govern your use of D-iDconnect
          (the "App"). By downloading, installing, or using the App, you agree
          to be bound by these <br className="d-none d-sm-block" /> Terms. If you do not agree to these Terms,
          please do not use the App.
        </p>
        <TermsFeatures />
        <div className="mt-5 pt-3 d-flex justify-content-center">
          <button className="termBtn">Contact Us</button>
        </div>
        <p className="privacy_para mt-5 pt-2 text-center padd_botom">
          If you have any questions about these Terms, please contact us at&nbsp;
          <span className="term_span" style={{ cursor: "pointer" }}>
            help@swaticorporation.com.
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsCondtion;
