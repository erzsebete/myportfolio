import React from 'react'
import './cube.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faSass,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'




const cube = () => {
  return (
    <>
    <div className="stage-cube-cont">
          <div className="cubespinner">
          {/* ANGULAR */}
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" /> 
            </div>
            {/* HTML */}
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            {/* CSS 3 */}
            <div className="face3">
              <FontAwesomeIcon icon={faSass} color="#ff62cb" />
            </div>
            {/* REACT */}
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            {/* JAVASCRIPT */}
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            {/* GIT */}
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </>
  )
}

export default cube

