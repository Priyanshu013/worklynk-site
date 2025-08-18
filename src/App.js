import "./App.css";
import { useState, useEffect, useRef } from "react";

// Import all Worklynk images
import Worklynk1 from "./assets/Worklynk1.jpg";
import Worklynk2 from "./assets/Worklynk2.jpg";
import Worklynk3 from "./assets/Worklynk3.jpg";
import Worklynk4 from "./assets/Worklynk4.jpg";
import Worklynk5 from "./assets/Worklynk5.jpg";
import Worklynk6 from "./assets/Worklynk6.jpg";
import Worklynk7 from "./assets/Worklynk7.jpg";
import Worklynk8 from "./assets/Worklynk8.jpg";
import Worklynk9 from "./assets/Worklynk9.jpg";
import Worklynk10 from "./assets/Worklynk10.jpg";
import Worklynk11 from "./assets/Worklynk11.jpg";
import Worklynk12 from "./assets/Worklynk12.jpg";
import Worklynk13 from "./assets/Worklynk13.jpg";
import Worklynk14 from "./assets/Worklynk14.jpg";
import Worklynk15 from "./assets/Worklynk15.jpg";
import Worklynk16 from "./assets/Worklynk16.jpg";
import Worklynk18 from "./assets/Worklynk18.jpg";
import Worklynk19 from "./assets/Worklynk19.jpg";
import Worklynk20 from "./assets/Worklynk20.jpg";
import Worklynk21 from "./assets/Worklynk21.jpg";
import Worklynk22 from "./assets/Worklynk22.jpg";
import Worklynk24 from "./assets/Worklynk24.jpg";
import Worklynk25 from "./assets/Worklynk25.jpg";

// Import store icons
import PlayAppStore from "./assets/playappstore.png";
// Import WorkLynk logo
import WorklynkLogo from "./assets/worklynk2-removebg.png";
// Import founder image
import PriyanshuImage from "./assets/priyanshu.jpeg";
// Import social media logos
import LinkedInLogo from "./assets/linkedin.png";
import GmailLogo from "./assets/gmail.png";

function App() {
  // Removed carousel-related state since we're using vertical scrolling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
  });

  const [selectedDomain, setSelectedDomain] = useState("");
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  const domains = [
    "Software Development",
    "Data Science & Analytics",
    "Product Management",
    "Marketing & Sales",
    "Design & UX",
    "Finance & Accounting",
    "Healthcare & Medicine",
    "Education & Training",
    "Consulting",
    "Engineering",
    "Human Resources",
    "Operations & Logistics",
    "Legal",
    "Media & Communications",
    "Research & Development",
    "Other",
  ];

  const images = [
    Worklynk1,
    Worklynk2,
    Worklynk3,
    Worklynk4,
    Worklynk5,
    Worklynk6,
    Worklynk7,
    Worklynk8,
    Worklynk9,
    Worklynk10,
    Worklynk11,
    Worklynk12,
    Worklynk13,
    Worklynk14,
    Worklynk15,
    Worklynk16,
    Worklynk18,
    Worklynk19,
    Worklynk20,
    Worklynk21,
    Worklynk22,
    Worklynk24,
    Worklynk25,
  ];

  // Removed carousel navigation functions since we're using vertical scrolling

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showToast = (message, type = "error") => {
    console.log("Showing toast:", message, type); // Debug log
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "error" });
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim()) {
      showToast("Please enter your name", "error");
      return;
    }

    if (!formData.email.trim()) {
      showToast("Please enter your email address", "error");
      return;
    }

    if (!formData.email.includes("@")) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    if (!selectedDomain) {
      showToast("Please select your domain", "error");
      return;
    }

    // Handle form submission here
    const submissionData = {
      ...formData,
      domain: selectedDomain,
    };
    console.log("Form submitted:", submissionData);
    showToast(
      "Thank you for joining the beta! We'll be in touch soon.",
      "success"
    );
    setFormData({ name: "", email: "", domain: "" });
    setSelectedDomain("");
  };

  const scrollToForm = () => {
    document.getElementById("lead-form").scrollIntoView({
      behavior: "smooth",
    });
  };

  // Handle email click
  const handleEmailClick = () => {
    const subject = encodeURIComponent("WorkLynk Inquiry");
    const body = encodeURIComponent(
      `Hi Priyanshu,\n\nI would like to learn more about WorkLynk.\n\nBest regards,`
    );

    // Open Gmail compose directly in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=priyanshujain831@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  // Scroll-triggered animations for cards
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all feature cards, step cards, form, and founder note
    const featureCards = document.querySelectorAll(".feature-card");
    const stepCards = document.querySelectorAll(".step-card");
    const leadForm = document.querySelector(".lead-form");
    const founderNote = document.querySelector(".founder-note-container");

    featureCards.forEach((card) => observer.observe(card));
    stepCards.forEach((card) => observer.observe(card));
    if (leadForm) observer.observe(leadForm);
    if (founderNote) observer.observe(founderNote);

    return () => {
      featureCards.forEach((card) => observer.unobserve(card));
      stepCards.forEach((card) => observer.unobserve(card));
      if (leadForm) observer.unobserve(leadForm);
      if (founderNote) observer.unobserve(founderNote);
    };
  }, []);

  return (
    <div className="App">
      {/* Toast Message */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          <div className="toast-content">
            <div className="toast-icon">
              {toast.type === "error" ? "❌" : "✅"}
            </div>
            <div className="toast-message">{toast.message}</div>
            <button
              className="toast-close"
              onClick={() =>
                setToast({ show: false, message: "", type: "error" })
              }
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="left-column">
          {/* Logo */}
          <div className="logo-container">
            <img src={WorklynkLogo} alt="WorkLynk Logo" className="logo" />
          </div>
          <div className="left-content-scroll">
            {/* Section 1 - Hero */}
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="main-title">
                  Build Credibility. <br /> Unlock Opportunities.
                </h1>
                <p className="description">
                  WorkLynk helps you validate your skills, grow your Trust
                  Score, and get recognized for more than just keywords on a
                  résumé. Show the world why you’re more than a profile — you’re
                  a professional with credibility.
                </p>
                <button className="cta-button primary" onClick={scrollToForm}>
                  Join the Beta
                </button>
              </div>
            </section>

            {/* Section 2 - Why WorkLynk */}
            <section className="why-section">
              <h2 className="section-title">Why Choose WorkLynk?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h3 className="feature-title">Prove Your Skills</h3>
                  <p className="feature-text">
                    Don't just list them on your resume. Demonstrate real
                    capabilities through practical challenges.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⭐</div>
                  <h3 className="feature-title">Trust Score</h3>
                  <p className="feature-text">
                    Earn a comprehensive score that truly reflects your
                    professional capabilities and expertise.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">👁️</div>
                  <h3 className="feature-title">Get Noticed</h3>
                  <p className="feature-text">
                    Be visible to recruiters who value real credibility over
                    just words on paper.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 - How It Works */}
            <section className="how-section">
              <h2 className="section-title">Your Journey to Credibility</h2>
              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3 className="step-title">Take Challenges</h3>
                  <p className="step-text">
                    Complete domain-specific scenario challenges that test
                    real-world skills.
                  </p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3 className="step-title">Get Feedback</h3>
                  <p className="step-text">
                    Receive valuable insights from peers and industry
                    colleagues.
                  </p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3 className="step-title">Grow Score</h3>
                  <p className="step-text">
                    Watch your Trust Score increase as you demonstrate
                    consistent excellence.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Lead Generation Form */}
            <section id="lead-form" className="form-section">
              <div className="form-container">
                <h2 className="section-title">Experience WorkLynk Now!</h2>
                <p className="form-subtitle">
                  Sign up for early access and join our beta launch.
                </p>
                <form onSubmit={handleSubmit} className="lead-form" noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      name="domain"
                      value={selectedDomain}
                      onChange={(e) => setSelectedDomain(e.target.value)}
                      className="form-select"
                    >
                      <option value="">Select Your Domain</option>
                      {domains.map((domain, index) => (
                        <option key={index} value={domain}>
                          {domain}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="domain">Your Domain</label>
                  </div>
                  <button type="submit" className="cta-button secondary">
                    Join Now
                  </button>
                </form>
              </div>
            </section>

            {/* Note from the Founder */}
            <section className="founder-note-section">
              <div className="founder-note-container">
                <div className="founder-note-header">
                  <div className="founder-avatar">
                    <img
                      src={PriyanshuImage}
                      alt="Priyanshu Sharma - Founder"
                      className="founder-image"
                    />
                  </div>
                  <div className="founder-info">
                    <h3 className="founder-name">Priyanshu Jain</h3>
                    <p className="founder-title">Founder & CEO, WorkLynk</p>
                  </div>
                </div>
                <div className="founder-note-content">
                  <p className="founder-note-text">
                    Hi there! <br />
                    I'm the founder of WorkLynk. I've worked as a Business
                    Analyst and have a passion for building products that help
                    people. The buzz of Artificial Intelligence has definitely
                    built a lot of hype around the future of work. I'm excited
                    to be a part of this journey and build a product that helps
                    people grow their careers.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="footer">
              <div className="footer-content">
                <div className="store-info">
                  <p className="coming-soon">WorkLynk – Coming Soon on</p>
                  <div className="store-icons">
                    <img
                      src={PlayAppStore}
                      alt="Play Store"
                      className="store-icon"
                      data-tooltip="Google Play Store"
                    />
                  </div>
                </div>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/priyanshu-jain-2b61a61ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    data-tooltip="LinkedIn"
                  >
                    <img
                      src={LinkedInLogo}
                      alt="LinkedIn"
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="#"
                    onClick={handleEmailClick}
                    className="social-link"
                    data-tooltip="Email"
                  >
                    <img src={GmailLogo} alt="Email" className="social-icon" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
          {/* Scroll to Top FAB */}
          {/* Removed as per edit hint */}
        </div>

        <div className="right-column">
          {/* Floating Title */}
          <div className="floating-title">
            <h3>What's cooking under the hood...</h3>
          </div>

          <div className="image-presentation">
            {/* Images Container - Modified for vertical scroll */}
            <div className="image-container vertical-scroll">
              <div className="vertical-scroll-content">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Worklynk ${index + 1}`}
                    className="presentation-image vertical-image"
                  />
                ))}
                {/* Duplicate images for seamless loop */}
                {images.map((image, index) => (
                  <img
                    key={`duplicate-${index}`}
                    src={image}
                    alt={`Worklynk ${index + 1}`}
                    className="presentation-image vertical-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
