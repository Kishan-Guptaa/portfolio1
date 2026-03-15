import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';

const thoughts = [
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  "Change is the law of the universe. You can be a millionaire, or a pauper in an instant. — Bhagavad Gita",
  "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. — Bhagavad Gita",
  "Man is made by his belief. As he believes, so he is. — Bhagavad Gita",
  "A person can rise through the efforts of his own mind; or draw himself down. — Bhagavad Gita",
  "Dharma is that which sustains the world. — Mahabharat",
  "True victory is the victory over one's own self. — Mahabharat",
  "Forgiveness is the strength of the virtuous. — Mahabharat",
  "What is here is found elsewhere. What is not here is nowhere else. — Mahabharat"
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
