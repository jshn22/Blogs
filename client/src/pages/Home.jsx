import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import { fetchBlogPosts, getFeaturedPosts } from '../api/blogApi';
import { MdEmail, MdSend } from 'react-icons/md';
import { FaNewspaper, FaGift, FaBook } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const allPosts = await fetchBlogPosts();
      const featured = getFeaturedPosts(allPosts).slice(0, 6);
      setFeaturedBlogs(featured);
      setLoading(false);
    };
    
    loadPosts();
  }, []);

  return (
    <div className="home">
      <Hero />
      
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Stories</h2>
            <p className="section-subtitle">
              Curated content to inspire and inform
            </p>
          </div>

          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="blog-grid">
              {featuredBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span className="cta-label">Newsletter</span>
            </div>
            <h2 className="cta-title">Stay Connected</h2>
            <p className="cta-text">
              Join our community and never miss an update. Get weekly insights delivered straight to your inbox.
            </p>
            <form className="cta-form">
              <div className="input-wrapper">
                <MdEmail className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="cta-input"
                />
              </div>
              <button type="submit" className="cta-button">
                <span>Subscribe Now</span>
                <MdSend className="button-icon" />
              </button>
            </form>
            <div className="cta-features">
              <div className="feature-item">
                <FaNewspaper className="feature-icon" />
                <span className="feature-text">Weekly Updates</span>
              </div>
              <div className="feature-item">
                <FaGift className="feature-icon" />
                <span className="feature-text">Exclusive Content</span>
              </div>
              <div className="feature-item">
                <FaBook className="feature-icon" />
                <span className="feature-text">Free Resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
