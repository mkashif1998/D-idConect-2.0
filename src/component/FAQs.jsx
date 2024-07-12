import React from "react";
import FaqAccordion from "../constant/FaqAccordion";

const FAQs = () => {
  return (
    <>
      <div style={{ backgroundColor: "#050206" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 d-flex align-items-center">
              <div>
                <h6 className="rounded-5 d-inline p-2 text-white border border-1 border-white faq_h6 ps-3 pe-3">
                  FAQ
                </h6>
                <h2 className="redefining_section_h1 pt-4">
                  Why Choose <br />
                  D-iDconnect?
                </h2>
                <p className="redefining_p mt-1 mt-lg-4">
                  Everything you need to know about product
                  <br className="d-none d-md-block" />
                  and billing.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center">
              <div>
                <FaqAccordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
