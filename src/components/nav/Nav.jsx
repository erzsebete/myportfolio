import "./Nav.css";
import { AiOutlineHome} from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SlUserFemale } from "react-icons/sl";
import { BsCardChecklist } from "react-icons/bs";


import { MdComputer } from "react-icons/md";


import { RiServiceLine } from "react-icons/ri";
import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { NavContext } from '../../store/navstate';




const Nav = () => {

  const [activeNav, setActiveNav] = useContext(NavContext);

  return (
    <nav>
      <a href="#" className={activeNav === '#' && 'active'} title="Home" onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === 'about' && 'active'} title="About Me" onClick={() => setActiveNav('about')}><SlUserFemale /></a>
      <a href="#skills" className={activeNav === 'skills' && 'active'} title="My Skills" onClick={() => setActiveNav('skills')}><BsCardChecklist /></a>
      <a href="#portfolio" className={activeNav === 'portfolio' && 'active'} title="My Portfolio" onClick={() => setActiveNav('portfolio')}><MdComputer /></a>
      <a href="#contact" className={activeNav === 'contact' && 'active'} title="Contact Me" onClick={() => setActiveNav('contact')}><BiMessageSquareDetail /></a>     
    </nav>
  );
};

export default Nav;


{/* <Link to="/" className={activeNav === '/' && 'active'} onClick={() => setActiveNav('/')}><AiOutlineHome /></Link>
      <Link to="#about" className={activeNav === '/about' && 'active'} onClick={() => setActiveNav('/about')}><AiOutlineUser /></Link>
      <Link to="/experience" className={activeNav === '/experience' && 'active'} onClick={() => setActiveNav('/experience')}><BiBook /></Link>
      <Link to="/services" className={activeNav === '/services' && 'active'} onClick={() => setActiveNav('/services')}><RiServiceLine /></Link>
      <Link to="/contact" className={activeNav === '/contact' && 'active'} onClick={() => setActiveNav('/contact')}><BiMessageSquareDetail /></Link> */}