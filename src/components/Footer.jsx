import React from 'react'
import nour from '../assets/nour.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={nour} alt="Nour Ibrahim" className="footer-signature" />
        <div className="footer-line"></div>
        <p className="footer-copyright">
          © 2025 Nour Ibrahim. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer