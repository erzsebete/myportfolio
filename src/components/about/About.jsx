import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { BsPersonHearts } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

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
              <IoSchoolOutline className="about__icon" />
              <h5>Education</h5>
              <span className="smaller">Frontend</span>
              <br />
              <span className="smaller">Backend</span>
              <br />
              <span className="smaller">Psychology</span>
              <br />
            </article>

            <article className="about__card">
              <MdComputer className="about__icon" />
              <h5>Skills</h5>
              <span className="smaller">Angular</span>
              <br />
              <span className="smaller">React</span>
              <br />
              <span className="smaller">Javascript</span>
              <br />
              <span className="smaller">Sass & HTML</span>
            </article>

            <article className="about__card">
              <BsPersonHearts className="about__icon" />
              <h5>Interests</h5>
              <span className="smaller">Technology </span>
              <br />
              <span className="smaller">Innovation</span>
              <br />
              <span className="smaller">Gaming </span>
              <br />
              <span className="smaller">Art </span>
              <br />
            </article>
          </div>
          <p>
            My career trajectory has taken me through the realms of psychology
            and human resources, providing me with a unique perspective of the
            human behavior and the organizational structures that govern
            businesses which has have shaped my approach to programming,
            enabling me to create solutions that not only meet the technical
            requirements but also the needs of my colleagues, clients, and
            users.
            <br />
            <br />
            Let's work together to create engaging experiences that meet users'
            needs and goals!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
