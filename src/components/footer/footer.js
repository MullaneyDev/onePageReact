import github from "../../images/github.png";
import twitter from "../../images/twitter.png";
import mail from "../../images/mail.jpg";
import linkedin from "../../images/linkedin.png";
import "./footer.css";

import html5 from "../../images/techstack/512px-HTML5_Badge.svg (1).png";
import javaScript from "../../images/techstack/3799-javascript.jpg";
import css3 from "../../images/techstack/CSS3_logo.svg.png";
import react from "../../images/techstack/React-icon.svg.png";
import jsdom from "../../images/techstack/jsdom-logo-8AAD23EBDB-seeklogo.com.png";
import sql from "../../images/techstack/mysql-ar21.svg";
import node from "../../images/techstack/nodejs-logo-FBE122E377-seeklogo.com.png";
import sequelize from "../../images/techstack/images.png";

const Footer = () => {
  return (
    <div className="brandsig">
      <div className="brandsig-content-left">
        <div className="techStack">
          <p>Tech Stack : </p>
          <img className="techStackImg" src={html5} alt="HTML5" />
          <img className="techStackImg" src={css3} alt="CSS3" />
          <img className="techStackImg" src={javaScript} alt="JavaScript" />
          <img className="techStackImg" src={jsdom} alt="JSDOM" />
          <img className="techStackImg" src={react} alt="React" />
          <img className="techStackImg" src={node} alt="Node" />
          <img className="techStackImg" src={sql} alt="MySQL2" />
          <img className="techStackImg" src={sequelize} alt="Sequelize" />
        </div>
      </div>
      <div className="brandsig-content-center">
        <div className="sig">
          <p>Website created by</p>
        </div>
        <div className="logo">
          <p>{"</> "}</p>
        </div>
        <div className="brand">
          <p>MullaneyDev</p>
        </div>
      </div>
      <div className="brandsig-content-right">
        <a
          href="https://github.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="icon-style" alt="GitHub Logo" />
        </a>
        <a
          href="https://twitter.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="icon-style" alt="Twitter logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-mullaney-60485028a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="icon-style" alt="LinkedIn" />
        </a>
        <a href="mailto:matt.mullaney@live.co.uk">
          <img src={mail} className="icon-style" alt="Email icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
