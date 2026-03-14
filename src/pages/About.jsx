import React, { useState } from 'react';
import { FaSpotify } from 'react-icons/fa6';

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

const SPOTIFY_PROFILE_URL = 'https://open.spotify.com/user/31xv6fzijoaclwv3frstah2wcuxa';

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

// ── SPOTIFY TRACK COMPONENT ────────────────────────────────────────────────
const SpotifyTrack = ({ track, index }) => (
  <a 
    href={track.url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      borderRadius: '12px',
      textDecoration: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: `fadeInUp 0.5s ease forwards ${index * 0.1}s`,
      opacity: 0,
      transform: 'translateY(10px)'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = 'rgba(29, 185, 84, 0.08)';
      e.currentTarget.style.borderColor = 'rgba(29, 185, 84, 0.3)';
      e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
      e.currentTarget.style.borderColor = 'transparent';
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
    }}
  >
    <div style={{ position: 'relative', width: '40px', height: '40px', flexShrink: 0 }}>
      <img 
        src={track.albumArt} 
        alt={track.title} 
        style={{ width: '100%', height: '100%', borderRadius: '6px', objectFit: 'cover' }}
      />
    </div>
    <div style={{ flexGrow: 1, minWidth: 0 }}>
      <h4 style={{ 
        fontSize: '0.9rem', 
        fontWeight: '600', 
        color: 'var(--text-primary)', 
        margin: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {track.title}
      </h4>
      <p style={{ 
        fontSize: '0.75rem', 
        color: 'var(--text-secondary)', 
        margin: '0.1rem 0 0 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {track.artist}
      </p>
    </div>
    <div style={{ color: 'rgba(29, 185, 84, 0.3)' }}>
      <FaSpotify size={14} />
    </div>
  </a>
);

const About = () => {
  const [filter, setFilter] = useState('all');

  // Now Playing Mock Data
  const nowPlaying = {
    isPlaying: true,
    title: 'Starboy',
    artist: 'The Weeknd',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2734718e2d7e3ba058498616175',
    url: 'https://open.spotify.com/track/7MXVkk9YM3Z0uS4vSvmS3z'
  };

  // Hardcoded for now until API tokens are provided
  const recentTracks = [
    {
      id: '2',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b273c51ed57826cf544d67373f15',
      url: 'https://open.spotify.com/track/0VjIj6pS6o95S9S06u9Y8k'
    },
    {
      id: '3',
      title: 'Save Your Tears',
      artist: 'The Weeknd, Ariana Grande',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b27382b6831d1b820a2336214d02',
      url: 'https://open.spotify.com/track/37799049448374'
    },
    {
      id: '4',
      title: 'Double Fantasy',
      artist: 'The Weeknd, Future',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2739343e49e0f31498c08a37546',
      url: 'https://open.spotify.com/track/4MXYkS0v16U8939'
    },
    {
      id: '5',
      title: 'Creepin\'',
      artist: 'Metro Boomin, The Weeknd, 21 Savage',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b27376451664188f695503043236',
      url: 'https://open.spotify.com/track/2S7T1D'
    },
    {
      id: '6',
      title: 'Heartless',
      artist: 'The Weeknd',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b273c24f00b1a4ac3',
      url: 'https://open.spotify.com/track/68v3z4'
    }
  ];

  const filtered = poems.filter(p => filter === 'all' || p.type === filter);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Page Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-1px', marginBottom: '0.75rem' }}>
          Know Me More <span style={{ color: 'red' }}>♥</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
          Curated thoughts and late-night sounds.
        </p>
      </div>

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
          {filtered.map(poem => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px dashed var(--navbar-border)', margin: '3rem 0' }} />

      {/* ── SPOTIFY SECTION ── */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FaSpotify size={24} color="#1DB954" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px', margin: 0 }}>
              Spotify Activity
            </h2>
          </div>
          <a
            href={SPOTIFY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '100px',
              border: '1px solid #1DB954',
              color: '#1DB954',
              fontSize: '0.85rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#1DB954';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1DB954';
            }}
          >
            Visit Profile
          </a>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Now Playing Component */}
          <div style={{
            padding: '1.5rem',
            border: '1.5px solid rgba(29, 185, 84, 0.3)',
            borderRadius: '20px',
            backgroundColor: 'rgba(29, 185, 84, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div className="playing-bars">
                <span /> <span /> <span />
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#1DB954', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Now Playing
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                <img 
                  src={nowPlaying.albumArt} 
                  alt="Now Playing" 
                  style={{ width: '100%', height: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#1DB954',
                  borderRadius: '50%',
                  border: '3px solid var(--bg-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FaSpotify size={10} color="#fff" />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.4rem 0' }}>
                  {nowPlaying.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {nowPlaying.artist}
                </p>
                <a 
                  href={nowPlaying.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    fontSize: '0.8rem', 
                    color: '#1DB954', 
                    textDecoration: 'none',
                    marginTop: '0.75rem',
                    fontWeight: '600'
                  }}
                >
                  Listen on Spotify <FaSpotify size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Recently Played List */}
          <div style={{
            padding: '2rem',
            border: '1px dashed var(--navbar-border)',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.01)'
          }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, fontWeight: '500' }}>
                 Recent History
               </p>
               <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '2px' }}>
                 Last 5 Tracks
               </span>
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
               {recentTracks.map((track, idx) => (
                 <SpotifyTrack key={track.id} track={track} index={idx} />
               ))}
             </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes playAnimation {
          0% { height: 4px; }
          50% { height: 14px; }
          100% { height: 4px; }
        }
        .playing-bars {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
        }
        .playing-bars span {
          width: 3px;
          background-color: #1DB954;
          border-radius: 1px;
          animation: playAnimation 0.8s ease-in-out infinite;
        }
        .playing-bars span:nth-child(2) { animation-delay: 0.2s; }
        .playing-bars span:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default About;
