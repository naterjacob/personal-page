import { useState } from 'react';
import './App.css';

const TAB_CONFIG = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
];

const PROJECT_CATEGORIES = [
  {
    id: 'client',
    title: 'Client Partnerships',
    description: 'High-impact builds delivered for startups and internal innovation teams.',
    projects: [
      {
        name: 'Nova Wealth',
        summary: 'Crafted a modern client portal with analytics, advisory workflows, and a modular component system.',
        stack: 'React, TypeScript, Node, AWS',
      },
      {
        name: 'Pulse Logistics',
        summary: 'Launched a dispatch intelligence dashboard that improved fleet utilization by 18% within one quarter.',
        stack: 'Next.js, D3, WebSockets',
      },
    ],
  },
  {
    id: 'personal',
    title: 'Product Experiments',
    description: 'Independent explorations that sharpen my craft and test new ideas.',
    projects: [
      {
        name: 'Forma Studio',
        summary: 'A design system starter with accessible foundations, theming, and documentation baked in.',
        stack: 'Storybook, Styled Components, Vite',
      },
      {
        name: 'Runway Notes',
        summary: 'Lightweight research tracker for teams to align insights with OKRs and milestones.',
        stack: 'Vue, Supabase, Tailwind',
      },
    ],
  },
  {
    id: 'lab',
    title: 'R&D / Labs',
    description: 'Deep dives into emerging tech to keep me curious and sharp.',
    projects: [
      {
        name: 'Cortex',
        summary: 'Prototype interface for orchestrating multi-LLM agents around design deliverables.',
        stack: 'React, LangChain, FastAPI',
      },
      {
        name: 'Horizon HUD',
        summary: 'Gesture-driven AR heads-up display exploration, focused on low-latency telemetry.',
        stack: 'Unity, C#, Azure Spatial Anchors',
      },
    ],
  },
];

const EXPERIENCE = [
  {
    company: 'Northwind Studio',
    role: 'Lead Product Engineer',
    timeframe: '2021 — Present',
    impact: [
      'Scaled design system used across 12 product squads.',
      'Partnered with research + strategy to ship two 0→1 products in 9 months.',
    ],
  },
  {
    company: 'Fieldline Labs',
    role: 'Senior Front-End Engineer',
    timeframe: '2018 — 2021',
    impact: [
      'Introduced performance budgets that reduced bundle size by 42%.',
      'Led accessibility initiative achieving WCAG 2.1 AA compliance.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Product Designer & Developer',
    timeframe: '2014 — 2018',
    impact: [
      'Delivered 25+ bespoke sites / apps for early-stage founders.',
      'Built repeatable discovery and delivery playbooks for cross-discipline teams.',
    ],
  },
];

const SKILL_SETS = [
  {
    title: 'Core Stack',
    items: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Next.js'],
  },
  {
    title: 'Product Craft',
    items: ['Design Systems', 'UX Writing', 'Rapid Prototyping', 'Accessibility'],
  },
  {
    title: 'Ways of Working',
    items: ['Technical Leadership', 'Roadmapping', 'Fractional Partnerships', 'Workshops'],
  },
];

const PRINCIPLES = [
  {
    title: 'Build with clarity',
    detail: 'Every pixel, component, and line of copy earns its place by supporting the outcome.',
  },
  {
    title: 'Prototype early',
    detail: 'Ideas land faster when users can click, swipe, or tap through the experience.',
  },
  {
    title: 'Measure what matters',
    detail: 'Pair qualitative research with the right metrics to keep teams honest and inspired.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(TAB_CONFIG[0].id);

  const renderAbout = () => (
    <div className="about-grid">
      <div className="card depth">
        <p className="eyebrow">About Me</p>
        <h2>Fractional product partner turning bold ideas into polished launches.</h2>
        <p>
          I blend product strategy, UX design, and front-end engineering to help modern teams move
          from pitch decks to shipped experiences. I focus on clarity, inclusive interactions, and
          thoughtful systems that scale.
        </p>
        <div className="stats-row">
          <div>
            <span className="stat-value">12+</span>
            <span className="stat-label">Years shipping</span>
          </div>
          <div>
            <span className="stat-value">30</span>
            <span className="stat-label">Teams partnered</span>
          </div>
          <div>
            <span className="stat-value">5</span>
            <span className="stat-label">Design systems</span>
          </div>
        </div>
      </div>
      <div className="card principles">
        <p className="eyebrow">Guiding Principles</p>
        <ul>
          {PRINCIPLES.map((principle) => (
            <li key={principle.title}>
              <strong>{principle.title}</strong>
              <p>{principle.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="card availability">
        <p className="eyebrow">Availability</p>
        <h3>Currently booking projects for Q3</h3>
        <p>
          Ideal for founders, product orgs, or agencies that need a senior hand leading 0→1 builds or
          leveling up existing experiences.
        </p>
        <a className="primary-link" href="mailto:hello@studiojane.com">
          Let&apos;s Collaborate
        </a>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="projects-stack">
      {PROJECT_CATEGORIES.map((category) => (
        <section key={category.id} className="card project-category">
          <div className="category-header">
            <p className="eyebrow">{category.title}</p>
            <p>{category.description}</p>
          </div>
          <div className="project-grid">
            {category.projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-headline">
                  <h3>{project.name}</h3>
                  <span>{project.stack}</span>
                </div>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );

  const renderResume = () => (
    <div className="resume-grid">
      <section className="card">
        <div className="resume-header">
          <div>
            <p className="eyebrow">Experience Snapshot</p>
            <h2>Partnering end-to-end from discovery to launch.</h2>
          </div>
          <a className="secondary-button" href="https://example.com/resume.pdf" target="_blank" rel="noreferrer">
            Download PDF
          </a>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((role) => (
            <article key={role.company} className="timeline-item">
              <div>
                <h3>{role.role}</h3>
                <span>{role.company}</span>
              </div>
              <span className="timeframe">{role.timeframe}</span>
              <ul>
                {role.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="card skills-card">
        <p className="eyebrow">Toolkit</p>
        <div className="skills-grid">
          {SKILL_SETS.map((set) => (
            <div key={set.title}>
              <h4>{set.title}</h4>
              <ul>
                {set.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cta-panel">
          <h3>Need a product partner?</h3>
          <p>Happy to chat about fractional roles, advisory, or quick discovery sprints.</p>
          <a className="primary-link" href="https://cal.com">
            Schedule Intro
          </a>
        </div>
      </section>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'projects':
        return renderProjects();
      case 'resume':
        return renderResume();
      case 'about':
      default:
        return renderAbout();
    }
  };

  return (
    <div className="app-shell">
      <header className="hero card depth">
        <div>
          <p className="eyebrow">Product Designer × Front-End Engineer</p>
          <h1>Hi, I&apos;m Jane Taylor.</h1>
          <p className="lead">
            I help lean teams design, build, and launch premium digital products with the polish of
            an in-house crew.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="mailto:hello@studiojane.com">
              Start a Project
            </a>
            <a className="ghost-link" href="https://www.linkedin.com">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-highlight">
          <div>
            <span className="stat-value">3</span>
            <span className="stat-label">active builds</span>
          </div>
          <div>
            <span className="stat-value">92%</span>
            <span className="stat-label">repeat partners</span>
          </div>
          <p>Currently collaborating with fintech, mobility, and health tech teams.</p>
        </div>
      </header>

      <nav className="tabs">
        {TAB_CONFIG.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="tab-content">{renderActiveTab()}</section>
    </div>
  );
}

export default App;
