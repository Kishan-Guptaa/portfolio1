import React, { useState, useCallback } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThoughtOfTheDay from './components/ThoughtOfTheDay';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Persona from './pages/Persona';
import Projects from './pages/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const handleLoadDone = useCallback(() => setIsLoading(false), []);

  const isHome = location.pathname === '/';

  return (
    <>
      {isLoading && <LoadingScreen onDone={handleLoadDone} />}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}>
        <Navbar />
        <main style={{ padding: '5rem 1rem 2rem', maxWidth: '1200px', margin: '0 auto', flexGrow: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/persona" element={<Persona />} />
          </Routes>
        </main>

        {/* Back to Home Button (Mobile only, only on sub-pages) */}
        {!isHome && (
          <Link
            to="/"
            className="mobile-home-btn"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-color)',
              display: 'none', // Hidden by default, shown via CSS
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              zIndex: 1001,
              transition: 'transform 0.2s ease',
            }}
          >
            <FiHome size={22} />
          </Link>
        )}

        <ThoughtOfTheDay />
        <Footer />

        <style>{`
          @media (max-width: 768px) {
            .mobile-home-btn {
              display: flex !important;
            }
          }
          .mobile-home-btn:active {
            transform: scale(0.9);
          }
        `}</style>
      </div>
    </>
  );
}

export default App;
