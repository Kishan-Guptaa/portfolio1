import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Book, Code, Cpu, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { blogPosts } from '../data/posts';
import { techStack } from '../data/techStack';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ projects: [], blogs: [], tech: [] });
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ projects: [], blogs: [], tech: [] });
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);
    
    // Category keywords detection
    const blogKeywords = ['blog', 'blogs', 'post', 'posts', 'article', 'articles'];
    const projectKeywords = ['project', 'projects', 'work', 'builds', 'app', 'apps'];
    const techKeywords = ['tech', 'stack', 'skill', 'skills', 'language', 'languages', 'tools', 'frontend', 'backend', 'database'];

    const isBlogSearch = blogKeywords.some(kw => queryWords.includes(kw));
    const isProjectSearch = projectKeywords.some(kw => queryWords.includes(kw));
    const isTechSearch = techKeywords.some(kw => queryWords.includes(kw));

    const filteredProjects = projects.filter(p => 
      isProjectSearch ||
      p.title.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );

    const filteredBlogs = blogPosts.filter(b => 
      isBlogSearch ||
      b.title.toLowerCase().includes(lowerQuery) || 
      b.excerpt.toLowerCase().includes(lowerQuery) ||
      b.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );

    const filteredTech = techStack.flatMap(cat => 
      // Show all in category if query matches category name (e.g. "Frontend") or is generic tech search
      (isTechSearch || cat.category.toLowerCase().includes(lowerQuery) || cat.skills.some(s => s.toLowerCase().includes(lowerQuery)))
      ? cat.skills.filter(s => isTechSearch || cat.category.toLowerCase().includes(lowerQuery) || s.toLowerCase().includes(lowerQuery))
          .map(s => ({ name: s, category: cat.category }))
      : []
    );

    setResults({ 
      projects: filteredProjects.slice(0, 10), 
      blogs: filteredBlogs.slice(0, 10), 
      tech: filteredTech.slice(0, 20) 
    });
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const hasResults = results.projects.length > 0 || results.blogs.length > 0 || results.tech.length > 0;

  const handleNavigate = (path, external = false) => {
    if (external) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    onClose();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      const lowerQuery = query.toLowerCase().trim();
      
      // Navigate to category pages on perfect keyword match
      if (['blog', 'blogs', 'post', 'posts', 'article', 'articles'].includes(lowerQuery)) {
        handleNavigate('/blog');
      } else if (['project', 'projects', 'work', 'builds'].includes(lowerQuery)) {
        handleNavigate('/projects');
      } else if (['tech', 'stack', 'skill', 'skills'].includes(lowerQuery)) {
        handleNavigate('/#tech-stack');
      } else if (hasResults) {
        // Navigate to the first result if query doesn't match a category exactly
        if (results.blogs.length > 0) {
          handleNavigate(results.blogs[0].url, true);
        } else if (results.projects.length > 0) {
          handleNavigate(results.projects[0].liveUrl, true);
        } else if (results.tech.length > 0) {
          handleNavigate('/#tech-stack');
        }
      }
    }
  };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-content" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <Search style={{ position: 'absolute', left: '1.25rem', color: 'var(--text-secondary)' }} size={24} />
          <input 
            ref={inputRef}
            type="text" 
            className="search-input" 
            placeholder="Search blogs, projects, or 'tech'..." 
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <button 
            onClick={() => handleInputKeyDown({ key: 'Enter' })} 
            style={{ position: 'absolute', right: '3.5rem', color: 'var(--text-secondary)', display: query ? 'block' : 'none' }}
            aria-label="Submit search"
          >
            <div style={{ fontSize: '0.7rem', border: '1px solid var(--navbar-border)', padding: '2px 6px', borderRadius: '4px' }}>ENTER</div>
          </button>
          <button onClick={onClose} style={{ position: 'absolute', right: '1.25rem', color: 'var(--text-secondary)' }}>
            <X size={20} />
          </button>
        </div>

        <div className="search-results">
          {query && !hasResults && (
            <div className="search-no-results">
              No results found for "{query}"
            </div>
          )}

          {results.projects.length > 0 && (
            <div className="search-category">
              <h4 className="search-category-title">Projects</h4>
              {results.projects.map(project => (
                <div key={project.id} className="search-item" onClick={() => handleNavigate(project.liveUrl, true)}>
                  <Code size={18} color="var(--text-secondary)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>{project.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{project.tags.join(', ')}</div>
                  </div>
                  <ExternalLink size={14} color="var(--text-secondary)" />
                </div>
              ))}
            </div>
          )}

          {results.blogs.length > 0 && (
            <div className="search-category">
              <h4 className="search-category-title">Blog Posts</h4>
              {results.blogs.map(post => (
                <div key={post.id} className="search-item" onClick={() => handleNavigate(post.url, true)}>
                  <Book size={18} color="var(--text-secondary)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>{post.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{post.date}</div>
                  </div>
                  <ExternalLink size={14} color="var(--text-secondary)" />
                </div>
              ))}
            </div>
          )}

          {results.tech.length > 0 && (
            <div className="search-category">
              <h4 className="search-category-title">Tech Stack</h4>
              {results.tech.map((skill, idx) => (
                <div key={idx} className="search-item" onClick={() => handleNavigate('/#tech-stack')}>
                  <Cpu size={18} color="var(--text-secondary)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>{skill.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{skill.category}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
