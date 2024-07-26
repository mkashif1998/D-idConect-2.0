import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import * as images from "../constant/images";

const PrivacyPage = () => {
  return (
    <>
      <div className="privacy_back_image p-0 m-0">
        <Navbar />
      </div>
      <div style={{ backgroundColor: "#050206", marginTop: "-5%" }}>
        <p className="privacy_para text-center">
          Welcome to D-iDconnect, where your digital identity is respected with
          a commitment to transparency and security. Our Privacy Policy outlines
          how we collect, use, <br /> and protect your information, emphasizing
          your privacy as our priority. Please review and agree to these
          principles as you use D-iDconnect.
        </p>
        <h1 className="privacy_head text-center mt-5">
          Information and Purpose
        </h1>
        <p className="privacy_para text-center">
          D-iDconnect systematically collects two distinct types of information,
          each serving specific purposes to enhance user experience and <br />
          ensure the security and functionality of our platform.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className="privacy_head mt-5">Personal Information:</h1>
              <p className="privacy_para mt-0 mt-lg-4 pt-0 pt-lg-3">
                Under this category, we gather details supplied during the
                account creation process, including but not limited to your
                name, email address, and various identifiers unique to you. This
                comprehensive set of Personal Information plays a pivotal role
                in the initiation and ongoing management of your D-iDconnect
                account. It ensures a personalized and secure user experience.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <img src={images.Information} alt="information" width="100%" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 className="privacy_head pt-4 mt-5">Usage Information:</h1>
              <p className="privacy_para pt-4">
                The second category, Usage Information, the data is related to
                your interactions with the D-iDconnect app. This involves the
                collection of log data, device-specific information, and
                patterns of usage. This information serves a multifaceted
                purpose. Firstly, it contributes to the continual improvement of
                the app's functionality, enabling us to adapt and optimize
                features based on user behavior. Secondly, it enhances the
                overall user experience by tailoring the app's performance to
                user preferences. Lastly, the collection of Usage Information is
                integral to maintaining the robust security of the D-iDconnect
                platform, ensuring that your interactions with the app remain
                secure and protected. Personal Information is indispensable for
                the establishment and ongoing management of user accounts, while
                Usage Information plays a crucial role in refining features,
                delivering an optimal user experience, and upholding the
                security standards that define D-iDconnect. Rest assured, our
                commitment to safeguarding your data and delivering a
                personalized, secure, and efficient experience lies at the core
                of our information collection practices.
              </p>
            </div>
          </div>
          <h1 className="privacy_head text-center mt-5">
            Sharing and control of Information
          </h1>
          <p className="privacy_para text-center">
            In our commitment to safeguard your privacy, D-iDconnect adheres to
            strict principles when it comes to sharing and provides you with
            <br /> control over your information.
          </p>
          <div className="row">
            <div className="col-md-6 col-12">
              <ul>
                <li className="privacy_para1 mt-4 pt-3">
                  <span className="fw-bold">Sharing Information:</span> Rest
                  assured, we do not engage in the sale or rental of your
                  personal information to third parties. Your privacy is our top
                  priority, and we prioritize maintaining the confidentiality of
                  your details. However, in the spirit of enhancing the
                  functionality and overall user experience of the app, certain
                  information may be shared with trusted service providers.
                  These providers play a vital role in ensuring the seamless
                  operation and continual improvement of D-iDconnect. It's
                  important to note that these service providers are carefully
                  selected, and their access to your information is governed by
                  strict confidentiality agreements.
                </li>
                <li className="privacy_para1 mt-4 pt-3">
                  <span className="fw-bold">User Control:</span> At D-iDconnect,
                  we believe in giving you the command when it comes to your
                  information. You have full control over the sharing of your
                  data. Within the app settings, you'll find preferences that
                  allow you to manage how your information is shared. This means
                  you can tailor your privacy settings according to your
                  preferences, ensuring a personalized and secure experience
                  while using D-iDconnect. Your comfort and confidence in
                  managing your data are our top priorities, and we are
                  dedicated to providing you with the tools to do just that.
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <img src={images.Sharing} alt="information" width="100%" />
              </div>
            </div>
          </div>

          <h1 className="privacy_head text-center mt-5">
            Protection and privacy rights
          </h1>
          <p className="privacy_para text-center">
            At D-iDconnect, our prime focus is on the protection of your
            information and ensuring that you have privacy rights.
          </p>
          <div className="row">
            <div className="col-md-6 col-12">
              <ul>
                <li className="privacy_para1 mt-4 pt-3">
                  <span className="fw-bold">Data Security:</span> When it comes
                  to safeguarding your information, we go above and beyond by
                  employing industry-standard security measures. Our commitment
                  to data security includes the use of encryption and secure
                  protocols. This ensures that your information is shielded from
                  unauthorized access and protects it during transmission.
                  Whether you're creating your account, accessing the app, or
                  transmitting data, rest assured that we prioritize the highest
                  standards of security to maintain the confidentiality and
                  integrity of your information.
                </li>
                <li className="privacy_para1 mt-3">
                  <span className="fw-bold">Privacy Rights: </span>We believe in
                  empowering you with control over your personal information. As
                  a user of D-iDconnect, you have distinct privacy rights. You
                  can exercise these rights by accessing, correcting, or
                  deleting your personal information. Whether you need to update
                  details or remove certain information, we've made it simple
                  and accessible. Should you require any assistance in
                  exercising your privacy rights, our dedicated support team is
                  here to help. Contact us, and we'll guide you through the
                  process, ensuring that you have full command over your privacy
                  within the D-iDconnect platform. Your privacy matters and our
                  commitment to protecting your rights is unwavering.
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
              <div>
                <img src={images.Protection} alt="information" width="100%" />
              </div>
            </div>
          </div>
          <p className="privacy_para">
            D-iDconnect follows clear lawful bases for processing your
            information, ensuring a secure and compliant data processing
            environment.
          </p>
          <ul>
            <li className="privacy_para1">
              <span className="fw-bold">Lawful Basis for Processing:</span> The
              processing of information within D-iDconnect is grounded in the
              necessity for the performance of our services and the fulfillment
              of legal obligations. This means that the data we collect and
              process serves essential functions tied to the functionality and
              provision of our services to you. Additionally, we adhere to legal
              requirements, ensuring that our data processing practices align
              with applicable laws and regulations. By establishing a lawful
              basis for processing, we prioritize not only the seamless delivery
              of our services but also compliance with the legal framework
              governing data protection.
            </li>
            <li className="privacy_para1 mt-3">
              <span className="fw-bold">Data Processing Processes:</span> Our
              commitment to data security extends to the processes involved in
              data processing. We conduct data processing with a prime focus on
              security and in full accordance with relevant data protection
              laws. This involves implementing security measures to protect your
              information throughout the processing lifecycle. From collection
              and storage to retrieval and usage, every step is conducted
              securely. Moreover, our processes are designed to comply with the
              highest standards of data protection, ensuring that your
              information is handled with care and precision. By adhering to
              these processes, we aim to build and maintain your trust in the
              lawful and secure processing of your data within the D-iDconnect
              platform.
            </li>
          </ul>
          <h1 className="privacy_head text-center mt-5">
            Consent and withdrawal
          </h1>
          <ul>
            <li className="privacy_para1 mt-3">
              <span className="fw-bold">Lawful Basis for Processing:</span>
              Consent: When you engage with our app, you not only acknowledge
              but actively consent to the principles and practices meticulously
              laid out herein. Your consent forms the trust and transparency
              that we strive to maintain in our dynamic user-community
              relationship. We encourage you to thoroughly review this policy
              and understand the use of your data within the D-iDconnect
              ecosystem.
            </li>
            <li className="privacy_para1 mt-3">
              <span className="fw-bold">Withdrawal: </span> At D-iDconnect, we
              deeply respect your will concerning your data and privacy choices.
              We believe in simplicity and user empowerment. Furthermore, should
              you require additional support, have queries, or seek
              clarification regarding the withdrawal of consent, our dedicated
              support team is at your service. Feel free to reach out; we are
              here to guide you through the process, ensuring that your
              decisions regarding the handling of your information are
              well-informed and aligned with your preferences. Your privacy
              matters and our commitment to assisting you in every step of your
              privacy journey remains firm.
            </li>
          </ul>

          <h1 className="privacy_head text-center mt-5">Contact Information</h1>
          <p className="privacy_para m-0 pb-5">
            Your satisfaction and understanding are a priority. For any
            questions or concerns about our Privacy Policy, please do not
            hesitate to contact us. Our support team is prepared to provide the
            necessary information, address your concerns, and uphold the
            transparency that defines our commitment to your privacy. We may
            update this Privacy Policy periodically to ensure it remains aligned
            with our commitment to your privacy. Therefore, we encourage you to
            regularly check for updates.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPage;
