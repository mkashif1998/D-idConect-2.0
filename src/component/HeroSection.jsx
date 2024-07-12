import React from "react";
import { heroApple, heroandriod } from "../constant/svgs";

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
            <button className="hero_section_btn d-flex align-items-center gap-5">
              Download Now
              <div>
                {heroandriod} {heroApple}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
