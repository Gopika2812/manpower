import emailjs from "emailjs-com";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import WorkSection from "../components/WorkSection";

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">WELCOME TO SUCCESS HOMECARE SOLUTIONS</h1>
        <p className="hero-tagline">Your Trusted Partner in all type of cleaning services</p>
        <a href="#service"><button className="hero-button-homecare">Know More</button></a>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Success Homecare Solutions</h2>
        </div>
        <div className="about-content">
          <div className="about-text-content">
            <h3 className="about-subheading">Success Homecare Solutions (SMS)</h3>
            <div className="service-details">
              <div>
                <p className="service-paragraph">
                  Homecare Solutions provides reliable cleaning and maintenance for homes and businesses. From housekeeping and tile cleaning to sofa, glass, and building care, we ensure spotless spaces tailored to your needs. With a focus on trust and quality, our team delivers solutions that make every space shine.
                </p>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <img src="/images/our-team.jpg" alt="Our Team" className="about-image-homecare" />
          </div>
        </div>
        <div className="stats-container">
          <div className="stat-card">
            <h4 className="stat-number">Founded with a vision</h4>
          </div>
          <div className="stat-card">
            <h4 className="stat-number">Trusted by businesses</h4>
          </div>
          <div className="stat-card">
            <h4 className="stat-number">Expanding to new markets</h4>
          </div>
          <div className="stat-card">
            <h4 className="stat-number">Serving 500+ clients</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

// Form for Hiring
const HiringForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    vacancyCount: "",
    salaryOffered: "",
    expectedExperience: "",
    location: "",
    timings: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_xzfqmmk",
        "template_pyejpep",
        formData,
        "IzAYr8IUX9b6iHk4r"
      )
      .then(
        () => {
          alert("Hiring form submitted successfully!");
          onClose();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Error sending form: " + (error.text || JSON.stringify(error)));
        }

      );
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button onClick={onClose} className="form-close-button">X</button>
        <h2 className="form-heading">Hiring</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-field full-width">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>

          <div className="form-field">
            <label htmlFor="position">Position</label>
            <select id="position" name="position" value={formData.position} onChange={handleChange}>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Sales & Marketing">SALES & MARKETING</option>
              <option value="Accountant">ACCOUNTANT</option>
              <option value="Receptionist">RECEPTIONIST</option>
              <option value="House Keeping">HOUSE KEEPING</option>
              <option value="Cook">COOK</option>
              <option value="Nurse">NURSE</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Driver">DRIVER</option>
              <option value="Degree Holder">DEGREE HOLDER</option>
              <option value="Hotel Manpower">HOTEL MANPOWER</option>
            </select>

          </div>

          <div className="form-field">
            <label htmlFor="vacancyCount">Vacancy Count</label>
            <input type="number" id="vacancyCount" name="vacancyCount" value={formData.vacancyCount} onChange={handleChange} required />
          </div>

          <div className="form-field">
            <label htmlFor="salaryOffered">Salary Offered</label>
            <div className="input-group">
              <span>₹ INR</span>
              <input type="text" id="salaryOffered" name="salaryOffered" value={formData.salaryOffered} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="expectedExperience">Expected Experience</label>
            <select id="expectedExperience" name="expectedExperience" value={formData.expectedExperience} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="location">Location</label>
            <select id="location" name="location" value={formData.location} onChange={handleChange}>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="timings">Timings</label>
            <input type="text" id="timings" name="timings" value={formData.timings} onChange={handleChange} placeholder="Full-Time / Part-Time / Shift" required />
          </div>

          <div className="form-field full-width">
            <label htmlFor="skills">Required Skills</label>
            <textarea id="skills" name="skills" rows="3" value={formData.skills} onChange={handleChange} required></textarea>
          </div>

          <div className="full-width text-center">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};


// Form for Job Seeking
const JobSeekingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    experience: "",
    expectedSalary: "",
    phone: "",
    location: "",
    timings: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_xzfqmmk",          // ⚡ replace with EmailJS service ID
        "template_qpwwyrv",    // ⚡ your Job Seeker template ID
        formData,
        "IzAYr8IUX9b6iHk4r"           // ⚡ your EmailJS public key
      )
      .then(
        () => {
          alert("Job seeker form submitted successfully!");
          onClose();
        },
        (error) => {
          console.error(error.text);
          alert("Error sending form, please try again.");
        }
      );
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button onClick={onClose} className="form-close-button">X</button>
        <h2 className="form-heading">Job Seeking</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-field full-width">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-field">
            <label htmlFor="position">Position*</label>
            <select id="position" name="position" value={formData.position} onChange={handleChange}>
              <option value="Home service">Home services</option>
              <option value="Toilets">Toilets</option>
              <option value="sofas">Sofas</option>
              <option value="tiles">Tiles</option>
              <option value="Glasses">Glasses</option>
              <option value="Hotels">Hotels</option>
              <option value="Buildings">Commercial Buildings</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="experience">Experience(Years/Month)</label>
            <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="expectedSalary">Expected Salary</label>
            <div className="input-group">
              <span>₹ INR</span>
              <input type="text" id="expectedSalary" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number*</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-field">
            <label htmlFor="location">Location</label>
            <select id="location" name="location" value={formData.location} onChange={handleChange}>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="timings">Timings</label>
            <input type="text" id="timings" name="timings" value={formData.timings} onChange={handleChange} placeholder="Morning / Night / Shift" />
          </div>

          <div className="form-field full-width">
            <label htmlFor="skills">Skills</label>
            <textarea id="skills" name="skills" rows="3" value={formData.skills} onChange={handleChange}></textarea>
          </div>

          <div className="b">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};


// Join Hands Section Component
const JoinHandsSection = ({ onPostVacancy, onApplyNow }) => {
  return (
    <section className="join-hands-section">
      <div className="container">
        <h2 className="join-hands-heading">Join Hands with Success Homecare Solutions</h2>
        <div className="join-hands-grid">
          <div className="join-hands-card">
            <h3 className="card-title">I Want to Hire</h3>
            <div className="card-image-container">
              <img src="/images/homecare-hier.jpg" alt="Hiring" className="join-hands-image" />
            </div>
            <button onClick={onPostVacancy} className="join-hands-button">POST A VACANCY</button>
          </div>
          <div className="join-hands-card">
            <h3 className="card-title">I Want a Job</h3>
            <div className="card-image-container">
              <img src="/images/homecare-jobseeker1.webp" alt="Applying" className="homecare-jobseeker-image" />
            </div>
            <button onClick={onApplyNow} className="join-hands-button">APPLY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const jobs = [
    { title: "Tiles", image: "/images/tiles.jpeg" },
    { title: "Sofa", image: "/images/sofa.webp" },
    { title: "Glasses", image: "/images/glasses.jpg" },
    { title: "Comercial Buildings", image: "/images/buildings.jpg" },
    { title: "House", image: "/images/house.jpg" },
    { title: "Toilet", image: "/images/toilet.jpeg" }
  ];
  return (
    <section id="service" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <section className="job-section">
          <div className="job-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <img src={job.image} alt={job.title} className="job-image" />
                <div className="job-info">
                  <span className="job-icon">♦</span>
                  <p className="job-title">{job.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};


// Clients Section Component
const ClientsSection = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2 className="section-heading">Our Clients</h2>
        <div className="clients-scroll">
          <img src="/images/zoho.png" alt="Client 1" />
          <img src="/images/fortis.jpg" alt="Client 2" />
          <img src="/images/infosys.png" alt="Client 3" />
          <img src="/images/IHG-hotel.png" alt="Client 4" />
          <img src="/images/tcs.png" alt="Client 5" />
          <img src="/images/meridian.jpg" alt="Client 6" />
          <img src="/images/cts.png" alt="Client 7" />
          <img src="/images/i-driver.webp" alt="Client 8" />
        </div>

      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(null); // 'hiring', 'jobseeking', or null
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <style>
        {`
          /* General Body & Typography */
          body {
            font-family: 'JetBrains Mono', monospace;
            color: #333;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }
          
          .text-center {
            text-align: center;
          }
          
          .mb-12 {
            margin-bottom: 3rem;
          }
          
          .section-heading {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 16px;
          }
          
          .section-tagline {
            font-size: 18px;
            color: #666;
            margin-bottom: 40px;
          }
            #about{
             scroll-margin-top: 100px;
          }
          #service{
             scroll-margin-top: 100px;
          }
          
          /* Navbar */
           .navbar {
  position: fixed;
  top: 20px;
  left: 30px;
  right: 30px;
  background-color: #433f3fd9;
  border-radius: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 50;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mandatory-logo {
  display: flex;
  align-items: center; /* vertically center image & text */
  text-decoration: none;
}

.mandatory-logo img {
  height: 60px;
  margin-right: 10px; /* space between logo and text */
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}


.nav-menu {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #2A5D7F;
}

/* Mobile Nav */
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger.open .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav-menu-mobile {
  display: none;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 24px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-menu-mobile.open {
  display: flex;
}

.nav-menu-mobile .nav-link {
  color: #000;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.nav-menu-mobile .nav-link:last-child {
  border-bottom: none;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .hamburger {
    display: flex;
    font-size: 14px;
  }

  .navbar-brand {
  margin-top: 0;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 4rem 1rem;
  background: url('/images/homeservice-bg.jpg') no-repeat center center/cover;
  text-align: center;
  
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
color: #0a0a0aff;
margin-top: 250px;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-tagline {
  font-size: 1.2rem;
  color: #0d0d0dff;
  margin-bottom: 3rem;
}
.hero-button-homecare {
   padding: 12px 32px;
   background-color: #2b5a2bff;
   color: white;
   font-family: 'JetBrains Mono', monospace;
   border: none;
   border-radius: 10px; 
   margin-bottom: 200px;       
}
          
@media (max-width: 768px) {

  .hero-title {
    font-size: 24px;
        }

  .hero-tagline {
    font-size: 16px;
        }

  .about-subheading {
    font-size: 15px;
  }
  .section-heading {
    font-size: 25px;
  }
  .join-hands-heading {
    font-size: 20px;
  }

  .stats-container {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
          
          /* About Section */
          .about-section {
            padding: 80px 0;
            background-color: #f7fafc;
            color: #2A5D7F;
          }
          
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }
          
          .about-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 48px;
          }
          
          @media (min-width: 768px) {
            .about-content {
              flex-direction: row;
            }
          }
          
          .about-text-content {
            flex: 1;
          }
          
          .about-subheading {
            font-size: 24px;
            font-weight: bold;
            color: #2A5D7F;
            margin-bottom: 16px;
            margin-left: 80px;
          }

          .service-details div {
            text-align: justify;
            margin-left: 80px;
            margin-bottom: 24px;
            width: 80%;
          }

          .service-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
          }
          
          .service-paragraph {
            font-size: 16px;
            color: #666;
          }
          
          .about-image-container {
            flex: 1;
          }
          
          .about-image {
            width: 70%;
            height: 400px;
            border-radius: 12px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }

          .about-image-homecare {
            width: 85%;
            height: 400px;
            border-radius: 12px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }

             @media (max-width: 768px) {
            .about-subheading {
                 margin-left: -10px;
            }
            .service-paragraph {
                margin-left: -80px;
            }
            .about-image-homecare {
            width: 100%;
            height: 300px;
            border-radius: 12px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
        }
          
          .stats-container {
            margin-top: 64px;
            display: grid;
            gap: 32px;
          }
          
          @media (min-width: 768px) {
            .stats-container {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          
          .stat-card {
            background-color: #2A5D7F;
            padding: 32px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
          }

          @media (max-width: 768px) {
          .stat-card {
            background-color: #2A5D7F;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
            font-size: 10px;
        }
        }
          
          .stat-card:hover {
            transform: translateY(-8px);
          }
          
          .stat-number {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
          }
          
          /* Join Hands Section */
          .join-hands-section {
            padding: 80px 0;
            background-color: #ffffff;
            color: #2A5D7F;
            text-align: center;
          }
          
          .join-hands-heading {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 48px;
          }
          
          .join-hands-grid {
            display: grid;
            gap: 32px;
          }
          .card-title {
            color: #2A5D7F;
        }
          @media (min-width: 768px) {
            .join-hands-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          .join-hands-card {
            background-color: #f7fafc;
            color: #333;
            padding: 32px;
            border-radius: 12px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
          }
          
          .join-hands-card:hover {
            transform: translateY(-8px);
          }
          
          .join-hands-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 24px;
          }

          .homecare-jobseeker-image {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 24px;
          }
          
          .join-hands-button {
            display: inline-block;
            background-color: #2A5D7F;
            color: white;
            font-weight: bold;
            padding: 12px 32px;
            border-radius: 9999px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-decoration: none;
            transition: background-color 0.3s ease;
            border: none;
            cursor: pointer;
          }
          
          .join-hands-button:hover {
            background-color: #1d4ed8;
          }

          @media (max-width: 768px) {
            .join-hands-heading {
              font-size: 25px;
            }
          }
          
          /* Container & Section */
.services-section {
  padding: 3rem 0;
  background-color: #fff;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Title */
.section-title {
color: #2A5D7F;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
}

/* Services Grid */
.services-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.service-card {
  flex: 1;
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  background-color: #fff;
  color: #2A5D7F;
  font-weight: 600;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
}


@media (min-width: 768px) {
  .services-grid {
    flex-direction: row;
  }
}

/* Service Card */
.service-card {
  flex: 1;
  text-align: center;
}

/* Service Image */
.service-img {
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin-bottom: 1rem;
}

/* Service Title */
.service-title {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

/* Service List */
.service-list {
  font-size: 0.875rem;
  color: #2A5D7F;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.job-section {
  padding: 2rem;
  background-color: transperant; /* gray-100 */
}

.job-grid {
  max-width: 1120px; /* max-w-7xl */
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) { /* sm */
  .job-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) { /* md */
  .job-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.job-card {
  background-color: #fff;
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* shadow-lg */
  overflow: hidden;
  transition: transform 0.2s;
}

.job-card:hover {
  transform: scale(1.05);
}

.job-image {
  width: 100%;
  height: 10rem; /* h-40 */
  object-fit: cover;
}

.job-info {
  padding: 1rem; /* p-4 */
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
}

.job-icon {
  color: #3b82f6; /* blue-500 */
  font-size: 1.125rem; /* text-lg */
}

.job-title {
  font-weight: 600; /* font-semibold */
}


          
          /* Clients Section */
          .clients-section {
            padding: 80px 0;
            background-color: #ffffff;
            text-align: center;
            color: #2A5D7F;
          }

          .clients-scroll {
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  gap: 48px;
  align-items: center;
}

.clients-scroll img {
  display: inline-block;
  width: 120px;
  height: auto;
  animation: scroll-left 4s linear infinite;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Optional: pause animation on hover */
.clients-scroll:hover img {
  animation-play-state: paused;
}

          
          /* Footer */
          .footer {
            background-color: #2A5D7F;
            color: white;
            padding: 32px 0;
            text-align: center;
          }

          .footer-grid {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 24px;
            padding: 24px 0;
          }
          
          @media (max-width: 768px) {
            .footer-grid {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
          }

          .footer-column {
            text-align: left;
          }
          
          @media (max-width: 768px) {
            .footer-column {
              text-align: center;
            }
          }


          .footer-column h3 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 16px;
          }

          .footer-column p, .footer-column a {
            color: #a0aec0;
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
          }

          .footer-column a:hover {
            text-decoration: underline;
          }

          .footer-bottom {
            margin-top: 24px;
            border-top: 1px solid #4a5568;
            padding-top: 16px;
          }
          /* Forms and Overlay */
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 1rem; /* Prevent content touching screen edges on mobile */
  overflow-y: auto;
}

.form-container {
  background-color: white;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  position: relative;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.form-close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  color: #718096;
  cursor: pointer;
}

.form-heading {
  font-size: 28px;
  font-weight: bold;
  color: #2A5D7F;
  margin-bottom: 20px;
  text-align: left;
}

.form-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr; /* Single column by default */
}

@media (min-width: 480px) {
  .form-grid {
    gap: 18px;
  }
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr; /* Two columns on tablets */
  }
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field.full-width {
  grid-column: 1 / -1;
}

.form-field label {
  font-weight: bold;
  margin-bottom: 6px;
  color: #4a5568;
  font-size: 14px;
}

.form-field input,
.form-field select,
.form-field textarea {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0 10px;
}

.input-group span {
  color: #718096;
  margin-right: 6px;
  font-size: 14px;
}

.input-group input {
  border: none;
  padding: 10px 0;
  font-size: 14px;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus,
.input-group:focus-within {
  outline: none;
  border-color: #2A5D7F;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.submit-button {
  background-color: #2A5D7F;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 28px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  grid-column: 1 / -1;
}

.submit-button:hover {
  background-color: #dbe3e9ff;
  color: #2A5D7F;
}

/* Small screens adjustments */
@media (max-width: 480px) {
  .form-heading {
    font-size: 24px;
    text-align: center;
  }

  .form-container {
    padding: 20px 15px;
  }

  .submit-button {
    width: 30%;
    padding: 12px 0;
  }

  .form-field label {
    font-size: 13px;
  }

  .form-field input,
  .form-field select,
  .form-field textarea {
    font-size: 13px;
    padding: 8px;
  }

  .input-group span {
    font-size: 12px;
  }

  .input-group input {
    font-size: 13px;
  }
}
  .hig.link {
  display: block;          /* makes it behave like a paragraph */
  text-align: center;      /* center text */
  color: #ffffff;          /* custom color */
  text-decoration: none;   /* remove underline */
  font-size: 14px;
  margin-top: 20px;
}

.hig.link:hover {
  text-decoration: underline;
}

        `}
      </style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#hero" className="mandatory-logo">
            <img src="/images/homecare.png" alt="Workforce" />
            <span class="navbar-brand">HOMECARE SOLUTIONS</span>
          </a>

          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="nav-menu">
            <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            <a href="#service" className="nav-link" onClick={() => setIsMenuOpen(false)}>SERVICE</a>
            <a href="#footer" className="nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </div>
          <div className={`nav-menu-mobile ${isMenuOpen ? 'open' : ''}`}>
            <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            <a href="#service" className="nav-link" onClick={() => setIsMenuOpen(false)}>SERVICE</a>
            <a href="#footer" className="nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <JoinHandsSection
        onPostVacancy={() => setShowForm('hiring')}
        onApplyNow={() => setShowForm('jobseeking')}
      />
      <ServicesSection />
      {/* <ClientsSection /> */}
      <WorkSection />

      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="text-white">Quick Links</h3>
              <a href="#about">About</a>
              <a href="#service">Services</a>
              <a href="#clients">Clients</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-column">
              <h3 className="text-white">Services</h3>
              <Link to="/manpower" className="card">
                <p>Manpower Solution</p>
              </Link>
              <Link to="/homecare" className="card">
                <p>Homecare Solution</p>
              </Link>
            </div>
            <div className="footer-column">
              <h3 className="text-white">Contact</h3>
              <p>Email: admin@successmanpower.com</p>
              <p>Phone: 91 8438437153</p>
              <p>Address: 34D Thomas Street, PerumalpuramPost, Tirunelveli- 627007</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Success Group Solutions. All rights reserved.</p>
          </div>
          <a href="https://hig-ai-automation.in/" class="hig link">
            Developed by HIG AI Automation LLP
          </a>
        </div>
      </footer>

      {showForm === 'hiring' && <HiringForm onClose={() => setShowForm(null)} />}
      {showForm === 'jobseeking' && <JobSeekingForm onClose={() => setShowForm(null)} />}
    </div>
  );
};

export default App;