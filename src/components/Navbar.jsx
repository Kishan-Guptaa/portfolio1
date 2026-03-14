import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import avatarImg from '../assets/images/avatar.jpg';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '800px',
      padding: '1rem 2rem',
      backgroundColor: 'var(--hover-alpha)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px dashed var(--navbar-border)',
      borderRadius: '8px',
      zIndex: 1000,
      transition: 'border-color 0.3s ease, background-color 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        
        {/* Left Side: Name */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          <NavLink to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
            Kishan Gupta
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div className="desktop-links" style={{ display: 'flex', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                style={({ isActive }) => ({
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none'
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="desktop-divider" style={{
            width: '1px',
            height: '24px',
            backgroundColor: 'var(--border-color)'
          }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={(e) => {
                if (!document.startViewTransition) {
                  toggleTheme();
                  return;
                }

                const x = e.clientX;
                const y = e.clientY;
                const endRadius = Math.hypot(
                  Math.max(x, window.innerWidth - x),
                  Math.max(y, window.innerHeight - y)
                );

                document.documentElement.setAttribute('data-theme-transitioning', 'true');
                
                const transition = document.startViewTransition(() => {
                  toggleTheme();
                });

                transition.finished.finally(() => {
                  document.documentElement.removeAttribute('data-theme-transitioning');
                });

                transition.ready.then(() => {
                  const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`
                  ];

                  document.documentElement.animate(
                    {
                      clipPath: isDarkMode ? clipPath.reverse() : clipPath
                    },
                    {
                      duration: 700,
                      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                      pseudoElement: isDarkMode
                        ? "::view-transition-old(root)"
                        : "::view-transition-new(root)",
                    }
                  );
                });
              }}
              aria-label="Toggle theme"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '50%',
                backgroundColor: 'var(--hover-alpha)',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                viewTransitionName: 'theme-toggle'
              }}
            >
              <div style={{
                position: 'absolute',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isDarkMode ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)',
                opacity: isDarkMode ? 1 : 0,
              }}>
                <Sun size={20} color="var(--text-primary)" />
              </div>
              <div style={{
                position: 'absolute',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isDarkMode ? 'scale(0) rotate(-90deg)' : 'scale(1) rotate(0deg)',
                opacity: isDarkMode ? 0 : 1,
              }}>
                <Moon size={20} color="var(--text-primary)" />
              </div>
            </button>

            {/* Hamburger Toggle */}
            <button 
              className="hamburger-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              style={{
                display: 'none', // Hidden on desktop
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--hover-alpha)',
                color: 'var(--text-primary)',
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--bg-color)',
          borderBottom: '1px dashed var(--navbar-border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 2rem',
          gap: '1.5rem',
          zIndex: 99
        }}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              style={({ isActive }) => ({
                fontSize: '1.2rem',
                fontWeight: isActive ? '600' : '400',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
      
      {/* Mobile Styles via Style Tag (for simplicity in a single file) */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-links, .desktop-divider {
            display: none !important;
          }
          .hamburger-toggle {
            display: flex !important;
          }
        }
        .nav-logo-container:hover {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
