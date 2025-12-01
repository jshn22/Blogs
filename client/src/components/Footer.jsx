import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BsSendFill } from 'react-icons/bs';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">My Blog</h3>
            <p className="footer-description">
              A personal space for sharing thoughts, stories, and inspiration.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="#lifestyle">Lifestyle</a></li>
              <li><a href="#travel">Travel</a></li>
              <li><a href="#wellness">Wellness</a></li>
              <li><a href="#career">Career</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-text">
              Subscribe to get the latest updates delivered to your inbox.
            </p>
            <form className="footer-newsletter-form">
              <div className="footer-input-wrapper">
                <FaEnvelope className="footer-input-icon" />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="footer-newsletter-input"
                />
              </div>
              <button type="submit" className="footer-newsletter-button">
                <BsSendFill />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} My Blog. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
