import about from '../assets/about.jpg';
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
function AboutMe() {
 
  return (
    <div className="about-me">
      <>
        <h2>About Me</h2>

        <div className="About-content">
          <div className="about-image">
            <img src={about}></img>
          </div>
          <div className="about-text">
            <h3>Hi! I'm <span>Nour</span></h3>
            <p>
  I'm Nour Ibrahim, a passionate Web Developer and a tech-driven student with
  strong experience in building clean, modern, and responsive websites. I
  specialize in creating smooth user experiences using HTML, CSS, JavaScript,
  React, Bootstrap, and I’m always adding my personal creative touch to every
  project.
</p>

<p>
  With a growing interest in backend development and problem-solving, I’m
  constantly leveling up my skills and exploring more advanced concepts like
  Laravel, PHP, Express, MySQL, and APIs to become a fully well-rounded
  developer. I'm open to exciting opportunities whether internships, freelance,
  or collaborative projects where I can grow, learn, and build meaningful,
  impactful work with amazing people.
</p>

            <h4>What I Do</h4>
            <div className="what-i-do">
              <p><FaLaptopCode /> Frontend Development</p>
              <p><FaCode /> Backend Development</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default AboutMe;
