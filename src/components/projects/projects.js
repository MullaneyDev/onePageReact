import React from "react";
import "./projects.css";

import bluey from "../../images/projectImages/bluey.png";
import calculator from "../../images/projectImages/calculator.png";
import cats4lyf from "../../images/projectImages/cats4lyf.png";
import tamogotchi from "../../images/projectImages/tamogotchi.png";
import todolist from "../../images/projectImages/todolist.png";
import promptelex from "../../images/projectImages/promptelex.png";
import boxedoff from "../../images/projectImages/boxedoff.png";

import html5 from "../../images/techstack/512px-HTML5_Badge.svg (1).png";
import javaScript from "../../images/techstack/3799-javascript.jpg";
import css3 from "../../images/techstack/CSS3_logo.svg.png";
import react from "../../images/techstack/React-icon.svg.png";
import node from "../../images/techstack/nodejs-logo-FBE122E377-seeklogo.com.png";
import sequelize from "../../images/techstack/images.png";

const projects = () => {
  return (
    <div className="projectBox">
      <h1>Projects</h1>
      <p>
        Throughout my time as part of the codenation master software course, I
        have completed projects either as an individual or as part of a group.
        <br />
        These projects have been to help us develop further fluency in the
        content we have covered.
        <br />
        Below are links to the projects completed so far.
      </p>
      <div className="projectWindow">
        <div className="individualProjects">
          <h3 className="projectTitles">Individual projects</h3>
          <div className="project">
            <h3>Card Matching Game</h3>
            <img
              className="projectImage"
              src={bluey}
              alt="Bluey Card Matching Game"
            />
            <br />
            <a
              href="https://bluey.mullaneydev.uk"
              target="_blank"
              rel="noreferrer"
            >
              bluey.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/BlueyMatchingGame"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As part of a stretch objective, I was given a task to create a
              card matching game. I made use of local storage to keep track of
              the users win total and lowest moves score.
            </p>
            <p>
              Due to the popularity of Bluey with my eldest son, I chose to
              theme it around this.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={react} alt="React" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
            </div>
          </div>

          <div className="project">
            <h3>React To-Do-List</h3>
            <img className="projectImage" src={todolist} alt="To Do List" />
            <br />
            <a
              href="https://react-to-do-list-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              react-to-do-list-gilt.vercel.app
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/reactToDoList"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As a given task we were asked to create a to do list that could be
              added to, deleted from, edited and stored completed tasks.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={react} alt="React" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
            </div>
          </div>
          <div className="project">
            <h3>React Calculator</h3>
            <img className="projectImage" src={calculator} alt="Calculator" />
            <br />
            <a
              href="https://react-calculator-rust-iota.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              react-calculator-rust-iota.vercel.app
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/reactCalculator"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As a given task we were asked to create a calculator that could
              use the 4 basic operations. As part of the stretch goals I added
              extra functionality of keyboard input, use of brackets and use of
              powers.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={react} alt="React" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
            </div>
          </div>
        </div>
        <div className="groupProjects">
          <h3 className="projectTitles">Group projects</h3>
          <div className="project">
            <h3>Project 1 - Virtual pet</h3>
            <img className="projectImage" src={tamogotchi} alt="Virtual Pet" />
            <br />
            <a
              href="https://tamogotchi.mullaneydev.uk"
              target="_blank"
              rel="noreferrer"
            >
              tamogotchi.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/groupProject1"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>
            <p>
              As a group, we had to create a virtual pet app that had at least
              three choices. We then gave each choice individualised actions. We
              made use of local storage in order to be able to store the users
              best time of keeping their virtual pet alive.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={html5} alt="HTML5" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
            </div>
          </div>
          <div className="project">
            <h3>Project 2 - Cat store</h3>
            <img className="projectImage" src={cats4lyf} alt="Cats for Life" />
            <br />
            <a
              href="https://felinesforlife.mullaneydev.uk"
              target="_blank"
              rel="noreferrer"
            >
              felinesforlife.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/groupProject2"
              rel="noreferrer"
              target="_blank"
            >
              Github repository
            </a>
            <p>
              Our brief was to use a given api to create a store in which you
              could browse and purchase different options.
            </p>
            <p>
              We achieved this through the use of catapi and faker to generate
              random cat images and details.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={react} alt="React" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
            </div>
          </div>
          <div className="project">
            <h3>Project 3 - Instagram Clone</h3>
            <img className="projectImage" src={promptelex} alt="Promptelex" />
            <br />
            <a
              href="https://github.com/MullaneyDev/instaCloneFront"
              rel="noreferrer"
              target="_blank"
            >
              Github repository - Front end
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/instaCloneBack"
              rel="noreferrer"
              target="_blank"
            >
              Github repository - Back end
            </a>
            <p>
              Our brief for this project was to create a social media platform
              similar to instagram. We had to utilise both our front end (react)
              and back end (sequelize) skills in order to do this.
            </p>
            <p>
              We worked in a group of 5 to plan, map out jobs and execute them.
              To ensure a smooth workflow and minimal conflicts, we made use of
              Trello as well as constant communication and github strategy.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={react} alt="React" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
              <img className="techStackImg" src={node} alt="Node" />
              <img className="techStackImg" src={sequelize} alt="Sequelize" />
            </div>
          </div>
          <div className="project">
            <h3>Project 4 - Boxed Off</h3>
            <img className="projectImage" src={boxedoff} alt="Boxed Off" />
            <br />
            <a
              href="https://boxedoff.mullaneydev.uk/"
              target="_blank"
              rel="noreferrer"
            >
              boxedoff.mullaneydev.uk
            </a>
            <br />
            <a
              href="https://github.com/MullaneyDev/familyManagementFrontEnd"
              rel="noreferrer"
              target="_blank"
            >
              Github repository - Front end
            </a>
            <br />
            <a
              href="https://github.com/BinkSan3/familyManagementBackEnd"
              rel="noreferrer"
              target="_blank"
            >
              Github repository - Back end
            </a>
            <p>
              Our brief for this project was to create an app of our choosing
              that hit certain parameters. We had to build a front end using
              React and connect this to a back end database of our chosen style.
              We also had to include the use of an api.
            </p>
            <p>
              We worked in a group of 5 to brainstorm app ideas. We eventually
              settled on a family management app which we named Boxed Off. After
              initial planning, we decided upon the use of sequelize and an SQL
              database due to needing relationships between the data required.
              As designated Project Lead, with the support of the team I laid
              out documentation that included our workflow, git strategy and css
              strategy. Following these meant we had a smoother workflow and cut
              down on any conflicts. We are all proud of our completed app and
              have ideas on how we can add to and improve its current
              functionality.
            </p>
            <div className="techStack">
              <img className="techStackImg" src={react} alt="React" />
              <img className="techStackImg" src={javaScript} alt="JavaScript" />
              <img className="techStackImg" src={css3} alt="CSS3" />
              <img className="techStackImg" src={node} alt="Node" />
              <img className="techStackImg" src={sequelize} alt="Sequelize" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
