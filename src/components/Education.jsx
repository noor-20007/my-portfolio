import React from 'react'
import './Education.css'

function Education() {
const educationData = [
  {
    year: "2025 - 2029",
    degree: " Bachelor in Business Information Systems (BIS)",
    institution: "Delta University ",
    gpa: null
  },
  {
    year: "2024 - 2025",
    degree: "🎓 Pearson BTEC Diploma in IT",
    institution: "Pearson International",
    gpa: "Distinction"
  },
  {
    year: "2022 - 2025",
    degree: "🎓 Secondary Education",
    institution: "WE School for Applied Technology",
    gpa: "98%"
  }
];


  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-degree">{item.degree}</h3>
              <p className="timeline-institution">{item.institution}</p>
              {item.gpa && (
                <div className="timeline-gpa">{item.gpa}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education