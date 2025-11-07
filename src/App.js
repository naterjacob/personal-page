import { useState } from 'react';
import './App.css';

const TAB_CONFIG = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
];

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'jnater@salmon.net',
    href: 'mailto:jnater@salmon.net',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jnater',
    href: 'https://www.linkedin.com/in/jnater',
  },
  {
    label: 'Phone',
    value: '(408) 464-6915',
    href: 'tel:+14084646915',
  },
  {
    label: 'Location',
    value: 'San Luis Obispo, CA',
  },
];

const PROJECT_CATEGORIES = [
  {
    id: 'cloud',
    title: 'Cloud + Platform Builds',
    description:
      'High-volume, customer-facing systems spanning AWS data lakes, caching layers, and reporting UX.',
    projects: [
      {
        name: 'Publisher Insights Platform',
        summary:
          'Own the SDLC for a data lake that tracks 100M+ objects with ~1M daily changes powering enterprise payments.',
        stack: 'SQS · AWS Glue · S3 · Lambda · Firehose',
      },
      {
        name: 'Payment Reporting UI',
        summary:
          'Partnered with PMs and customers to ship a modern UI adopted by 10K+ publishers generating $20M+ in sales.',
        stack: 'React · TypeScript · DynamoDB',
      },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & FPGA Systems',
    description: 'Low-level builds that blend firmware, digital design, and hardware debugging.',
    projects: [
      {
        name: 'Arcade on STM32',
        summary:
          'Implemented the NEC infrared protocol plus UART to deliver host/client arcade gameplay and Snake on bare metal.',
        stack: 'STM32 · C · UART · NEC IR',
      },
      {
        name: 'Pipelined RISC-V CPU',
        summary:
          'Five-stage pipeline with hazard mitigation, set-associative cache, and ultrasonic sensor I/O on FPGA.',
        stack: 'SystemVerilog · Vivado · RISC-V',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI + Research Experiments',
    description: 'Applied ML research to gameplay systems and automated difficulty balancing.',
    projects: [
      {
        name: 'Generative Level Builder',
        summary:
          'Used pretrained generative models to create multi-tier level layouts with tunable difficulty knobs.',
        stack: 'Python · PyTorch · AWS',
      },
      {
        name: 'Difficulty Balancer',
        summary:
          'Designed scoring algorithms to keep five difficulty tiers consistent across player journeys.',
        stack: 'Python · Data Viz · Analytics',
      },
    ],
  },
];

const EXPERIENCE = [
  {
    company: 'Amazon',
    role: 'Junior Software Development Engineer III',
    timeframe: 'Jan 2025 – Present',
    location: 'San Luis Obispo, CA',
    impact: [
      'Designed a high-volume data lake tracking 100M objects and ~1M daily changes using SQS, Glue, Firehose, and Lambda.',
      'Implemented a DynamoDB caching layer that eased load on authentication services and boosted throughput.',
      'Co-created a payment-reporting UI for 10K+ enterprise publishers generating $20M+ in sales.',
    ],
  },
  {
    company: 'Cal Poly, CPE 333 & EE 215',
    role: 'Teaching Assistant',
    timeframe: 'Jan 2025 – Present',
    location: 'San Luis Obispo, CA',
    impact: [
      'Mentored students building a five-stage RISC-V pipeline with hazard protection and caches in Vivado.',
      'Developed RISC-V test programs and labs covering dynamic circuit analysis, Laplace transforms, and filter design.',
    ],
  },
  {
    company: 'Ongawa',
    role: 'AI Development Intern',
    timeframe: 'Sep 2024 – Dec 2024',
    location: 'San Luis Obispo, CA',
    impact: [
      'Applied modern AI research and pretrained models to automate game-level generation.',
      'Delivered algorithms that generate five tuned difficulty tiers for granular player control.',
    ],
  },
];

const EDUCATION = {
  school: 'California Polytechnic State University, San Luis Obispo',
  degree: 'B.S. Computer Engineering, GPA 3.96',
  timeframe: 'Sep 2021 – Jun 2026',
  focus: 'Embedded systems, backend development, and AI applications.',
};

const SKILL_SETS = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'Kotlin', 'JavaScript/TypeScript', 'C', 'SystemVerilog', 'RISC-V'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'Visual Studio', 'Bash', 'AWS Suite', 'Firebase', 'STM32CubeIDE', 'Vivado'],
  },
  {
    title: 'Hardware & Protocols',
    items: [
      'STM32 & Arduino',
      'Oscilloscope',
      'Digital Multimeter',
      'DC & AC Power Supplies',
      'Waveform Generator',
      'FPGAs',
      'UART · I²C · SPI',
    ],
  },
];

const PRINCIPLES = [
  {
    title: 'Percussion Captionhead',
    detail: 'Arranging, leading, and coordinating the percussion package for Templeton High School Marching Band.',
  },
  {
    title: 'Visual Captionhead',
    detail: 'Designing and teaching drill and movement for Templeton High School Marching Band.',
  },
  {
    title: 'Competitive Excellence',
    detail: 'Fostering a culture of high achievement and continuous improvement within the ensemble. Creative design and execution to drive ensembles to success.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(TAB_CONFIG[0].id);

  const renderAbout = () => (
    <div className="about-grid">
      <div className="card depth">
        <p className="eyebrow">About Jacob</p>
        <h2>Computer Engineering student building dependable backend, embedded, and AI systems.</h2>
        <p>
        Computer Engineering student with strong experience in backend development, embedded systems,
         and AI applications. Proven success in building scalable Amazon data solutions, high-performance
         FPGA projects, and leading technical projects on customer-facing platforms.
        </p>
        <div className="stats-row">
          <div>
            <span className="stat-value">3.96</span>
            <span className="stat-label">Cal Poly GPA</span>
          </div>
        </div>
      </div>
      <div className="card principles">
        <p className="eyebrow">Performing Arts</p>
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
        <h3>Open to summer internships and select freelance builds.</h3>
        <p>
          Ideal fit for teams tackling data-intensive AWS workloads, embedded prototyping, or AI tooling for creative
          pipelines.
        </p>
        <a className="primary-link" href="mailto:jnater@salmon.net">
          Contact Jacob
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
            <h2>Pairing AWS-scale services with hands-on hardware teaching.</h2>
          </div>
          <a className="secondary-button" href="https://www.linkedin.com/in/jnater" target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((role) => (
            <article key={`${role.company}-${role.role}`} className="timeline-item">
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
        <div className="education-callout">
          <p className="eyebrow">Education</p>
          <h3>{EDUCATION.school}</h3>
          <p>
            {EDUCATION.degree} · {EDUCATION.timeframe}
          </p>
          <p className="text-muted">Focus: {EDUCATION.focus}</p>
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
          <h3>Let&apos;s collaborate</h3>
          <p>Available for internships, research collaborations, and prototyping engagements.</p>
          <a className="primary-link" href="mailto:jnater@salmon.net">
            Email Jacob
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
          <p className="eyebrow">Computer Engineering · Backend · Embedded · AI</p>
          <h1>Hi, I&apos;m Jacob Nater.</h1>
          <p className="lead">
            Computer Engineering student with hands-on AWS, embedded, and AI experience. I build scalable data systems,
            architect five-stage RISC-V pipelines, and mentor teams shipping production-ready experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="mailto:jnater@salmon.net">
              Get in Touch
            </a>
            <a className="ghost-link" href="https://www.linkedin.com/in/jnater" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="contact-row">
            {CONTACT_LINKS.map((contact) =>
              contact.href ? (
                <a
                  key={contact.label}
                  className="contact-chip"
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </a>
              ) : (
                <div key={contact.label} className="contact-chip contact-chip--static">
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="hero-highlight">
          <div>
            <span className="stat-value">Amazon</span>
            <span className="stat-label">Junior Software Developer</span>
          </div>
          <div>
            <span className="stat-value">Cal Poly TA</span>
            <span className="stat-label">CPE 333 & EE 215</span>
          </div>
          <div>
            <span className="stat-value">Templeton HS</span>
            <span className="stat-label">Percussion And Visual Captionhead</span>
          </div>
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
