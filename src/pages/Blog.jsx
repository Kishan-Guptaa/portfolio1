import React from 'react';
import { FiClock, FiArrowUpRight } from 'react-icons/fi';
import { blogPosts } from '../data/posts';
import ScrollReveal from '../components/ScrollReveal';

const Blog = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      minHeight: '70vh'
    }}>
      <ScrollReveal direction="down">
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          letterSpacing: '-1px'
        }}>
          Blog
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)',
          fontSize: '1.2rem',
          marginBottom: '3rem'
        }}>
          Thoughts on software engineering, product design, and building the future.
        </p>
      </ScrollReveal>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {blogPosts.map((post, idx) => (
          <ScrollReveal key={post.id} delay={idx * 0.1}>
            <article className="blog-card" onClick={() => window.open(post.url, '_blank')} style={{ cursor: 'pointer' }}>
              
              <div className="blog-card-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span>{post.date}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiClock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div>
                <h2 className="blog-title" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{post.title}</h2>
                <p className="blog-excerpt" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>{post.excerpt}</p>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginTop: '0.5rem'
              }}>
                <div className="blog-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="blog-arrow" style={{ color: 'var(--text-secondary)' }}>
                  <FiArrowUpRight size={20} />
                </div>
              </div>
              
            </article>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .blog-card {
          padding: 1.5rem;
          border: 1px dashed var(--navbar-border);
          border-radius: 12px;
          transition: all 0.2s ease;
        }
        .blog-card:hover {
          border-color: var(--text-primary);
          background-color: var(--hover-alpha);
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
            margin-bottom: 2rem !important;
          }
          .blog-title {
            font-size: 1.3rem !important;
          }
          .blog-card {
            padding: 1.25rem;
          }
          .blog-arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
