import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById, fetchBlogPosts, getRelatedPosts } from '../api/blogApi';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPost();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchBlogPost = async () => {
    setLoading(true);
    const post = await fetchPostById(id);
    console.log('Fetched post:', post);
    console.log('Post content length:', post?.content?.length);
    setBlog(post);
    
    if (post) {
      const allPosts = await fetchBlogPosts();
      const related = getRelatedPosts(allPosts, parseInt(id), post.category, 3);
      setRelatedBlogs(related);
    }
    
    setLoading(false);
  };

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="not-found">
        <h1>Blog Post Not Found</h1>
        <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <div className="blog-post-header">
          <div className="container-narrow">
            <Link to="/blog" className="back-link">
              ← Back to Blog
            </Link>
            <span className="blog-post-category">{blog.category}</span>
            <h1 className="blog-post-title">{blog.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-author">By {blog.author}</span>
              <span className="blog-post-date">{blog.date}</span>
              <span className="blog-post-read-time">{blog.readTime}</span>
            </div>
          </div>
        </div>

        <div className="blog-post-image">
          <img src={blog.image} alt={blog.title} />
        </div>

        <div className="container-narrow">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
          
          <div className="blog-post-tags">
            {blog.tags.map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>

          <div className="blog-post-share">
            <h3>Share this post</h3>
            <div className="share-buttons">
              <button className="share-btn">Twitter</button>
              <button className="share-btn">Facebook</button>
              <button className="share-btn">LinkedIn</button>
              <button className="share-btn">Copy Link</button>
            </div>
          </div>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2 className="section-title">Related Posts</h2>
            <div className="related-posts-grid">
              {relatedBlogs.map(relatedBlog => (
                <Link key={relatedBlog.id} to={`/blog/${relatedBlog.id}`} className="related-post-card">
                  <img src={relatedBlog.image} alt={relatedBlog.title} />
                  <div className="related-post-content">
                    <span className="related-post-category">{relatedBlog.category}</span>
                    <h3>{relatedBlog.title}</h3>
                    <p>{relatedBlog.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogPost;
