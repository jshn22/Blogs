import { Link } from 'react-router-dom';
import { BiCalendar, BiTime, BiUser, BiRightArrowAlt } from 'react-icons/bi';
import './BlogCard.css';

function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${blog.id}`} className="blog-card-link">
        <div className="blog-card-image">
          <img src={blog.image} alt={blog.title} />
          <span className="blog-card-category">{blog.category}</span>
        </div>
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-card-date">
              <BiCalendar className="meta-icon" />
              {blog.date}
            </span>
            <span className="blog-card-read-time">
              <BiTime className="meta-icon" />
              {blog.readTime}
            </span>
          </div>
          <h3 className="blog-card-title">{blog.title}</h3>
          <p className="blog-card-excerpt">{blog.excerpt}</p>
          <div className="blog-card-footer">
            <span className="blog-card-author">
              <BiUser className="meta-icon" />
              By {blog.author}
            </span>
            <span className="blog-card-read-more">
              Read More <BiRightArrowAlt className="arrow-icon" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
