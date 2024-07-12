import React from "react";
import * as images from "../constant/images";

const Redefining = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#050206" }}>
        <h2 className="redefining_section_h1 text-center pt-2 pt-lg-5">
          Redefining Digital Identity with Advanced Technology
        </h2>
        <p className="redefining_p text-center mt-4">
          identity management with blockchain and AI, providing a decentralised
          platform for secure identity establishment and management,
          <br className="d-none d-md-block" /> free from theft risks. One-time
          sign-in and document verification ensure fraud prevention, while
          enabling global registration, <br className="d-none d-md-block" />
          community formation, and secure group chats for businesses and
          individuals.
        </p>
        <div className="container mt-5 pt-4 pb-5">
          <div className="row redefining_main_box">
            <div className="col-md-4 col-12 redefining_box">
              <div>
                <div className="text-center">
                  <img
                    className="ecoSystemImage rounded-top-4"
                    src={images.Redefining1}
                    alt="logo"
                    width={60}
                  />
                </div>
                <h5 className="redefining_h5 text-center pt-3">
                  Resilient Security Measures
                </h5>
                <p className="redefining_p1 text-center pt-2">
                  With a focus on data integrity and confidentiality,
                  D-iDconnect
                  <br className="d-none d-md-block" /> implements multi-layered
                  security protocols and cryptographic
                  <br className="d-none d-md-block" />
                  techniques to mitigate risks and protect user information.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12 redefining_box">
              <div>
                <div className="text-center">
                  <img
                    className="ecoSystemImage rounded-top-4"
                    src={images.Redefining2}
                    alt="logo"
                    width={60}
                  />
                </div>
                <h5 className="redefining_h5 text-center pt-3">
                  AI-Powered Identity Verification
                </h5>
                <p className="redefining_p1 text-center pt-2">
                  D-iDconnect integrates advanced AI algorithms for identity
                  <br className="d-none d-md-block" />
                  verification, offering superior accuracy and efficiency
                  compared to
                  <br className="d-none d-md-block" /> conventional methods.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div>
                <div className="text-center">
                  <img
                    className="ecoSystemImage rounded-top-4"
                    src={images.Redefining3}
                    alt="logo"
                    width={60}
                  />
                </div>
                <h5 className="redefining_h5 text-center pt-3">
                  Global Registration Protocol
                </h5>
                <p className="redefining_p1 text-center pt-2">
                  D-iDconnect's global registration protocol enables seamless
                  <br className="d-none d-md-block" />
                  registration worldwide, ensuring inclusivity & accessibility
                  across <br className="d-none d-md-block" /> geographical
                  boundaries.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 d-flex justify-content-end redefining_box pt-3">
              <div>
                <div className="text-center">
                  <img
                    className="ecoSystemImage rounded-top-4"
                    src={images.Redefining4}
                    alt="logo"
                    width={60}
                  />
                </div>
                <h5 className="redefining_h5 text-center pt-3">
                  Identity Verification
                </h5>
                <p className="redefining_p1 text-center pt-2">
                  Simplify your online presence with our unified digital
                  identity <br className="d-none d-md-block" />
                  framework. Say goodbye to the complexities of managing
                  multiple <br className="d-none d-md-block" />
                  identities across various platforms.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-start pt-3">
              <div>
                <div className="text-center">
                  <img
                    className="ecoSystemImage rounded-top-4"
                    src={images.Redefining5}
                    alt="logo"
                    width={60}
                  />
                </div>
                <h5 className="redefining_h5 text-center pt-3">
                  Blockchain Infrastructure
                </h5>
                <p className="redefining_p1 text-center pt-2">
                  D-IDconnect employs a decentralized blockchain architecture,
                  <br className="d-none d-md-block" />
                  enhancing security by distributing data across multiple nodes
                  rather <br className="d-none d-md-block" /> than relying on a
                  single centralized database. across
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redefining;
