import React, { useState } from "react";
import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      heading: "Advanced Security",
      title:
        "D-iDconnect leverages blockchain technology and AI to provide a highly secure digital identity solution",
      content:
        "The development timeline for a website or app can vary significantly based on the project's complexity. Simple websites or applications may require a few weeks, while more intricate and feature-rich projects can extend to several months or even longer.",
    },
    {
      heading: "Connecting Corporations",
      title:
        "Explore and connect with companies and organizations within the D-iDconnect ecosystem",
      content:
        "We work with a variety of technologies and tools depending on the project requirements. This may include programming languages like HTML, CSS, JavaScript, Python, Ruby, Java, Swift, Kotlin, frameworks such as React, Angular, Vue.js, backend technologies like Node.js, databases like MySQL, MongoDB, cloud services, and more.",
    },
    {
      heading: "Seamless Verification",
      title:
        "Streamline the verification process for your credentials, making it easier to apply to educational institutions, verify employment, or access services.",
      content:
        "We offer a range of services including custom web development, mobile app development, UI/UX design, backend development, e-commerce solutions, API development, maintenance, and support.",
    },
    {
      heading: "Privacy and Security",
      title:
        "D-iDconnect prioritizes user privacy and security by implementing encryption, cryptographic hashing, and other security measures.",
      content:
        "Yes, we provide ongoing maintenance, updates, bug fixes, security patches, and technical support post-launch. Our goal is to ensure your website or app remains functional, secure, and up-to-date with evolving technology trends.",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            index === activeIndex ? "accordion-itemactive" : "accordion-item"
          } py-1`}
          onClick={() => handleClick(index)}
        >
          <div className="d-flex justify-content-between">
            <div className="accordion-heading">{item.heading}</div>
            <div>
              <MoveRight color="white" />
            </div>
          </div>
          <div
            className={`accordion-title ${
              index === activeIndex ? "active" : ""
            }`}
          >
            {item.title}
          </div>
          <div
            className={`accordion-content ${
              index === activeIndex ? "active" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
