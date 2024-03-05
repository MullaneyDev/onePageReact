import React from "react";
import "./contact.css";
import { useState, useRef } from "react";
import { useCollapse } from "react-collapsed";

import github from "../../images/github.png";
import twitter from "../../images/twitter.png";
import mail from "../../images/mail.jpg";
import linkedin from "../../images/linkedin.png";

const contact = () => {
  function Collapsible() {
    const ref = useRef(null);
    const [isExpanded, setExpanded] = useState(false);
    const scroll = (e) => {
      if (e === "expandEnd") {
        ref.current?.scrollIntoView({ behavior: "instant" });
      }
    };
    const { getCollapseProps, getToggleProps } = useCollapse({
      onTransitionStateChange: scroll,
    });

    return (
      <div className="collapsibleContact">
        <div
          className="contactInfo"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded
            ? "Click here to hide contact information"
            : "Click here for contact information"}
        </div>
        <div {...getCollapseProps()}>
          <div className="contactBox">
            <div className="contactDetails" ref={ref}>
              <h3>
                Please follow the links to view my profiles and connect with me
                via email
              </h3>
            </div>
            <a
              href="https://github.com/MullaneyDev"
              target="_blank"
              rel="noreferrer"
              className="contactLink"
              id="github"
            >
              <img src={github} className="contact-style" alt="GitHub Logo" />
            </a>
            <a
              href="https://twitter.com/MullaneyDev"
              target="_blank"
              rel="noreferrer"
              className="contactLink"
              id="twitter"
            >
              <img src={twitter} className="contact-style" alt="Twitter logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-mullaney-60485028a/"
              target="_blank"
              rel="noreferrer"
              className="contactLink"
              id="linkedin"
            >
              <img src={linkedin} className="contact-style" alt="LinkedIn" />
            </a>
            <a href="mailto:matt.mullaney@live.co.uk" className="contactLink" id="mail">
              <img src={mail} className="contact-style"  alt="Email icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Collapsible />
    </div>
  );
};

export default contact;
