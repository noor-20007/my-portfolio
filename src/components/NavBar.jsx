import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
function NavBar() {
  return (
    <nav >
        <ul>
            <li><a href="https://wa.me/01000036523" target="_blank"><FaWhatsapp /></a></li>
            <li><a href="https://github.com/noor-20007" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/nour-ibrahim-a47604299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a></li>
            <li><a href="/cv.pdf" target="_blank"><TbFileCv /> </a></li>
        </ul>
    </nav>
  )
}

export default NavBar