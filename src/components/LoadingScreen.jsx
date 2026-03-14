import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onDone }) => {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'fadeout'

  useEffect(() => {
    // After 2.2s start fading out
    const fadeTimer = setTimeout(() => setPhase('fadeout'), 2200);
    // After 2.9s tell App we're done
    const doneTimer = setTimeout(() => onDone(), 2900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-color)',
        zIndex: 9999,
        gap: '2rem',
        opacity: phase === 'fadeout' ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: phase === 'fadeout' ? 'none' : 'all',
      }}
    >
      {/* Hello text */}
      <h1
        className="loader-hello"
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: '700',
          letterSpacing: '-2px',
          color: 'var(--text-primary)',
          margin: 0,
        }}
      >
        Hello<span className="loader-dots">...</span>
      </h1>

      {/* Progress bar loader */}
      <div style={{
        width: 'clamp(120px, 30vw, 240px)',
        height: '2px',
        backgroundColor: 'var(--border-color)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div className="loader-bar" style={{
          height: '100%',
          backgroundColor: 'var(--text-primary)',
          borderRadius: '2px',
          width: '0%',
        }} />
      </div>

      <style>{`
        @keyframes loader-bar-fill {
          0%   { width: 0%; }
          60%  { width: 80%; }
          100% { width: 100%; }
        }
        @keyframes loader-dots-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .loader-bar {
          animation: loader-bar-fill 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .loader-hello {
          animation: none;
        }
        .loader-dots {
          display: inline-block;
          animation: loader-dots-blink 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
