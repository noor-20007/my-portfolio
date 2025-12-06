# 🌟 Nour Ibrahim - Portfolio

<div align="center">
  
  ![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
  ![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
  ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)
  
  **A modern, responsive portfolio showcasing my journey as a Full Stack Developer**
  
  [🌐 Live Demo](https://nouribrahim-dev.netlify.app/) | [📧 Contact Me](mailto:nour.ibrahim.dev@gmail.com)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🚀 **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Scroll-triggered animations using GSAP & Intersection Observer
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- 🌈 **Interactive Elements** - Hover effects, transitions, and dynamic content
- 🎯 **Project Showcase** - Horizontal scroll section with detailed project cards

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **Vite 5.4** - Build tool
- **GSAP** - Animation library
- **EmailJS** - Email service integration

### Styling
- **CSS3** - Custom styling with modern features
- **Glassmorphism** - Modern glass effect design
- **Responsive Design** - Mobile-first approach

### Tools & Libraries
- **React Icons** - Icon library
- **Intersection Observer API** - Scroll animations
- **Git & GitHub** - Version control

---

## 📂 Project Structure

```
my-portfolio/
├── public/
│   └── cv.pdf
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── AboutMe.jsx
│   │   ├── BackgroundBlobs.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeContent.jsx
│   │   ├── HorizontalScrollSection.jsx
│   │   ├── NavBar.jsx
│   │   └── Skills.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── animations.css
│   └── main.jsx
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/noor-20007/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the credentials in `Contact.jsx`:
   ```javascript
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {...},
     'YOUR_PUBLIC_KEY'
   )
   ```

---

## 🎨 Sections

### 🏠 Home
- Eye-catching hero section with animated text
- Quick access to contact information
- Call-to-action buttons

### 👤 About Me
- Professional introduction
- Skills overview
- Personal background

### 💼 Projects
- Interactive horizontal scroll showcase
- Detailed project cards with:
  - Live demo links
  - GitHub repository links
  - Technology stack icons
  - Project descriptions

### 🎓 Education
- Timeline-based education history
- Degree information
- GPA display

### 🛠️ Skills
- Categorized skill sets
- Visual skill cards
- Technology icons

### 📬 Contact
- Working contact form
- Direct email link
- Social media links

---

## 🌐 Connect With Me

<div align="center">
  
  [![GitHub](https://img.shields.io/badge/GitHub-noor--20007-181717?style=for-the-badge&logo=github)](https://github.com/noor-20007)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/nour-ibrahim-a47604299)
  [![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail)](mailto:nour.ibrahim.dev@gmail.com)
  [![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp)](https://wa.me/01000036523)

</div>

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Built with [Vite](https://vitejs.dev/) & [React](https://react.dev/)

---

<div align="center">
  
  **Made with ❤️ by Nour Ibrahim**
  
  ⭐ Star this repo if you like it!

</div>
