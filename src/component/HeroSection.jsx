import React from "react";
import { heroApple, heroandriod } from "../constant/svgs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div>
          <h2 className="hero_section_h1 text-center mt-4 mt-lg-5 pt-2 pt-lg-5">
            Empowering Your Digital Identity with Web3
            <br className="d-none d-md-block" /> and Blockchain
          </h2>
          <div className="d-flex justify-content-center hero_section_btn_margin">
           <Link target="_blank" className="text-decoration-none" to="https://play.google.com/store/apps/details?id=corop.di.connect&hl=en">
            <button className="hero_section_btn d-flex align-items-center gap-5">
              Download Now
              <div>
                {heroandriod} {heroApple}
              </div>
            </button>
           </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
