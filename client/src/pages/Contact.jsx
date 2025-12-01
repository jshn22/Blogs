import { useState } from 'react';
import { MdEmail, MdLocationOn, MdAccessTime, MdCheckCircle, MdPerson, MdSubject, MdMessage, MdSend } from 'react-icons/md';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Talk</h2>
            <p>
              Whether you have a question, feedback, or a collaboration proposal, 
              feel free to reach out. I typically respond within 24-48 hours.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <MdEmail />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>hello@myblog.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MdLocationOn />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MdAccessTime />
                </div>
                <div>
                  <h3>Response Time</h3>
                  <p>24-48 hours</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <MdCheckCircle />
                </div>
                <h3>Thank you for reaching out!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <MdPerson className="label-icon" />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <MdEmail className="label-icon" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <MdSubject className="label-icon" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MdMessage className="label-icon" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me more..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <span>Send Message</span>
                  <MdSend className="button-send-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
