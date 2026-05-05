import React from 'react';
import { FiShield, FiSearch, FiGlobe, FiAlertTriangle } from 'react-icons/fi';

const services = [
  { icon: FiShield, title: 'Penetration Testing', desc: 'Simulated attacks to uncover vulnerabilities in your systems before real threats do.' },
  { icon: FiSearch, title: 'Security Audits', desc: 'Comprehensive review of your security posture, policies, and infrastructure.' },
  { icon: FiGlobe, title: 'Web Security', desc: 'In-depth assessment of web applications for OWASP Top 10 and beyond.' },
  { icon: FiAlertTriangle, title: 'Threat Monitoring', desc: 'Continuous monitoring and rapid response to emerging threats targeting your business.' },
];

function Services() {
  return (
    <section id="services" style={{ padding: '6rem 2.5rem', background: '#111111' }}>
      <p style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
        {'// WHAT WE DO'}
      </p>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '3rem', color: '#e8e8e8' }}>
        Our Services
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{
              padding: '2rem', border: '1px solid #1e1e1e', background: '#0a0a0a',
              transition: 'border-color 0.3s, transform 0.3s', cursor: 'default'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00ff9d'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ color: '#00ff9d', marginBottom: '1.2rem' }}><Icon size={28} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: '#e8e8e8' }}>{s.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;