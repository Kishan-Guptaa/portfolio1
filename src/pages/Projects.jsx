import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      minHeight: '70vh'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '1rem',
        letterSpacing: '-1px'
      }}>
        Projects
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '4rem',
        lineHeight: '1.6',
        maxWidth: '600px'
      }}>
        Here is a showcase of some of my recent work, side projects, and open source contributions.
      </p>

      <div className="projects-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px dashed var(--navbar-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-color)'
          }}>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.3px', color: 'var(--text-primary)' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <FaGithub size={20} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <FiArrowUpRight size={22} />
                  </a>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(128, 128, 128, 0.05)',
                    color: 'var(--text-secondary)',
                    borderRadius: '100px',
                    border: '1px dashed var(--navbar-border)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
