import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // إرسال الإيميل باستخدام EmailJS
    emailjs.send(
      'service_mxyimxq', // ستحتاجي تضعي service ID من EmailJS
      'template_hwh8hfu', // ستحتاجي تضعي template ID من EmailJS
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'nour.ibrahim.dev@gmail.com' // إيميلك
      },
      'kCupNNjsmfOrKjWC_' // ستحتاجي تضعي public key من EmailJS
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });
  };

  return (
    <div className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Let's work together</h2>
          <p className="contact-subtitle">I'm available for full-time roles & freelance projects.</p>
          <p className="contact-description">My inbox is always open, whether you have a question or just want to say hi.</p>
          <p className="contact-promise">I'll try my best to get back to you!</p>
          
          <a href='https://mail.google.com/mail/?view=cm&to=nour.ibrahim.dev@gmail.com' target='_blank' className="email-button">
            <span className="email-icon">✉</span>
            nour.ibrahim.dev@gmail.com
          </a>
        </div>
        
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hello, I'd like to discuss a project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              <span className="submit-icon">{isSubmitted ? '✓' : '✈'}</span>
              {isSubmitted ? 'Email Sent Successfully!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact