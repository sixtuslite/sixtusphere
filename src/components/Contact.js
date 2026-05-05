import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 2.5rem', background: '#111111' }}>
      <p style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
        // GET IN TOUCH
      </p>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '3rem', color: '#e8e8e8' }}>
        Contact Us
      </h2>
      {sent ? (
        <div style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '1.1rem' }}>
          Message received. We will be in touch shortly._
        </div>
      ) : (
        <div style={{ maxWidth: '600px' }}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handle}
            style={{ width: '100%', padding: '0.9rem 1rem', background: '#111', border: '1px solid #1e1e1e', color: '#e8e8e8', fontSize: '1rem', marginBottom: '1rem', display: 'block' }}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handle}
            style={{ width: '100%', padding: '0.9rem 1rem', background: '#111', border: '1px solid #1e1e1e', color: '#e8e8e8', fontSize: '1rem', marginBottom: '1rem', display: 'block' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handle}
            rows={5}
            style={{ width: '100%', padding: '0.9rem 1rem', background: '#111', border: '1px solid #1e1e1e', color: '#e8e8e8', fontSize: '1rem', marginBottom: '1rem', display: 'block', resize: 'vertical' }}
          />
          <button
            onClick={submit}
            style={{ padding: '0.9rem 2.5rem', background: '#00ff9d', color: '#0a0a0a', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}
          >
            SEND MESSAGE
          </button>
        </div>
      )}
    </section>
  );
}

export default Contact;