import React from "react";
import "./Footer.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import { IoLogoTwitter } from "react-icons/io";

import { NavContext } from "../../store/navstate";

const Footer = () => {
  return (
    <NavContext.Consumer>
      {([activeNav, setActiveNav]) => {
        const handleLinkClick = (nav) => {
          setActiveNav(nav);
        };

        return (
          <footer id="footer">
            <a href="#" className="footer__logo">
              Elisabete Monteiro
            </a>

            <ul className="permalinks">
              <li>
                <a href="#" onClick={() => handleLinkClick("#")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => handleLinkClick("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#education" onClick={() => handleLinkClick("education")}>
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => handleLinkClick("skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => handleLinkClick("portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => handleLinkClick("contact")}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="footer__copyright">
              <span className="smaller">
                &copy; ElisabeteMonteiro. All rights reserved.
              </span>
            </div>
          </footer>
        );
      }}
    </NavContext.Consumer>
  );
};

export default Footer;

// const Footer = ({ setActiveNav }) => {
//   const handleLinkClick = (nav) => {
//     setActiveNav(nav);
//   };

//   return (
//     <footer id="footer">
//       <a href="#" className="footer__logo">
//         Elisabete Monteiro
//       </a>

//       <ul className="permalinks">
//         <li>
//           <a href="#" onClick={() => handleLinkClick("/")}>
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#about" onClick={() => handleLinkClick("about")}>
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#skills" onClick={() => handleLinkClick("skills")}>
//             Skills
//           </a>
//         </li>
//         <li>
//           <a href="#portfolio" onClick={() => handleLinkClick("portfolio")}>
//             Portfolio
//           </a>
//         </li>
//         <li>
//           <a href="#contact" onClick={() => handleLinkClick("contact")}>
//             Contact
//           </a>
//         </li>
//       </ul>

//       <div className="footer__copyright">
//         <span className="smaller">
//           &copy; ElisabeteMonteiro. All rights reserved.
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// {
//   /* <div className="footer__socials">
//         <a href="https://facebook.com">
//           <FaFacebookF />
//         </a>
//         <a href="https://instagram.com">
//           <FiInstagram />
//         </a>
//         <a href="https://twitter.com">
//           <IoLogoTwitter />
//         </a>
//       </div> */
// }
