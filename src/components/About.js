import React from 'react';

const stats = [
  { value: '100%', label: 'Commitment' },
  { value: '24/7', label: 'Monitoring' },
  { value: '0', label: 'Tolerance for Breaches' },
];

function About() {
  return (
    <section id="about" style={{
      padding: '6rem 2.5rem',
      background: '#0a0a0a',
    }}>
      <p style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
        {'// WHO WE ARE'}
      </p>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', color: '#e8e8e8' }}>
        About Sixtusphere
      </h2>
      <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1rem', maxWidth: '600px' }}>
        Sixtusphere is a cybersecurity agency built on discipline, precision, and deep technical expertise. We help businesses identify and eliminate security weaknesses before they become breaches.
      </p>
      <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1rem', maxWidth: '600px', marginBottom: '3rem' }}>
        From startups to enterprises, we deliver practical security solutions tailored to your specific environment and risk profile.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '300px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ borderLeft: '2px solid #00ff9d', paddingLeft: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00ff9d' }}>{s.value}</div>
            <div style={{ color: '#666', fontSize: '0.95rem', letterSpacing: '0.05em' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;