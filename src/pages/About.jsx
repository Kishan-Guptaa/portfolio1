import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

// ── POETRY DATA ──────────────────────────────────────────────────────────────
const poems = [
  {
    id: 1,
    type: 'mine',
    title: 'Lines from a Late Night',
    excerpt: `The cursor blinks at 2 AM,\nwaiting for the thought I've been chasing all day.\nI write in code what words can't say —\na function, a fix, a quiet prayer\nthat this time it works the way.`,
    note: 'Written by me',
  },
  {
    id: 2,
    type: 'loved',
    title: 'Two roads diverged…',
    excerpt: `Two roads diverged in a wood, and I —\nI took the one less traveled by,\nAnd that has made all the difference.`,
    note: 'Robert Frost — The Road Not Taken',
  },
  {
    id: 3,
    type: 'loved',
    title: 'Still I Rise',
    excerpt: `You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I'll rise.`,
    note: 'Maya Angelou — Still I Rise',
  },
  {
    id: 4,
    type: 'mine',
    title: 'Build, Break, Repeat',
    excerpt: `They said it takes talent.\nI said it takes Tuesday nights,\ncold coffee, and one more try.\nEvery bug is just a riddle —\nevery fix, a small sunrise.`,
    note: 'Written by me',
  },
];



// ── POETRY CARD COMPONENT ──────────────────────────────────────────────────
const PoemCard = ({ poem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const EXCERPT_LIMIT = 120; // Character limit for the "preview"
  
  const isTooLong = poem.excerpt.length > EXCERPT_LIMIT;
  const displayContent = isExpanded 
    ? poem.excerpt 
    : (isTooLong ? poem.excerpt.slice(0, EXCERPT_LIMIT) + '...' : poem.excerpt);

  return (
    <div style={{
      padding: '1.75rem',
      border: '1px dashed var(--navbar-border)',
      borderRadius: '16px',
      position: 'relative',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content'
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-primary)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--navbar-border)'}
    >
      <span style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontSize: '0.7rem',
        fontWeight: '600',
        color: poem.type === 'mine' ? '#1d9bf0' : 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        {poem.type === 'mine' ? 'Mine' : 'Loved'}
      </span>
      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
        {poem.title}
      </h3>
      <p style={{
        fontSize: '0.95rem',
        lineHeight: '1.8',
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
        whiteSpace: 'pre-line',
        marginBottom: isTooLong ? '0.5rem' : '1rem'
      }}>
        "{displayContent}"
      </p>
      
      {isTooLong && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '0.5rem 0',
            textAlign: 'left',
            marginBottom: '1rem'
          }}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}

      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7, marginTop: 'auto' }}>
        — {poem.note}
      </p>
    </div>
  );
};



const About = () => {
  const [filter, setFilter] = useState('all');
  const filtered = poems.filter(p => filter === 'all' || p.type === filter);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Page Header */}
      <ScrollReveal direction="down">
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-1px', marginBottom: '0.75rem' }}>
            Know Me More <span style={{ color: 'red' }}>♥</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Curated thoughts and late-night sounds.
          </p>
        </div>
      </ScrollReveal>

      <hr style={{ border: 'none', borderTop: '1px dashed var(--navbar-border)', marginBottom: '3rem' }} />

      {/* ── POETRY SECTION ── */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px', margin: 0 }}>
            Poetry
          </h2>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['all', 'mine', 'loved'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '0.3rem 0.85rem',
                borderRadius: '100px',
                border: '1px dashed var(--navbar-border)',
                background: filter === f ? 'var(--text-primary)' : 'transparent',
                color: filter === f ? 'var(--bg-color)' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}>
                {f === 'all' ? 'All' : f === 'mine' ? 'My Poems' : 'I Love'}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          {filtered.map((poem, idx) => (
            <ScrollReveal key={poem.id} delay={idx * 0.1}>
              <PoemCard poem={poem} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px dashed var(--navbar-border)', margin: '3rem 0' }} />



      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

      `}</style>
    </div>
  );
};

export default About;
