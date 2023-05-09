import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Elisabete" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <span className="smaller">Frontend and Backend</span>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <span className="smaller">
                Thousands of Clients Around the Globe
              </span>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <span className="smaller">Thousands of Completed Projects</span>
            </article>

            </div>


            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              commodi amet sequi fuga voluptate beatae illo, alias cupiditate
              sunt ut quo debitis, nihil in quae vel sapiente mollitia nulla
              vitae.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>       

        </div>

      </div>
    </section>
  );
};

export default About;
