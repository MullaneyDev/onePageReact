import React from "react";
import "./about.css";
import photo from "../../images/codenationProfilePic.jpg";
import { useCollapse } from "react-collapsed";
import { useState } from "react";

const about = () => {
  function Collapsible() {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse();
    return (
      <div className="collapsible">
        <div
          className="moreInfo"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded
            ? "Click here to hide extra info"
            : "Click here for more info"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <h3>Background information</h3>
            <p>
              For the last 10 years I have been working within the education
              sector as a Teaching assistant and then a Teacher. After the birth
              of my two children, I made the decision to change my career path
              so that I can spend more time mentally with my family. Coding is
              something I have always been interested in and as part of my last
              job I was the computing lead for the school. This allowed me to
              become more involved with the education of young people and their
              interactions with the digital world. I implemented a new coding
              curriculum as well as investing in new technology to allow the
              children to become better equipped for the future.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="aboutBox">
      <img className="photo" src={photo} alt="Matt" />
      <div className="aboutInfo">
        <h2>Welcome</h2>
        <p>
          My name is Matthew Mullaney and I have recently completed
          my training as a Full-Stack developer based in Birkenhead, Wirral, UK.
          <br />I have been training with{" "}
          <a
            href="https://wearecodenation.com/"
            target="_blank"
            rel="noreferrer"
          >
            codenation
          </a>{" "}
          as part of their{" "}
          <a
            href="https://wearecodenation.com/2022/04/25/master-coding/"
            target="_blank"
            rel="noreferrer"
          >
            Master: Software
          </a>{" "}
          course that provides the skills and knowledge needed to begin a career
          as a Junior Developer.
          <br />
          Throughout the course, I have gained experience in JavaScript, HTML,
          CSS, React, Node.js and MongoDB. I have also used GitHub to store and
          manage repositories for both personal and group projects as well as worked as part of a team using
          applications such as Trello.
        </p>
      </div>
      <Collapsible />
    </div>
  );
};

export default about;
