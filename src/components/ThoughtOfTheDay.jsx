import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';

const thoughts = [
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Make it work, make it right, make it fast.",
  "Clean code always looks like it was written by someone who cares.",
  "Simplicity is the soul of efficiency.",
  "Before software can be reusable it first has to be usable.",
  "It's not a bug. It's an undocumented feature!",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Experience is the name everyone gives to their mistakes.",
  "Programming isn't about what you know; it's about what you can figure out."
];

const ThoughtOfTheDay = () => {
  const [currentThought] = useState(() => thoughts[Math.floor(Math.random() * thoughts.length)]);

  return (
    <>
      {/* Thought Section - Refined Aesthetic */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="thought-container" style={{
          position: 'relative',
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          backgroundColor: 'transparent',
          border: '1px dashed var(--navbar-border)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1.5rem',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            backgroundColor: 'var(--hover-alpha)',
            color: 'var(--text-primary)',
            flexShrink: 0
          }}>
            <Lightbulb size={20} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <h3 style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontWeight: '600',
              color: 'var(--text-secondary)',
              margin: 0
            }}>
              Thought of the Day
            </h3>
            
            <blockquote style={{
              fontSize: '1.05rem',
              fontWeight: '500',
              lineHeight: '1.5',
              color: 'var(--text-primary)',
              margin: 0,
              fontStyle: 'italic',
              opacity: 0.9
            }}>
              "{currentThought}"
            </blockquote>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .thought-container {
              flex-direction: column !important;
              text-align: center;
              padding: 1.5rem !important;
              gap: 1rem !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ThoughtOfTheDay;
