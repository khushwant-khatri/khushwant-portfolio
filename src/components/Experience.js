import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 0,
    role: 'Frontend Developer',
    company: 'Options Scalping Pvt. Ltd.',
    period: 'Aug 2024 — Feb 2026',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    tech: ['Vue 3', 'Element Plus', 'ECharts', 'ApexCharts', 'TypeScript'],
    achievements: [
      'Delivered real-time, data-intensive dashboards using Vue 3 and modern UI libraries with high performance and scalability.',
      'Implemented interactive data visualizations using ECharts and ApexCharts to present complex financial and market data.',
      'Delivered OI Pulse — a capital market analytics dashboard achieving a 20% performance improvement.',
      'Built reusable and modular UI components to improve maintainability and reduce development time.',
      'Collaborated with backend teams to integrate RESTful APIs and optimize data flow.',
      'Improved code stability and minimized regression issues through structured debugging and refactoring.',
    ],
  },
  {
    id: 1,
    role: 'Software Development Engineer – I',
    company: 'OTPLess Pvt. Ltd.',
    period: 'Feb 2023 — Jun 2024',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    tech: ['React.js', 'Redux', 'JavaScript', 'REST APIs'],
    achievements: [
      'Built a SaaS dashboard for authentication and identity management using ReactJS.',
      'Owned end-to-end frontend development from requirement analysis to deployment.',
      'Designed optimized API integrations, reducing response times by nearly 20%.',
      'Solved high-impact UI and functional issues, improving user engagement and platform reliability.',
      'Participated in Agile ceremonies including sprint planning, reviews, and retrospectives.',
      'Participated in code reviews and followed coding standards to maintain code quality.',
    ],
  },
];

function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__header reveal">
          <div className="section-label">
            <span>// 03</span>
            <span>Experience</span>
          </div>
          <h2 className="experience__heading">
            Where I've <span className="accent-text">Worked</span>
          </h2>
        </div>

        <div className="experience__content reveal">
          {/* Tabs */}
          <div className="experience__tabs">
            {experiences.map((e) => (
              <button
                key={e.id}
                className={`experience__tab ${active === e.id ? 'experience__tab--active' : ''}`}
                onClick={() => setActive(e.id)}
              >
                <span className="experience__tab-company">{e.company}</span>
                <span className="experience__tab-period">{e.period}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="experience__panel" key={active}>
            <div className="experience__panel-header">
              <div>
                <h3 className="experience__role">
                  {exp.role}
                  <span className="experience__at"> @ </span>
                  <span className="experience__company-name">{exp.company}</span>
                </h3>
                <div className="experience__meta">
                  <span className="experience__period">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1"/>
                      <path d="M6 3.5V6L7.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                    {exp.period}
                  </span>
                  <span className="experience__location">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.57 7.93 1 6 1Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                    {exp.location}
                  </span>
                  <span className="experience__type">{exp.type}</span>
                </div>
              </div>
            </div>

            <div className="experience__tech">
              {exp.tech.map((t) => (
                <span key={t} className="experience__tech-tag">{t}</span>
              ))}
            </div>

            <ul className="experience__list">
              {exp.achievements.map((a, i) => (
                <li key={i} className="experience__item">
                  <span className="experience__item-icon">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education block */}
        <div className="education reveal">
          <div className="education__label">
            <span className="education__icon">🎓</span>
            Education
          </div>
          <div className="education__content">
            <div>
              <p className="education__degree">Bachelor of Technology — Mechanical Engineering</p>
              <p className="education__school">Global Institute of Technology, Jaipur, Rajasthan</p>
            </div>
            <span className="education__year">2016 – 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
