import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/animatedLetters/animatedLetters";
import Cube from "../cube/cube";



const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const myName3 = ["E", "l", "i", "s", "a", "b", "e", "t", "e"];

  const myName = "Elisabete";

  const myName2 = myName.split();

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myName3}
              idx={1}
            />
          </h1>

          <h5 className="text-light">Developer</h5>
          <CTA />
          <HeaderSocials />

          {/* <div className="me">
            <img src={ME} alt="Elisabete" />
          </div> */}
          <Cube />

          {/* <a href="#footer" className="scroll__down">
            Scroll Down
          </a> */}
        </div>
      </header>
    </>
  );
};

export default Header;
