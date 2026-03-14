import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const Persona = () => {
  const sections = [
    {
      title: 'Mission & Goal',
      items: [
        { title: 'Meaningful Problems', desc: 'Building products that solve real-world issues.' },
        { title: 'Scalable Systems', desc: 'Architecting for efficiency and future growth.' },
        { title: 'Open Source', desc: 'Contributing back to the developer community.' },
      ]
    },
    {
      title: 'Core Strengths',
      items: [
        { title: 'Problem Solving', desc: 'Breaking complex issues into logical steps.' },
        { title: 'System Design', desc: 'Architecting for the long term, not just sprints.' },
        { title: 'Clean Code', desc: 'Writing readable, self-documenting logic.' },
        { title: 'Continuous Learning', desc: 'Adapting quickly to new paradigms.' },
      ]
    },
    {
      title: 'How I Work',
      items: [
        { title: 'Clean Architecture', desc: 'Focusing on maintainable, decoupled code.' },
        { title: 'Team Collaboration', desc: 'Sharing knowledge and actively reviewing code.' },
        { title: 'User-Centric', desc: 'Prioritizing user experience in every decision.' },
      ]
    },
    {
      title: 'Current Obsessions',
      items: [
        { title: 'Cloud Computing', desc: 'AWS, Vercel, and serverless architectures.' },
        { title: 'System Architecture', desc: 'Distributed systems and robust microservices.' },
        { title: 'AI Integration', desc: 'Bringing LLMs into modern web applications.' },
        { title: 'Performance', desc: 'Optimizing rendering and reducing payload size.' },
      ]
    },
    {
      title: 'Beyond the Screen',
      items: [
        { title: 'Writing', desc: 'Drafting tech blogs and sharing engineering insights.' },
        { title: 'Building Projects', desc: 'Hacking on weekend side products.' },
        { title: 'Chess', desc: 'Practicing strategic thinking outside of code.' },
        { title: 'Fitness', desc: 'Training at the gym for physical and mental clarity.' },
      ]
    },
    {
      title: 'Personal Values',
      items: [
        { title: 'Continuous Improvement', desc: 'Aiming to get 1% better every single day.' },
        { title: 'Curiosity', desc: 'Always asking "why" before asking "how".' },
        { title: 'Collaboration', desc: 'Believing that a rising tide lifts all boats.' },
        { title: 'Quality Focus', desc: 'Doing it right the first time pays off.' },
      ]
    }
  ];

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
        marginBottom: '4rem',
        letterSpacing: '-1px'
      }}>
        Developer Persona
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {sections.map((section, idx) => (
          <section key={idx}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'rgba(128, 128, 128, 0.1)',
                border: '1px dashed var(--navbar-border)',
                color: 'var(--text-secondary)'
              }}>
                <FiBookOpen size={18} />
              </div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', fontWeight: '700', letterSpacing: '-0.5px' }}>
                {section.title}
              </h2>
            </div>
            
            <div className="persona-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="persona-modern-card" style={{ border: '1px dashed var(--navbar-border)' }}>
                  <h3 style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.4rem' 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.5' 
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
            margin-bottom: 2.5rem !important;
          }
          .section-title {
            font-size: 1.5rem !important;
          }
          .persona-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Persona;
