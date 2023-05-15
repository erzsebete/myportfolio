import React from 'react'
import CV from '../../assets/CVElisabeteMonteiro.pdf'

const CTA = () => {

  const handleLetsTalk = () => {
    console.log('Let\'s talk clicked');
  };


  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact" onClick={handleLetsTalk}>Let's Talk</a>
    </div>
  )
}

export default CTA