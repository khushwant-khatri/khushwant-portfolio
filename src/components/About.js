import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__left reveal-left">
          <div className="section-label">
            <span>{"// 01"}</span>
            <span>About</span>
          </div>
          <h2 className="about__heading">
            Building the web,
            <br />
            <span className="accent-text">pixel by pixel.</span>
          </h2>
          <div className="about__card">
            <div className="about__card-inner">
              <div className="about__avatar">
                <span className="about__avatar-initials">KK</span>
                <div className="about__avatar-ring" />
              </div>
              <div className="about__info">
                <p className="about__name">Khushwant Khatri</p>
                <p className="about__title">Frontend Developer</p>
                <p className="about__location">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.57 7.93 1 6 1ZM6 6C5.17 6 4.5 5.33 4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.33 6.83 6 6 6Z"
                      fill="currentColor"
                    />
                  </svg>
                  Sirohi, Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about__right reveal-right">
          <p className="about__bio">
            I'm a Frontend Developer with <strong>3 years of experience</strong>{" "}
            building scalable, high-performance web applications. My journey
            started in Mechanical Engineering, but I found my true passion in
            crafting beautiful digital experiences.
          </p>
          <p className="about__bio">
            At <strong>Options Scalping</strong>, I built real-time financial
            dashboards with Vue 3 that process and visualize complex market data
            at scale. Before that, at <strong>OTPLess</strong>, I owned
            end-to-end frontend development of a SaaS authentication platform
            using React.js.
          </p>
          <p className="about__bio">
            I obsess over performance, clean architecture, and delivering
            experiences that feel effortless to users.
          </p>

          <div className="about__details">
            {[
              {
                label: "Email",
                value: "khatri.khush1998@gmail.com",
                href: "mailto:khatri.khush1998@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/khushwant-khatri-kk1998",
                href: "https://linkedin.com/in/khushwant-khatri-kk1998",
              },
              {
                label: "Phone",
                value: "+91 99834 40802",
                href: "tel:+919983440802",
              },
              {
                label: "Education",
                value: "B.Tech Mechanical — GIT Jaipur",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="about__detail">
                <span className="about__detail-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="about__detail-value about__detail-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="about__detail-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
