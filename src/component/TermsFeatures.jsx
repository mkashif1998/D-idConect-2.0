import React from "react";
import { TermFeaturesData } from "../constant/TermFeaturesData";

const TermsFeatures = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row g-3">
        {TermFeaturesData.map((term, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div className="termFeatureBox">
              <div className="p-3">
                <img src={term.image} alt={term.title} width="100%" />
                <h5 className="termFeature_h5 pt-3">{term.title}</h5>
                <p className="termFeature_para pt-2">{term.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsFeatures;
