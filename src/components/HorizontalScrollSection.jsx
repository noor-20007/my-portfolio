import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../HorizontalScrollSection.css";

// استيراد الصور
import forestFocus from "../assets/forest focus.png";
import security from "../assets/security.png";
import shower from "../assets/shawer.png";
import corehouse from "../assets/academy.png";
// import icons
import { SiPhp } from "react-icons/si";
import { FaPython, FaBootstrap, FaJs, FaHtml5, FaLaravel, FaGithub, FaPhp } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";

// يجب تسجيل المكون الإضافي ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const leftContentRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // محتوى المشاريع
  const projects = [
    {
      title: "Shawer",
      description:
        "A web app that converts text into sign language videos to help people with hearing loss communicate easily.",
      features: [
        "Converts text into sign-language videos instantly.",
        "Accessible, simple interface for deaf users.",
        "Supports different text lengths with smooth performance.",
        "High-quality, clear gesture animations.",
        "Preview and replay for generated videos.",
      ],
      image: shower,
      url: "https://github.com/YoussefAbbas12/Shawer.git",
      github: "https://github.com/YoussefAbbas12/Shawer.git",
      icons: [
        <SiPhp style={{ color: "#847796ff" }} />,
        <FaPython style={{ color: "yellow" }} />,
        <SiOpencv style={{ color: "blue" }} />,
        <FaBootstrap style={{ color: "purple" }} />,
        <FaJs style={{ color: "yellow" }} />,
      ],
    },
    {
      title: "Security Delivery",
      description:
        "A modern website for a company that provides complete home security solutions, including smart surveillance cameras, alarm systems, and remote monitoring tools.",
      features: [
        "Smart surveillance camera integration",
        "Real-time remote monitoring dashboard",
        "Alarm system management and alerts",
        "Easy online booking and service requests",
      ],
      image: security,
      url: "https://noor-20007.github.io/security/",
      github: "https://github.com/noor-20007/security.git",

      icons: [
        <FaJs style={{ color: "yellow" }} />,
        <FaLaravel style={{ color: "red" }} />,
        <FaPhp style={{ color: "blue" }} />,

        <RiTailwindCssFill style={{ color: "blue" }} />,
      ],
    },
    {
      title: "CoreHouse Academy",
      description:
        "CoreHouse Academy is an advanced educational platform built with Laravel that aims to provide an exceptional learning experience for students and teachers. The platform supports course management, lessons, and educational content in an easy and effective way.",
      features: [
        "Advanced course management system",
        "Interactive lessons and quizzes",
        "User-friendly interface for students and teachers",
        "Easy tracking of learning progress",
      ],
      image: corehouse, // لو عندك صورة خاصة بالمشروع ممكن تغيري الرابط هنا
      url: "https://academy.erplok.com/", // لو عايزة تحطي رابط مباشر للموقع لو معمول
      github: "https://github.com/noor-20007/academy.git",
      icons: [
        <FaLaravel style={{ color: "red" }} />,
        <FaPhp style={{ color: "blue" }} />,
        <FaBootstrap style={{ color: "purple" }} />,
        <FaHtml5 style={{ color: "orange" }} />,
        <FaCss3Alt style={{ color: "blue" }} />,
      ],
    },
    {
      title: "Forest Focus",
      description:
        "A productivity and time management website built with Laravel that helps users stay focused and organize their daily tasks efficiently.",
      features: [
        "Task creation and daily planning",
        "Progress tracking and productivity insights",
        "User authentication and personalized dashboards",
        "Reminder and notification system",
      ],
      image: forestFocus,
      url: "https://github.com/noor-20007/forest-focus.git",
      github: "https://github.com/noor-20007/forest-focus.git",
      icons: [
        <FaLaravel style={{ color: "red" }} />,
        <SiPhp style={{ color: "#847796ff" }} />,
        <FaJs style={{ color: "yellow" }} />,
        <FaCss3Alt style={{ color: "blue" }} />,
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return;
    }

    const section = sectionRef.current;
    const imagesContainer = imagesContainerRef.current;

    if (!section || !imagesContainer) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      pin: true,
      start: "top top",
      end: () => `+=${window.innerHeight * projects.length}`,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const projectIndex = Math.min(
          Math.floor(progress * projects.length),
          projects.length - 1
        );

        setCurrentProject(projectIndex);

        const translateY = -progress * (projects.length - 1) * 100;
        gsap.set(imagesContainer, {
          y: `${translateY}%`,
          ease: "none",
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isMobile, projects.length]);

  useEffect(() => {
    if (leftContentRef.current && !isMobile) {
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currentProject, isMobile]);

  return (
    <div className="horizontal-scroll-wrapper">
      <h2 className="section-title">Projects</h2>
      <section ref={sectionRef} className="horizontal-scroll-section">
        <div className="container">
          {isMobile ? (
            // عرض الكاردات للموبايل والتابلت
            <div className="mobile-cards-container">
              {projects.map((project, index) => (
                <div key={index} className="mobile-project-card">
                  <div
                    className="mobile-image-wrapper"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <div className="project-link-overlay">
                      <FiExternalLink className="link-icon" />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mobile-project-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="mobile-image-placeholder"
                      style={{ display: "none" }}
                    >
                      {project.title}
                    </div>
                  </div>

                  <div className="mobile-content">
                    <div className="project-badge">
                      <span className="badge-line"></span>
                      <span className="project-title">{project.title}</span>
                      <FaGithub
                        className="github-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      />
                    </div>
                    <p className="project-type">Team project</p>
                    <p className="project-description">{project.description}</p>

                    <div className="tech-icons">
                      {project.icons.map((icon, i) => (
                        <div key={i} className="tech-icon">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // العرض الأصلي للديسكتوب
            <div className="project-card">
              <div ref={leftContentRef} className="left-content">
                <div className="project-details">
                  <div className="project-badge">
                    <span className="badge-line"></span>
                    <span className="project-title">
                      {projects[currentProject].title}
                    </span>
                    <FaGithub
                      className="github-icon"
                      onClick={() =>
                        window.open(projects[currentProject].github, "_blank")
                      }
                    />
                  </div>
                  <p className="project-type">Team project</p>
                  <p className="project-description">
                    {projects[currentProject].description}
                  </p>

                  <div className="features-list">
                    {projects[currentProject].features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-icon">+</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tech-icons">
                    {projects[currentProject].icons.map((icon, i) => (
                      <div key={i} className="tech-icon">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="right-content">
                <div className="images-wrapper">
                  <div ref={imagesContainerRef} className="images-container">
                    {projects.map((project, index) => (
                      <div key={index} className="project-image">
                        <div
                          className="project-image-container"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <div className="project-link-overlay">
                            <FiExternalLink className="link-icon" />
                          </div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-image-display"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="project-image-placeholder"
                            style={{ display: "none" }}
                          >
                            {project.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollSection;
