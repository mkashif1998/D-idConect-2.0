import React from "react";
import * as images from "../constant/images";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <>
      <div style={{ backgroundColor: "#050206", paddingTop: "100px" }}>
        <div className="container rounded-top-4 experience_main_box">
          <div className="row">
            <div className="col-md-7 col- 12 d-flex align-items-center">
              <div className="ps-0 ps-lg-5 pt-0 pt-lg-5 mt-5 pb-5">
                <h2 className="blockchain_section_h1">Download Now</h2>
                <p className="experience_p pt-2 pt-lg-4">
                  You can now experience the convenience of consent-driven
                  interactions, ensuring control
                  <br className="d-none d-xl-block" />
                  over your personal information, and enjoy the benefits of our
                  single sign-on feature. <br className="d-none d-xl-block" />
                  Additionally, D-iDconnect offers innovative customization,
                  allowing you to tailor your
                  <br className="d-none d-xl-block" /> digital experience to
                  suit your unique preferences. Download D-iDconnect today and
                  <br className="d-none d-xl-block" />
                  transform your online experience with enhanced security and
                  personalization.
                </p>
                <div className="d-flex gap-3 mt-4 pt-3">
                  <Link
                    className="text-decoration-none"
                    target="blank"
                    to="https://play.google.com/store/apps/details?id=corop.di.connect&hl=en"
                  >
                    <img
                      src={images.Experience2}
                      alt="logo"
                      className="app_store_border"
                      width={140}
                    />
                  </Link>
                  <img
                    src={images.Experience3}
                    alt="logo"
                    className="app_store_border"
                    width={140}
                  />
                </div>
                <div className="mt-4 mt-lg-5">
                  <img src={images.Experience5} alt="logo" width={100} />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 d-flex align-items-center">
              <div className="d-flex justify-content-end">
                <img src={images.Experience1} alt="logo" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
