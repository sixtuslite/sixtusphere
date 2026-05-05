import React, { useEffect, useState } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const full = 'Securing the Digital Frontier.';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2.5rem',
      background: 'radial-gradient(ellipse at 20% 50%, #0d1f1a 0%, #0a0a0a 70%)',
    }}>
      <p style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
        {'// CYBERSECURITY AGENCY'}
      </p>
      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
        {text}<span style={{ color: '#00ff9d' }}>_</span>
      </h1>
      <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
        We identify vulnerabilities before attackers do. Professional cybersecurity services for businesses that take security seriously.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#contact" style={{
          padding: '0.9rem 2rem',
          background: '#00ff9d',
          color: '#0a0a0a',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: '0.05em'
        }}>
          GET STARTED
        </a>
        <a href="#services" style={{
          padding: '0.9rem 2rem',
          border: '1px solid #1e1e1e',
          color: '#e8e8e8',
          textDecoration: 'none',
          letterSpacing: '0.05em'
        }}>
          OUR SERVICES
        </a>
      </div>
    </section>
  );
}

export default Hero;