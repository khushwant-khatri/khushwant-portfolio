import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('khatri.khush1998@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: 'LinkedIn',
      handle: 'khushwant-khatri-kk1998',
      href: 'https://linkedin.com/in/khushwant-khatri-kk1998',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      handle: 'khatri.khush1998@gmail.com',
      href: 'mailto:khatri.khush1998@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      name: 'Phone',
      handle: '+91 99834 40802',
      href: 'tel:+919983440802',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__left reveal-left">
          <div className="section-label">
            <span>// 04</span>
            <span>Contact</span>
          </div>
          <h2 className="contact__heading">
            Let's build something<br />
            <span className="accent-text">great together.</span>
          </h2>
          <p className="contact__sub">
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hi — my inbox is always open.
          </p>

          <button className="contact__copy-btn" onClick={copyEmail}>
            <span className="contact__copy-email">khatri.khush1998@gmail.com</span>
            <span className="contact__copy-icon">
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="#e8ff47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              )}
            </span>
            <span className="contact__copy-label">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        <div className="contact__right reveal-right">
          <div className="contact__socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="contact__social"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="contact__social-icon">{s.icon}</span>
                <div className="contact__social-text">
                  <span className="contact__social-name">{s.name}</span>
                  <span className="contact__social-handle">{s.handle}</span>
                </div>
                <svg className="contact__social-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

          <div className="contact__availability">
            <span className="contact__availability-dot" />
            <span>Available for freelance & full-time roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
