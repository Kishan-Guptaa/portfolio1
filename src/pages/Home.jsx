import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Server, 
  Database, 
  Code, 
  Wrench, 
  Lightbulb,
  Sun,
  Moon
} from 'lucide-react';
import { 
  FaSpotify, 
  FaXTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaYoutube, 
  FaInstagram, 
  FaPinterest, 
  FaEnvelope 
} from 'react-icons/fa6';
import { FiCopy, FiClock, FiArrowUpRight, FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { blogPosts } from '../data/posts';
import { projects } from '../data/projects';
import { techStack } from '../data/techStack';

import avatarImg from '../assets/images/avatar.jpg';
import SpotifyActivity from '../components/SpotifyActivity';

const Home = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [persona, setPersona] = useState('');
  const [inquiry, setInquiry] = useState('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '70vh',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      
      {/* Hero Section */}
      <div className="home-hero-container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        <div className="avatar-container" style={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1), height 0.5s cubic-bezier(0.4,0,0.2,1)',
        }}>
           <img
             src={avatarImg}
             alt="Kishan Gupta"
             className="avatar-dp"
             style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
           />
        </div>
        
        <div className="hero-content">
          <h1 className="hero-name" style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.4rem',
            letterSpacing: '-0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'default',
            flexWrap: 'wrap'
          }}>
            <span className="name-word">Kishan</span>
            <span className="name-word">Gupta</span>
            <Link
              to="/about"
              style={{
                fontSize: '0.85rem',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                border: '1px dashed var(--navbar-border)',
                borderRadius: '100px',
                padding: '0.2rem 0.75rem',
                marginLeft: '0.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                e.currentTarget.style.color = 'var(--bg-color)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--navbar-border)';
              }}
            >
              know about me <span style={{ color: 'red', fontSize: '1rem' }}>♥</span>
            </Link>
          </h1>

          {/* Twitter Handle */}
          <a
            href="https://x.com/T2_c0de"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginBottom: '0.75rem',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#1d9bf0'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            @T2_c0de
            <span style={{
              background: '#1d9bf0',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </span>
          </a>

          <div className="hero-subtitle" style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            gap: '0.5rem',
            marginBottom: '0.75rem'
          }}>
            <span>Software Engineer</span>
            <span className="hide-mobile">·</span>
            <span>Creator</span>
            <span className="hide-mobile">·</span>
            <a 
              href="mailto:kishangupta.code@gmail.com"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              kishangupta.code@gmail.com
            </a>
            <button aria-label="Copy email" onClick={() => navigator.clipboard.writeText('kishangupta.code@gmail.com')} style={{ display: 'flex', alignItems: 'center', marginLeft: '0.25rem', color: 'var(--text-secondary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
              <FiCopy size={16} />
            </button>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            gap: '0.5rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Punjab, India</span>
            <span>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Currently building new things</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div 
        className="social-links-container"
        style={{
          display: 'flex',
          gap: '1.25rem',
          flexWrap: 'wrap'
        }}
      >
        <a href="https://x.com/T2_c0de" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-link"><FaXTwitter size={22} /></a>
        <a href="https://www.linkedin.com/in/kishangupta09/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><FaLinkedin size={22} /></a>
        <a href="https://github.com/Kishan-Guptaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><FaGithub size={22} /></a>
        <a href="https://www.instagram.com/kishan_n_09/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><FaInstagram size={22} /></a>
        <a href="https://in.pinterest.com/kishanguptacode/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="social-link"><FaPinterest size={22} /></a>
        <a href="mailto:kishangupta.code@gmail.com" aria-label="Email" className="social-link"><FaEnvelope size={22} /></a>
      </div>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid var(--border-color)', 
        margin: '4rem 0' 
      }} />

      {/* About Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          letterSpacing: '-0.5px'
        }}>
          About Me
        </h2>
        <div style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.8'
        }}>
          <p style={{ marginBottom: isAboutExpanded ? '1.5rem' : '0' }}>
            Hello! I'm Kishan Gupta, an aspiring Full-Stack Developer passionate about creating modern and scalable web applications. 
            I specialize in the MERN stack and focus on building responsive, user-friendly interfaces.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateRows: isAboutExpanded ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            <div style={{ overflow: 'hidden' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Along with development, I actively practice <strong style={{ color: 'var(--text-primary)'}}>Data Structures and Algorithms in Java</strong> to enhance my logical thinking and coding efficiency. 
                I enjoy learning new technologies and continuously improving my development skills.
              </p>
              <p>
                My journey into tech started with a curiosity about how the web works, which quickly snowballed into building full-stack platforms from scratch.
                Whether I'm architecting a robust backend service or obsessing over pixel-perfect CSS animations, I love the entire process of bringing ideas to life.
                Outside of coding, I'm usually at the gym, reading about tech, or optimizing my productivity setups.
              </p>
            </div>
          </div>

          <button 
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--hover-alpha)',
              color: 'var(--text-primary)',
              fontWeight: '600',
              fontSize: '1rem',
              padding: '0.6rem 1.2rem',
              borderRadius: '20px',
              marginTop: '1.5rem',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-primary)';
              e.currentTarget.style.color = 'var(--bg-color)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-alpha)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {isAboutExpanded ? 'Show less' : 'More about me'} 
            {isAboutExpanded ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </button>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          letterSpacing: '-0.5px'
        }}>
          Tech Stack
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {techStack.map((category, idx) => {
            const IconComponent = {
              "Frontend": Monitor,
              "Backend": Server,
              "Databases": Database,
              "Programming Languages": Code,
              "Tools & Platforms": Wrench,
              "Core Concepts": Lightbulb
            }[category.category] || Code;

            return (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                padding: '1.5rem',
                border: '1px dashed var(--navbar-border)',
                borderRadius: '16px',
                backgroundColor: 'rgba(128, 128, 128, 0.02)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.05)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.02)';
                e.currentTarget.style.borderColor = 'var(--navbar-border)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--hover-alpha)',
                    color: 'var(--text-primary)'
                  }}>
                    <IconComponent size={18} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    letterSpacing: '0.5px', 
                    margin: 0, 
                    textTransform: 'uppercase',
                    opacity: 0.8
                  }}>
                    {category.category}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} style={{
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      padding: '0.4rem 1rem',
                      backgroundColor: 'var(--bg-color)',
                      color: 'var(--text-secondary)',
                      borderRadius: '100px',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--text-primary)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px dashed var(--navbar-border)', 
        margin: '4rem 0' 
      }} />

      {/* Recent Posts Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          letterSpacing: '-0.5px'
        }}>
          Recent Posts
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {blogPosts.slice(0, 3).map(post => (
            <article 
              key={post.id} 
              className="home-blog-row" 
              onClick={() => window.open(post.url, '_blank')}
            >
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.9rem', 
                  fontFamily: 'monospace',
                  width: '120px',
                  flexShrink: 0
                }}>
                  {post.date}
                </div>
                <h3 className="home-blog-title" style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  transition: 'color 0.2s ease',
                  margin: 0
                }}>
                  {post.title}
                </h3>
              </div>
              <div className="home-blog-arrow" style={{ 
                color: 'var(--text-secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                paddingLeft: '1rem',
                transition: 'transform 0.2s ease, color 0.2s ease'
              }}>
                <FiArrowUpRight size={24} />
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex' }}>
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px dashed var(--navbar-border)',
            fontWeight: '600',
            fontSize: '1.05rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--text-primary)';
            e.currentTarget.style.color = 'var(--bg-color)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.gap = '0.8rem';
            e.currentTarget.style.borderColor = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.gap = '0.5rem';
            e.currentTarget.style.borderColor = 'var(--navbar-border)';
          }}>
            View all posts <FiArrowRight size={20} />
          </Link>
        </div>
      </section>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid var(--border-color)', 
        margin: '4rem 0' 
      }} />

      {/* Developer Persona Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          letterSpacing: '-0.5px'
        }}>
          Developer Persona
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {/* Card 1 */}
          <div className="persona-modern-card" style={{ border: '1px dashed var(--navbar-border)', backgroundColor: 'transparent' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>The Mission</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              Building products that solve meaningful problems and designing highly scalable systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="persona-modern-card" style={{ border: '1px dashed var(--navbar-border)', backgroundColor: 'transparent' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>Core Strengths</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              An analytical problem-solving mindset with a deep focus on system design architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div className="persona-modern-card" style={{ border: '1px dashed var(--navbar-border)', backgroundColor: 'transparent' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>Personal Values</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              Relentless continuous improvement, genuine curiosity, and choosing quality over shortcuts.
            </p>
          </div>
        </div>
        
        <div style={{ marginTop: '2.5rem', display: 'flex' }}>
          <Link to="/persona" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px dashed var(--navbar-border)',
            fontWeight: '600',
            fontSize: '1.05rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--text-primary)';
            e.currentTarget.style.color = 'var(--bg-color)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.gap = '0.8rem';
            e.currentTarget.style.borderColor = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.gap = '0.5rem';
            e.currentTarget.style.borderColor = 'var(--navbar-border)';
          }}>
            View full persona <FiArrowRight size={20} />
          </Link>
        </div>
      </section>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid var(--border-color)', 
        margin: '4rem 0' 
      }} />

      {/* Featured Projects Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          letterSpacing: '-0.5px'
        }}>
          Featured Projects
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px dashed var(--navbar-border)',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-color)'
            }}>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.3px', color: 'var(--text-primary)' }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <FaGithub size={18} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <FiArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      padding: '0.2rem 0.6rem',
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

        <div style={{ marginTop: '2.5rem', display: 'flex' }}>
          <Link to="/projects" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px dashed var(--navbar-border)',
            fontWeight: '600',
            fontSize: '1.05rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--text-primary)';
            e.currentTarget.style.color = 'var(--bg-color)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.gap = '0.8rem';
            e.currentTarget.style.borderColor = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.gap = '0.5rem';
            e.currentTarget.style.borderColor = 'var(--navbar-border)';
          }}>
            View all projects <FiArrowRight size={20} />
          </Link>
        </div>
      </section>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px dashed var(--navbar-border)', 
        margin: '4rem 0' 
      }} />

      {/* Collaboration CTA Section */}
      <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div style={{
          padding: '4rem 2rem',
          border: '1px dashed var(--navbar-border)',
          borderRadius: '24px',
          backgroundColor: 'var(--hover-alpha)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px',
            margin: 0,
            opacity: 0.9
          }}>
            Are You Still Thinking of Collaborating?
          </h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-color)',
              fontWeight: '700',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              borderRadius: '12px',
              border: '1px dashed var(--navbar-border)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}
          >
            Connect Here!
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#0a0a0a',
            width: '100%',
            maxWidth: '650px',
            borderRadius: '24px',
            position: 'relative',
            border: '1px solid #333',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 1)',
            overflow: 'hidden',
            animation: 'modalAppear 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid #222',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {modalStep === 2 && (
                  <button 
                    onClick={() => setModalStep(1)}
                    style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: 0 }}
                  >
                    <FiArrowRight style={{ transform: 'rotate(180deg)' }} size={20} />
                  </button>
                )}
                <h3 style={{ margin: 0, color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>
                  {modalStep === 1 ? 'Tell me about yourself' : 'Schedule a Call'}
                </h3>
              </div>
              <button 
                onClick={() => { setIsModalOpen(false); setModalStep(1); }}
                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: '0.5rem' }}
              >
                <FiChevronUp style={{ transform: 'rotate(45deg)' }} size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2.5rem 2rem' }}>
              {modalStep === 1 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <p style={{ color: '#888', margin: 0, fontSize: '1rem' }}>Please select your inquiry type to continue.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '500' }}>Are you a?</label>
                      <select 
                        value={persona}
                        onChange={(e) => setPersona(e.target.value)}
                        style={{
                          backgroundColor: '#111',
                          border: '1px solid #333',
                          borderRadius: '12px',
                          color: '#fff',
                          padding: '1rem',
                          fontSize: '1rem',
                          cursor: 'pointer',
                          outline: 'none',
                          appearance: 'none',
                          backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%23888888%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E")',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.2rem'
                        }}
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="developer">Developer</option>
                        <option value="founder">Founder</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '500' }}>What's your inquiry about?</label>
                      <select 
                        value={inquiry}
                        onChange={(e) => setInquiry(e.target.value)}
                        style={{
                          backgroundColor: '#111',
                          border: '1px solid #333',
                          borderRadius: '12px',
                          color: '#fff',
                          padding: '1rem',
                          fontSize: '1rem',
                          cursor: 'pointer',
                          outline: 'none',
                          appearance: 'none',
                          backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%23888888%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E")',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.2rem'
                        }}
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="collab">Course Collab (Recorded/Live)</option>
                        <option value="project">Project Work</option>
                        <option value="sponsor">Sponsorships</option>
                        <option value="chit-chat">Normal Chit Chat</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button 
                      onClick={() => persona && inquiry && setModalStep(2)}
                      disabled={!persona || !inquiry}
                      style={{
                        marginTop: '1rem',
                        padding: '1.2rem',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: (persona && inquiry) ? '#fff' : '#222',
                        color: (persona && inquiry) ? '#000' : '#555',
                        fontWeight: '700',
                        fontSize: '1rem',
                        cursor: (persona && inquiry) ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ height: '600px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                   <iframe
                    src="https://calendly.com/kishangupta-code/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ffffff&background_color=0a0a0a&text_color=ffffff"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid var(--border-color)', 
        margin: '4rem 0' 
      }} />

      {/* Activity Section */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          letterSpacing: '-0.5px'
        }}>
          Activity
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* GitHub Activities Card */}
          <div style={{
            padding: '1.5rem',
            border: '1px dashed var(--navbar-border)',
            borderRadius: '16px',
            backgroundColor: 'transparent',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FaGithub size={20} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>GitHub Activities</h3>
              </div>
              <a 
                href="https://github.com/Kishan-Guptaa" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  padding: '0.4rem 0.8rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                  e.currentTarget.style.color = 'var(--bg-color)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                Follow <FaGithub size={14} />
              </a>
            </div>
            
            <div style={{ 
              width: '100%', 
              overflowX: 'auto',
              borderRadius: '8px',
              padding: '0.5rem 0'
            }}>
              <img 
                src="https://ghchart.rshah.org/E67E22/Kishan-Guptaa" 
                alt="GitHub Contribution Graph" 
                style={{ 
                  width: '100%', 
                  minWidth: '600px',
                  display: 'block',
                  filter: 'var(--theme) === "dark" ? "invert(0)" : "invert(0)"' /* Adjusted for visibility */
                }} 
              />
            </div>
          </div>

          {/* Spotify Activity Card */}
          <SpotifyActivity />
        </div>
      </section>

      <style>{`
        /* Modal Animation */
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Persona Card Styling (Optional if needed elsewhere) */
        .persona-modern-card {
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .persona-modern-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-4px);
        }

        /* Existing Styles */
        .avatar-container:hover {
          width: 158px !important;
          height: 158px !important;
        }
        .name-word {
          position: relative;
          display: 'inline-block';
        }
        .name-word::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2.5px;
          background: var(--text-primary);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-name:hover .name-word::after {
          transform: scaleX(1);
        }
        .hero-name:hover .name-word:nth-child(2)::after {
          transition-delay: 0.08s;
        }

        .avatar-dp {
          filter: grayscale(100%) brightness(0.9);
          transition: filter 1.1s cubic-bezier(0.4, 0, 0.2, 1), transform 1.1s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1);
        }
        .avatar-dp:hover {
          filter: grayscale(0%) brightness(1.05);
          transform: scale(1.12);
        }

        @media (max-width: 768px) {
          .home-hero {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem !important;
          }
          .hero-subtitle {
            justify-content: center;
          }
          .hide-mobile {
            display: none;
          }
          .avatar-container:hover {
            width: 130px !important;
            height: 130px !important;
          }
        }
      `}</style>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .home-hero-container {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
          .hero-name {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.75rem !important;
          }
          .name-word {
             width: 100%;
          }
          .avatar-container {
            width: 100px !important;
            height: 100px !important;
          }
          .social-links-container {
            justify-content: center !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

