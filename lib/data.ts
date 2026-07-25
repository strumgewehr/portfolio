export const profile = {
  name: "Garv Sethi",
  tagline: "Building intelligent systems for cybersecurity, automation, and AI.",
  location: "Jammu, India",
  email: "sethi.garv2006@gmail.com",
  github: "https://github.com/strumgewehr",
  linkedin: "https://www.linkedin.com/in/garv-sethi-932bbb328/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I work at the intersection of AI systems and cybersecurity — designing prompt-driven analysis pipelines, and building the forensic and backend infrastructure needed to make that intelligence usable under real investigative pressure.",
    "My interest isn't in AI as a novelty layer. It's in what happens when a language model is given a well-scoped, well-documented problem: log correlation, evidence triage, incident reconstruction. That's where the engineering gets interesting — the prompting, the context construction, the failure modes at the edges.",
    "Most of my work lives at the boundary of two disciplines that don't usually share a desk: applied AI tooling and hands-on digital forensics. I like it there.",
  ],
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Cybersecurity Intern",
    org: "Indian Institute of Technology Jammu (IIT Jammu)",
    period: "June 2026 — August 2026",
    bullets: [
      "Performed digital forensics and incident response (DFIR) across Windows and Linux environments, analyzing disk images, memory dumps, and system logs to identify indicators of compromise.",
      "Conducted network traffic analysis and threat hunting using Wireshark and Nmap, identifying anomalous behavior and mapping potential attack vectors across monitored environments.",
      "Assisted faculty-guided vulnerability assessment and security testing, applying static and dynamic analysis techniques with tools including Volatility and Autopsy.",
      "Automated recurring security workflows — log parsing, IOC extraction, report generation — using Python scripts to reduce manual analysis time.",
      "Authored technical documentation and investigation reports for faculty and research staff, contributing to a reproducible incident-analysis methodology.",
      "Collaborated with a team of interns and researchers on live cybersecurity problems using Git-based version control and secure engineering practices.",
    ],
  },
  {
    role: "QA Tester",
    org: "Test.io",
    period: "2026 — Present",
    bullets: [
      "Executed manual testing of web and mobile applications across multiple devices, browsers, and operating systems as part of Test.io's freelance QA network.",
      "Identified, documented, and reported functional, UI/UX, compatibility, and regression defects following professional bug-reporting standards.",
      "Performed exploratory, usability, smoke, and regression testing to surface issues ahead of release cycles.",
      "Produced detailed bug reports with clear reproduction steps, screenshots, logs, and severity assessments, enabling efficient defect resolution.",
      "Collaborated with international testing teams within Agile/SDLC workflows to reproduce issues and validate software fixes.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Redoubt Ops",
    subtitle: "Network Security Incident Reconstruction & Digital Forensics Platform",
    description:
      "An AI-assisted SOC platform that ingests logs from multiple sources, correlates evidence, and reconstructs incident timelines. Prompt-engineered LLM workflows summarize findings and flag high-risk artifacts, surfaced through a real-time investigation dashboard.",
    tech: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "React", "TypeScript", "Docker", "LLMs"],
    github: "https://github.com/strumgewehr/REDOUBT-OPS",
    featured: true,
  },
  {
    name: "EGRET",
    subtitle: "News Sentiment Intelligence Platform",
    description:
      "A full-stack sentiment intelligence platform aggregating multi-source news and applying NLP-based scoring to surface geopolitically and market-relevant signals, filterable by topic, region, and source.",
    tech: ["Python", "FastAPI", "NLP", "REST API"],
    github: "https://github.com/strumgewehr/EGRET",
  },
  {
    name: "SVAS",
    subtitle: "Soldier Vital Alert System",
    description:
      "An IoT-based real-time health monitoring system that captures vital signs from field sensors and generates alerts on critical deviations, built for low-latency field deployment.",
    tech: ["Python", "IoT", "Real-Time Alerting"],
    github: "https://github.com/strumgewehr/HEADSTRONG.SVAS",
  },
  {
    name: "ROUGE",
    subtitle: "Anonymous Secure Chat Application",
    description:
      "A privacy-focused chat application supporting anonymous, encrypted real-time messaging and secure file sharing, with an authentication strategy that minimizes persistent identity exposure.",
    tech: ["Python", "WebSockets", "Authentication"],
    github: "https://github.com/strumgewehr/Rouge",
  },
  {
    name: "Oviol",
    subtitle: "Sentiment Analysis Engine",
    description:
      "A machine learning pipeline for text sentiment classification — preprocessing, feature extraction, model evaluation — benchmarked across multiple classifiers for accuracy and precision.",
    tech: ["Python", "Scikit-learn", "NLP"],
    github: "https://github.com/strumgewehr/Oviol",
  },
];

export const skills = {
  "AI Tools & Prompt Engineering": ["Prompt Engineering", "LLMs", "LangChain", "Generative AI", "Claude", "Gemini"],
  "Cybersecurity": ["Digital Forensics", "Incident Response", "Network Security", "Threat Hunting", "Wireshark", "Nmap", "Volatility", "Autopsy"],
  "Programming": ["Python", "JavaScript", "TypeScript", "SQL"],
  "Backend": ["FastAPI", "REST APIs", "Celery", "Redis"],
  "Developer Tools": ["Git", "GitHub", "Docker", "Cursor"],
  "Frameworks": ["React", "Next.js", "Tailwind CSS"],
};
