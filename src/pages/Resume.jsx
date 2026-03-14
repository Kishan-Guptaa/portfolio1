import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  // Using the provided Google Drive link for the resume.
  const resumeUrl = "https://drive.google.com/file/d/1HzH6R6rX02tbYS8zQ3xMcARRHvLIvTY8/view?usp=sharing";
  // The 'preview' link is used for the iframe so that Google Drive allows it to be embedded.
  const embedUrl = "https://drive.google.com/file/d/1HzH6R6rX02tbYS8zQ3xMcARRHvLIvTY8/preview";

  return (
    <div className="resume-container" style={{
      maxWidth: '800px',
      margin: '0 auto',
      paddingBottom: '6rem'
    }}>
      {/* Header */}
      <header className="resume-header" style={{ marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '0.5rem',
          letterSpacing: '-2px',
          color: 'var(--text-primary)'
        }}>
          Resume
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          margin: 0
        }}>
          View and download my professional resume.
        </p>
      </header>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid var(--border-color)', 
        margin: '0 0 3rem 0' 
      }} />

      {/* PDF Viewer Container */}
      <div className="pdf-viewer-container" style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        minHeight: '600px',
        backgroundColor: 'var(--hover-alpha)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* PDF Top Bar Action buttons */}
        <div className="pdf-actions" style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0.75rem 1rem',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-color)',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.backgroundColor = 'var(--hover-alpha)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ExternalLink size={18} /> <span className="hide-mobile">Open in new tab</span>
            <span className="show-mobile" style={{ display: 'none' }}>Open</span>
          </a>
          <a 
            href={resumeUrl}
            download="Kishan_Gupta_Resume.pdf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--bg-color)',
              backgroundColor: 'var(--text-primary)',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Download size={18} /> Download
          </a>
        </div>

        {/* The actual PDF iframe */}
        <iframe 
          src={embedUrl}
          title="Resume PDF"
          width="100%"
          height="100%"
          style={{ border: 'none', flexGrow: 1 }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .resume-header h1 {
            font-size: 2.5rem !important;
            letter-spacing: -1px !important;
          }
          .pdf-viewer-container {
            height: 60vh !important;
            min-height: 400px !important;
          }
          .hide-mobile {
            display: none !important;
          }
          .show-mobile {
            display: inline !important;
          }
          .pdf-actions {
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;

