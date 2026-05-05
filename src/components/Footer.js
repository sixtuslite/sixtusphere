import React from 'react';
import { FiMail, FiPhone, FiTwitter } from 'react-icons/fi';

function Footer() {
  return (
    <footer style={{
      padding: '3rem 2.5rem',
      background: '#0a0a0a',
      borderTop: '1px solid #1e1e1e',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '2rem'
    }}>
      <div>
        <span style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '1.2rem' }}>
          SIXTUSPHERE
        </span>
        <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Securing the Digital Frontier.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <a href="mailto:sixtuslite@gmail.com" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00ff9d'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}>
          <FiMail size={14} /> sixtuslite@gmail.com
        </a>
        <a href="tel:+2349112511562" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00ff9d'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}>
          <FiPhone size={14} /> +2349112511562
        </a>
        <a href="https://x.com/Sixtus_Lite" target="_blank" rel="noreferrer" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00ff9d'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}>
          <FiTwitter size={14} /> @Sixtus_Lite
        </a>
      </div>
      <p style={{ color: '#333', fontSize: '0.8rem', fontFamily: 'Share Tech Mono' }}>
        © 2025 Sixtusphere. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;