import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "⟨/⟩",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Vue 3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    category: "State & Tools",
    icon: "⚙",
    skills: [
      { name: "Redux", level: 80 },
      { name: "Pinia", level: 80 },
      { name: "Git / GitHub", level: 80 },
      { name: "Postman", level: 90 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    category: "UI Libraries",
    icon: "✦",
    skills: [
      { name: "Material UI", level: 85 },
      { name: "Element Plus", level: 85 },
      { name: "PrimeVue", level: 70 },
      { name: "ECharts", level: 80 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

function SkillBar({ name, level }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.width = level + "%";
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <span className="skill-item__name">{name}</span>
        <span className="skill-item__level">{level}%</span>
      </div>
      <div className="skill-item__track">
        <div className="skill-item__bar" ref={barRef} style={{ width: 0 }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header reveal">
          <div className="section-label">
            <span>{"// 02"}</span>
            <span>Skills</span>
          </div>
          <h2 className="skills__heading">
            Technical <span className="accent-text">Arsenal</span>
          </h2>
          <p className="skills__sub">
            Technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="skill-group reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <span className="skill-group__title">{group.category}</span>
              </div>
              <div className="skill-group__skills">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tags section */}
        <div className="skills__tags reveal">
          {[
            "React.js",
            "Vue 3",
            "JavaScript",
            "TypeScript",
            "Redux",
            "Pinia",
            "ECharts",
            "ApexCharts",
            "Material UI",
            "Element Plus",
            "PrimeVue",
            "Git",
            "GitHub",
            "GitLab",
            "Postman",
            "Agile",
            "Asana",
            "REST APIs",
          ].map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
