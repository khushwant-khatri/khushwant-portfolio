import React, { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Frontend Developer",
  "React.js Expert",
  "Vue 3 Developer",
  "UI Engineer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Noise overlay */}
      <div className="hero__noise" />

      {/* Grid bg */}
      <div className="hero__grid" />

      {/* Floating orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      {/* Content */}
      <div className="hero__content">
        <div
          className="hero__eyebrow animate-fade-up"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Available for work</span>
          <span className="hero__eyebrow-dot" />
        </div>

        <h1
          className="hero__name animate-fade-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Khushwant
          <br />
          <span className="hero__name-outline">Khatri</span>
        </h1>

        <div
          className="hero__role animate-fade-up"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="hero__role-prefix">{"// "}</span>
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor-blink">|</span>
        </div>

        <p
          className="hero__desc animate-fade-up"
          style={{
            animationDelay: "0.8s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          3 years crafting high-performance web apps with React.js & Vue 3.
          <br />
          Obsessed with clean code and delightful user interfaces.
        </p>

        <div
          className="hero__actions animate-fade-up"
          style={{
            animationDelay: "1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <button
            className="hero__btn hero__btn--primary"
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a
            href="mailto:khatri.khush1998@gmail.com"
            className="hero__btn hero__btn--outline"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="hero__stats animate-fade-up"
          style={{
            animationDelay: "1.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {[
            { num: "3+", label: "Years Exp" },
            { num: "2", label: "Companies" },
          ].map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero__scroll animate-fade-in"
        style={{
          animationDelay: "1.5s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <div className="hero__scroll-line" />
        <span>SCROLL</span>
      </div>

      {/* Marquee */}
      <div className="hero__marquee">
        <div className="hero__marquee-track">
          {Array(4)
            .fill([
              "React.js",
              "Vue 3",
              "TypeScript",
              "Redux",
              "Pinia",
              "JavaScript",
              "CSS",
              "REST APIs",
              "ECharts",
            ])
            .flat()
            .map((item, i) => (
              <span key={i} className="hero__marquee-item">
                {item} <span className="hero__marquee-sep">✦</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
