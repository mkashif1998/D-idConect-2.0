import React, { useRef, useEffect } from "react";
import Ecosystem1 from "../assets/videos/Ecosystem1.mp4";
import Ecosystem2 from "../assets/videos/Ecosystem2.mp4";
import Ecosystem3 from "../assets/videos/Ecosystem3.mp4";

const Ecosystem = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    const handleVideoPlay = (videoElement) => {
      if (videoElement) {
        videoElement.muted = true;
        videoElement.addEventListener("loadeddata", () => {
          videoElement.play().catch((error) => {
            console.error("Error playing the video:", error);
          });
        });

        videoElement.addEventListener("ended", () => {
          videoElement.play().catch((error) => {
            console.error("Error restarting the video:", error);
          });
        });
      }
    };

    handleVideoPlay(videoRef1.current);
    handleVideoPlay(videoRef2.current);
    handleVideoPlay(videoRef3.current);
  }, []);
  return (
    <div className="pt-4" style={{ backgroundColor: "#050206" }}>
      <h2 className="blockchain_section_h1 text-center ps-1 pe-1 ps-md-0 pe-md-0 ps-lg-0 pe-lg-0 pt-2 pt-lg-5">
        Building a secure ecosystem for you
      </h2>
      <div className="container mt-5 pt-4 pb-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-0 mt-md-3 mt-lg-0">
            <div className="box_width m-0 p-0">
              <video
                className="ecoSystemVideo rounded-top-4 p-0 m-0"
                src={Ecosystem1}
                ref={videoRef1}
                width="100%"
                muted
                playsInline
              />
              <div className="ecosystem_box rounded-bottom-4">
                <h5 className="ecosystem_h5 text-center pt-3">
                  Blockchain Integration
                </h5>
                <p className="ecosystem_p text-center">
                  Ensures data integrity and transparency through blockchain's
                  immutable ledger that facilitates decentralized identity
                  verification and management
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-5 mt-md-3 mt-lg-0">
            <div className="box_width">
              <video
                className="ecoSystemVideo rounded-top-4"
                src={Ecosystem2}
                ref={videoRef2}
                width="100%"
                muted
                playsInline
              />
              <div className="ecosystem_box rounded-bottom-4">
                <h5 className="ecosystem_h5 text-center pt-3">
                  Decentralized Verification
                </h5>
                <p className="ecosystem_p text-center">
                  Leverages blockchain technology for tamper-proof identity
                  verification ensuring data is immutable and securely stored
                  across a distributed ledger.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-5 mt-md-3 mt-lg-0">
            <div className="box_width">
              <video
                className="ecoSystemVideo rounded-top-4"
                src={Ecosystem3}
                ref={videoRef3}
                width="100%"
                muted
                playsInline
              />
              <div className="ecosystem_box rounded-bottom-4">
                <h5 className="ecosystem_h5 text-center pt-3">
                  Interoperability
                </h5>
                <p className="ecosystem_p text-center">
                  Supports integration with various systems for seamless
                  identity management that enables cross-platform identity
                  verification through Web3 protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
