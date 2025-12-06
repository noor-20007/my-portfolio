import React, { useState } from 'react'
import { IoCheckmark } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { GoCopy } from "react-icons/go";
function HomeContent() {
  const [copied, setCopied] = useState(false);
  
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className={char === ' ' ? 'space' : 'letter'}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };
  
  const handleCopy = async () => {
    console.log('handleCopy function called!');
    try {
      await navigator.clipboard.writeText('nour.ibrahim@gmail.com');
      console.log('Email copied successfully!');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed:', err);
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = 'nour.ibrahim@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <div className='homee'>
    
        <h1>
         
          <br />
          <span className="letter gradient">N</span>
          {splitText('our ')}
          <span className="letter gradient">I</span>
          
          {splitText('brahim')}
        </h1>
        <p className='home-p'>Full Stack Developer crafting fast, beautiful web apps</p>
        <div className='btns'>
            <button className='connect-btn' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Connect
              <span className='arrow'><FaArrowRight /></span>
            </button>
            <div className='email-section' onClick={handleCopy}>
              <span className='copy-icon'>{copied ? <IoCheckmark />:  <GoCopy />}</span>
              <span className='email'>{copied ? 'Copied to clipboard!' : 'nour.ibrahim.dev@gmail.com'}</span>
            </div>
        </div>
    </div>
  )
}

export default HomeContent