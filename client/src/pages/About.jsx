import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdWork, MdEmail } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Getting to know the person behind the words</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-image-section">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" 
              alt="Profile" 
              className="about-image"
            />
          </div>

          <div className="about-text-section">
            <h2 className="about-heading">Hello, I'm Sarah</h2>
            <p className="about-text">
              Welcome to my corner of the internet! I'm a writer, photographer, and lifelong learner 
              with a passion for exploring the beauty in everyday moments.
            </p>
            <p className="about-text">
              This blog is where I share my thoughts on mindful living, creative pursuits, travel 
              adventures, and personal growth. My goal is to inspire you to live more intentionally 
              and find joy in the simple things.
            </p>
            <p className="about-text">
              When I'm not writing, you'll find me experimenting in the kitchen, hiking local trails, 
              or curled up with a good book and a cup of tea.
            </p>
          </div>
        </div>

        <div className="about-values">
          <h2 className="section-title">What I Believe In</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Authenticity</h3>
              <p>Being genuine and true to yourself in everything you do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Growth</h3>
              <p>Continuous learning and embracing new challenges.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Sustainability</h3>
              <p>Making conscious choices that benefit our planet.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>Building connections and supporting one another.</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-badge-about">
            <span className="cta-label-about">Let's Work Together</span>
          </div>
          <h2 className="cta-title-about">Ready to Connect?</h2>
          <p className="cta-description">
            I'd love to hear from you! Whether you have questions, collaboration ideas, 
            or just want to say hello, feel free to reach out through any of these channels.
          </p>

          <div className="connect-options">
            <a href="/contact" className="connect-card">
              <div className="connect-icon">
                <MdEmail />
              </div>
              <h3>Send a Message</h3>
              <p>Drop me a line anytime</p>
            </a>

            <a href="mailto:hello@myblog.com" className="connect-card">
              <div className="connect-icon">
                <FaEnvelope />
              </div>
              <h3>Email Me</h3>
              <p>hello@myblog.com</p>
            </a>

            <a href="#schedule" className="connect-card">
              <div className="connect-icon">
                <BsFillChatDotsFill />
              </div>
              <h3>Let's Chat</h3>
              <p>Schedule a call</p>
            </a>
          </div>

          <div className="social-connect">
            <p className="social-text">Follow my journey on social media</p>
            <div className="social-icons-about">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
