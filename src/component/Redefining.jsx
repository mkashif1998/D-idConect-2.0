import React from "react";
import * as images from "../constant/images";
import { verticleLine, reverseVerticleLine } from "../constant/svgs";

const Redefining = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#050206" }}>
        <h2 className="redefining_section_h1 text-center pt-2 pt-lg-5">
          Redefining Digital Identity with Advanced Technology
        </h2>
        <p className="redefining_p text-center mt-4 ps-3 ps-lg-0 pe-3 pe-lg-0">
          identity management with blockchain and AI, providing a decentralised
          platform for secure identity establishment and management,
          <br className="d-none d-xl-block" /> free from theft risks. One-time
          sign-in and document verification ensure fraud prevention, while
          enabling global registration, <br className="d-none d-xl-block" />
          community formation, and secure group chats for businesses and
          individuals.
        </p>
        <div className="container mt-5 pt-4 pb-5">
          <div className="row">
            <div className="col-md-4 col-12 d-flex justify-content-between">
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
                  <br className="d-none d-xl-block" /> implements multi-layered
                  security protocols and cryptographic
                  <br className="d-none d-xl-block" />
                  techniques to mitigate risks and protect user information.
                </p>
              </div>
              <div className="d_mobile_lines">{verticleLine}</div>
            </div>
            <div className="col-md-4 col-12">
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
                  <br className="d-none d-xl-block" />
                  verification, offering superior accuracy and efficiency
                  compared to
                  <br className="d-none d-xl-block" /> conventional methods.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-between">
              <div className="d_mobile_lines">{verticleLine}</div>
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
                  <br className="d-none d-xl-block" />
                  registration worldwide, ensuring inclusivity & accessibility
                  across <br className="d-none d-xl-block" /> geographical
                  boundaries.
                </p>
              </div>
            </div>
          </div>
          <div className="p-0 d_mobile_lines" style={{ marginTop: "-1.7%" }}>
            <img src={images.horizontalLine} alt="logo" width="100%" />
          </div>
          <div
            className="row d-flex justify-content-center"
            style={{ marginTop: "-1%" }}
          >
            <div className="col-md-4 col-12">
              <div className="d-flex justify-content-between">
                <div className="pt-4">
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
                    identity <br className="d-none d-xl-block" />
                    framework. Say goodbye to the complexities of managing
                    multiple <br className="d-none d-xl-block" />
                    identities across various platforms.
                  </p>
                </div>
                <div className="d_mobile_lines">{reverseVerticleLine}</div>
              </div>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-start">
              <div className="pt-4">
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
                  <br className="d-none d-xl-block" />
                  enhancing security by distributing data across multiple nodes
                  rather <br className="d-none d-xl-block" /> than relying on a
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
