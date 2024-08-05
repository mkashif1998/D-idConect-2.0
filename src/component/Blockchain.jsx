import React, { useRef, useEffect } from "react";
import Ecosystem1 from "../assets/videos/Blockchain.mp4";

const Blockchain = () => {
  const videoRef1 = useRef(null);


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

    handleVideoPlay(videoRef1.current)
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#050206" }}>
        <h2 className="blockchain_section_h1 text-center pt-5 pt-lg-5">
          Secure Your Digital Identity
        </h2>
        <div className="container mt-3 mt-lg-5 pt-lg-4">
          <div className="row">
            <div className="col-md-6 col-12">
              <h2 className="blockchain_section_h1">Web3 and Blockchain</h2>
              <p className="blockchain_p pt-2 pt-lg-4">
                D-iDconnect leverages blockchain technology for decentralized
                <br className="d-none d-xl-block" />
                identity management, ensuring your digital identity is verified
                across
                <br className="d-none d-xl-block" /> a secure network. In the
                Web3 world, D-iDconnect allows you to
                <br className="d-none d-xl-block" /> interact online
                confidently, knowing your data is protected.
                <br className="d-none d-xl-block" /> Experience a 100% security
                environment with D-iDconnect. Plus,
                <br className="d-none d-xl-block" /> cut out the hassle of
                repetitive ID verification and enjoy a seamless
                <br className="d-none d-xl-block" /> online experience. Take
                control of your digital identity and empower
                <br className="d-none d-xl-block" /> yourself in the evolving
                online landscape with D-iDconnect.
                <br className="d-none d-xl-block" /> Whether you're accessing
                financial services, managing healthcare
                <br className="d-none d-xl-block" /> records, or simply
                connecting with others online, D-iDconnect
                <br className="d-none d-xl-block" /> provides a secure and
                trustworthy platform for all your digital
                <br className="d-none d-xl-block" />
                interactions. Built with the future in mind, D-iDconnect is
                constantly <br className="d-none d-xl-block" />
                innovating to stay ahead of the curve. Join the movement and
                unlock
                <br className="d-none d-xl-block" /> the true potential of your
                digital identity.
              </p>
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center">
              {/* <div className="h-100" style={{height: "100% !important"}}> */}
              <video
                className=" rounded-2"
                src={Ecosystem1}
                ref={videoRef1}
                width="100%"
                muted
                playsInline
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockchain;
