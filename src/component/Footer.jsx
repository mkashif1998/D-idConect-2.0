import React from "react";
import * as images from "../constant/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <>
      <div style={{ backgroundColor: "#050206" }}>
        <div className="container footer_main_box pt-3 pb-4">
          <div className="row pt-5 pb-5">
            <div className="col-lg-5 col-md-4 col-12">
              <div className="ps-0 ps-lg-5 pb-5">
                <Link
                  to="/"
                  className="text-decoration-none"
                  onClick={scrollToTop()}
                >
                  <img src={images.Logo} alt="logo" width={130} />
                </Link>
                <p className="footer_p pt-4">
                  identity management with blockchain and AI, providing
                  <br className="d-none d-lg-block" /> a decentralised platform
                  for secure identity
                </p>
              </div>
            </div>
            <div className="col-md-2 col-12">
              <div>
                <h5 className="footer_h6">Pages</h5>
                <Link to="/" className="text-decoration-none">
                  <p className="footer_p1 m-0 pt-2">Home</p>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <p className="footer_p1 m-0 pt-2">Features</p>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <p className="footer_p1 m-0 pt-2">Blog</p>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <p className="footer_p1 m-0 pt-2">Contact</p>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <p className="footer_p1 m-0 pt-2">About</p>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <h5 className="footer_h6 mt-5 mt-md-0 mt-lg-0">Download Now</h5>
              <Link
                className="text-decoration-none"
                to="https://play.google.com/store/apps/details?id=corop.di.connect&hl=en"
                target="blank"
              >
                <img
                  src={images.Experience2}
                  alt="logo"
                  width={140}
                  className="mt-3 app_store_border"
                />
              </Link>
              <br />
              <img
                src={images.Experience3}
                alt="logo"
                width={140}
                className="mt-4 mt-lg-2 app_store_border"
              />
            </div>
            <div className="col-lg-2 col-md-3 col-12 mt-4 mt-md-0 mt-lg-0">
              <div className="d-flex d-md-block gap-3">
                <div>
                  <Link
                    to="https://www.linkedin.com/company/d-idconnect/"
                    className="text-decoration-none"
                    target="blank"
                  >
                    <img
                      src={images.FooterLInkedin}
                      alt="logo"
                      width={100}
                      className="mt-2"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61562360073587&mibextid=LQQJ4d"
                    className="text-decoration-none"
                    target="blank"
                  >
                    <img
                      src={images.FooterFacebook}
                      alt="logo"
                      width={115}
                      className="mt-2"
                    />
                  </Link>
                </div>
              </div>
              <div className="d-flex d-md-block gap-3">
                <div>
                  <Link
                    to="https://www.instagram.com/d.idconnect?igsh=enhkN2hmYjQzZDcw"
                    className="text-decoration-none"
                    target="blank"
                  >
                    <img
                      src={images.FooterInstagram}
                      alt="logo"
                      width={110}
                      className="mt-2"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://www.youtube.com/@D-iDconnect"
                    className="text-decoration-none"
                    target="blank"
                  >
                    <img
                      src={images.FooterYoutube}
                      alt="logo"
                      width={100}
                      className="mt-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={images.horizontalLine} alt="logo" width="100%" />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <p className="footer_p2 ms-0 ms-lg-4 ps-0 ps-lg-3 m-0 pt-2">
                ©2024 D-iD Connect. All rights reserved .
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex justify-content-end">
                <Link
                  className="text-decoration-none"
                  to="/privacypolicy"
                  onClick={scrollToTop()}
                >
                  <p className="footer_p2 ms-4 ps-3 m-0 pt-2">
                    Privacy & Policy
                  </p>
                </Link>
                <Link
                  className="text-decoration-none"
                  to="/termscondition"
                  onClick={scrollToTop()}
                >
                  <p className="footer_p2 ps-3 m-0 pt-2">Terms & Condition</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
