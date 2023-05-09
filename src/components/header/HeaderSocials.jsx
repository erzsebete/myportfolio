import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        
        <a href="https://www.linkedin.com/in/elisabetemonteiro/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/erzsebete" target='_blank' rel="noopener noreferrer"><FaGithub /></a>       
    
    
    </div>
  )
}

export default HeaderSocials