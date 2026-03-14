import React from 'react';
import { 
  FaXTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaYoutube, 
  FaInstagram, 
  FaPinterest, 
  FaEnvelope 
} from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Persona', path: '/persona' }
  ];

  const socialLinks = [
    { icon: <FaXTwitter size={18} />, url: 'https://x.com/T2_c0de', label: 'X (Twitter)' },
    { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/kishangupta09/', label: 'LinkedIn' },
    { icon: <FaGithub size={18} />, url: 'https://github.com/Kishan-Guptaa', label: 'GitHub' },
    { icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/kishan_n_09/', label: 'Instagram' },
    { icon: <FaPinterest size={18} />, url: 'https://in.pinterest.com/kishanguptacode/', label: 'Pinterest' },
    { icon: <FaEnvelope size={18} />, url: 'mailto:kishangupta.code@gmail.com', label: 'Email' }
  ];

  return (
    <footer style={{
      marginTop: 'auto',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 1rem 2rem 1rem',
      backgroundColor: 'var(--bg-color)',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        
        {/* Top Section */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem'
        }}>
          {/* Brand/Bio */}
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.5px'
            }}>
              Kishan Gupta
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              Full Stack Developer building scalable web applications and crafting modern user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                link.href ? (
                  <a 
                    key={link.href} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s ease',
                      width: 'fit-content'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="footer-link-item"
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s ease',
                      width: 'fit-content'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="footer-socials" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Connect
            </h4>
            <div className="social-icons" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--hover-alpha)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                    e.currentTarget.style.color = 'var(--bg-color)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--hover-alpha)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a 
              href="mailto:kishangupta.code@gmail.com"
              className="footer-email"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                marginTop: '0.5rem',
                transition: 'color 0.2s ease',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              kishangupta.code@gmail.com <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px dashed var(--border-color)',
        }}>
          <p style={{ 
            margin: 0,
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            © {currentYear} Kishan Gupta. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 3rem 1.5rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2.5rem !important;
          }
          .footer-brand, .footer-links, .footer-socials {
            align-items: center;
          }
          .social-icons {
            justify-content: center;
          }
          .footer-link-item {
            width: auto !important;
          }
          .footer-email {
            width: auto !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
