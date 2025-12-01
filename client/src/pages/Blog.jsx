import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { fetchBlogPosts, getPostsByCategory, getAllCategories } from '../api/blogApi';
import './Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = getAllCategories();

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const allPosts = await fetchBlogPosts();
      setBlogs(allPosts);
      setFilteredBlogs(allPosts);
      setLoading(false);
    };
    
    loadPosts();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [selectedCategory, blogs]);

  const filterBlogs = () => {
    const filtered = getPostsByCategory(blogs, selectedCategory);
    setFilteredBlogs(filtered);
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="container">
          <h1 className="blog-header-title">Blog</h1>
          <p className="blog-header-subtitle">
            Stories, insights, and inspiration for everyday life
          </p>
        </div>
      </div>

      <div className="container">
        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {filteredBlogs.length > 0 ? (
              <div className="blog-grid">
                {filteredBlogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No posts found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;
