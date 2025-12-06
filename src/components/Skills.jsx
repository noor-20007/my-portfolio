import React from 'react'
import './Skills.css'
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiSqllite } from "react-icons/di";
import { IoGitMergeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiExpress } from "react-icons/si";




function Skills() {
const skills = [
  // -------------------- Frontend --------------------
  { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'ReactJS', icon: <FaReact />, color: '#61dafb' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: '#06b6d4' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },

  // -------------------- Backend --------------------
  { name: 'NodeJS', icon: <FaNodeJs />, color: '#339933' },
//   { name: 'ExpressJS', icon: '🚀', color: '#000000' },
  { name: 'PHP', icon: <SiPhp />, color: '#777bb4' },
  { name: 'Laravel', icon: <FaLaravel />, color: '#ff2d20' },
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },
  { name: 'Opencv', icon: <SiOpencv />, color: '#3776ab' },

  // -------------------- Databases --------------------
  { name: 'MySQL', icon: <GrMysql />, color: '#4479a1' },
  { name: 'SQLite', icon: <DiSqllite />, color: '#003b57' },

  // -------------------- Tools --------------------
  { name: 'Git', icon: <IoGitMergeOutline />, color: '#f05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Postman', icon:<SiPostman />, color: '#ff6c37' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
  { name: 'Xampp', icon: <SiXampp />, color: '#fb7a24' },
  { name: 'JMeter', icon: <SiApachejmeter />, color: '#fb7a24' },
  { name: 'Jest', icon: <SiJest />, color: '#d62728' },
];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">I CONSTANTLY TRY TO IMPROVE</p>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon" style={{ color: skill.color }}>
              {React.cloneElement(skill.icon, { style: { color: skill.color } })}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills