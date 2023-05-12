import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Know</h5>
      <h2>My Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <span className="smaller text-light">Beginner</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javacript</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SCSS</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <span className="smaller text-light">Advanced</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>
          </div>
        </div>
        {/* ---------- END OF FRONTEND -------------- */}

        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C# / .Net</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <span className="smaller text-light">Intermediate</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <span className="smaller text-light">Beginner</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cobol</h4>
                <span className="smaller text-light">Advanced</span>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Solidity</h4>
                <span className="smaller text-light">Beginner</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
