import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { React, useState } from "react";
import { Link } from "react-router-dom";


const Nav = () => {

  const [activeNav, setActiveNav] = useState('/')

  return (
    <nav>
      <a href="#" className={activeNav === '#' && 'active'} title="Home" onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === 'about' && 'active'} title="About Me" onClick={() => setActiveNav('about')}><AiOutlineUser /></a>
      <a href="#skills" className={activeNav === 'skills' && 'active'} title="My Skills" onClick={() => setActiveNav('skills')}><BiBook /></a>
      <a href="#portfolio" className={activeNav === 'portfolio' && 'active'} title="My Portfolio" onClick={() => setActiveNav('portfolio')}><RiServiceLine /></a>
      <a href="#contact" className={activeNav === 'contact' && 'active'} title="Contact Me" onClick={() => setActiveNav('contact')}><BiMessageSquareDetail /></a>


      {/* <Link to="/" className={activeNav === '/' && 'active'} onClick={() => setActiveNav('/')}><AiOutlineHome /></Link>
      <Link to="#about" className={activeNav === '/about' && 'active'} onClick={() => setActiveNav('/about')}><AiOutlineUser /></Link>
      <Link to="/experience" className={activeNav === '/experience' && 'active'} onClick={() => setActiveNav('/experience')}><BiBook /></Link>
      <Link to="/services" className={activeNav === '/services' && 'active'} onClick={() => setActiveNav('/services')}><RiServiceLine /></Link>
      <Link to="/contact" className={activeNav === '/contact' && 'active'} onClick={() => setActiveNav('/contact')}><BiMessageSquareDetail /></Link> */}
    

    </nav>
  );
};

export default Nav;
