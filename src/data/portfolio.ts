export const profile = {
  name: "Ram Kumar",
  title: "Full Stack Java Developer",
  subtitle: "Java Architect & Technical Lead",
  location: "Huntsville, TX",
  email: "bestdev007@proton.me",
  linkedin: "https://www.linkedin.com/in/ram-kumar-32b223149/",
  summary:
    "Full Stack Java Developer with 13+ years building end-to-end enterprise applications — from Angular and React frontends to Spring Boot microservices and cloud deployments. Equally comfortable wiring REST APIs to UI components, leading teams of 8 engineers, and defining architecture standards for Fortune-class clients. One of fewer than 5% of engineers holding both Oracle Certified Master Java EE Enterprise Architect and AWS Certified Developer credentials. Proven across financial services, healthcare, and logistics with clean code, strong test coverage, and reliable delivery.",
};

export const fullStackLayers = [
  {
    layer: "Frontend",
    color: "cyan",
    items: ["Angular", "React", "TypeScript", "HTML5 / CSS3", "Reactive Forms", "State Management"],
  },
  {
    layer: "Backend",
    color: "emerald",
    items: ["Java 8/11/17", "Spring Boot", "REST APIs", "Microservices", "Spring Security", "Spring AI"],
  },
  {
    layer: "Data & Messaging",
    color: "violet",
    items: ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "Kafka", "Event-Driven Architecture"],
  },
  {
    layer: "Cloud & Delivery",
    color: "amber",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD · GitHub Actions"],
  },
];

export const fullStackHighlights = [
  {
    title: "End-to-end ownership",
    description:
      "Builds complete features from Angular/React UI through Spring Boot APIs to database and deployment — not just backend handoffs.",
  },
  {
    title: "API-to-UI integration",
    description:
      "Developed RESTful APIs wired directly to frontend components, cutting integration defects by ~35% and turnaround from 14 to 6 days.",
  },
  {
    title: "Full test coverage",
    description:
      "JUnit & Mockito for services, Karma/Jasmine and React Testing Library for UI — 90% coverage on every pull request.",
  },
  {
    title: "Modern + enterprise",
    description:
      "Led teams shipping React/Angular frontends alongside containerized Spring Boot services on AWS EKS and GCP GKE.",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "HTML5 / CSS3",
      "Reactive Forms",
      "Client-side Routing",
      "State Management",
      "React Testing Library",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Java 8/11/17",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Spring Security",
      "OAuth2 / JWT",
      "Kafka",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    label: "Data & Quality",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "MySQL",
      "JUnit",
      "Mockito",
      "Test Automation",
      "Agile / Scrum",
    ],
  },
];

export const experiences = [
  {
    role: "Java Architect / Technical Lead",
    company: "Technology Rivers",
    location: "Remote",
    period: "Jul 2022 – Apr 2026",
    stack: ["Spring Boot", "React", "Angular", "AWS EKS", "GCP GKE"],
    highlights: [
      "Led a team of 8 engineers building Spring Boot services and React/Angular frontends in 2-week Agile sprints.",
      "Defined Java backend architecture standards for enterprise microservices platforms serving Fortune-class client environments.",
      "Architected an AI Agent prototype with embeddings, vector DB retrieval, and Spring Boot APIs — reducing document search time by ~50%.",
      "Deployed containerized microservices on AWS EKS and GCP GKE with high-availability configurations.",
      "Introduced CI/CD pipelines across 3 product lines, cutting release cycle time by 40%.",
      "Optimized REST API response times by 30% through query tuning and caching strategy redesign.",
      "Integrated LLM capabilities via Spring AI and RAG patterns for developer productivity workflows.",
    ],
  },
  {
    role: "Senior Full Stack Java Developer",
    company: "Heroku",
    location: "San Francisco, CA",
    period: "Sep 2018 – Jun 2022",
    stack: ["Spring Boot", "Angular", "React", "AWS ECS", "Docker"],
    highlights: [
      "Built full stack apps with Spring Boot and Angular for financial services clients handling 1M+ daily events.",
      "Developed RESTful APIs consumed by 4 downstream frontend applications, reducing integration turnaround from 14 to 6 days.",
      "Zero unauthorized access incidents over 4 years via JWT authentication and Spring Security RBAC.",
      "Migrated 3 legacy monoliths to microservices, improving scalability and reducing deployment risk.",
      "Raised test coverage to 90% with JUnit, Mockito, and React Testing Library on every pull request.",
      "Containerized services with Docker and deployed on AWS ECS, with EKS/GKE for high-availability.",
    ],
  },
  {
    role: "Full Stack Java Developer",
    company: "Heroku",
    location: "San Francisco, CA",
    period: "Apr 2016 – Aug 2018",
    stack: ["Spring Boot", "Angular", "PostgreSQL", "MySQL"],
    highlights: [
      "Built enterprise web applications with Spring Boot backend and Angular frontend for healthcare and retail clients.",
      "Developed RESTful APIs wired to Angular UI components, cutting integration defects by ~35%.",
      "Implemented reactive forms, client-side routing, and state management in Angular to HTML5/CSS3 standards.",
      "Integrated PostgreSQL and MySQL with query optimization improving page load times by 25%.",
      "Delivered 8 feature releases on schedule over 28 months in Scrum ceremonies with QA and UX teams.",
    ],
  },
  {
    role: "Java Backend Developer",
    company: "HubSpot",
    location: "Cambridge, MA",
    period: "Jul 2012 – Mar 2016",
    stack: ["Java", "Spring Boot", "Oracle", "PostgreSQL"],
    highlights: [
      "Developed Java backend services and RESTful APIs for logistics and finance apps with ~200K daily users.",
      "Designed relational schemas in Oracle and PostgreSQL; SQL optimization cut response times by 20%.",
      "Built asynchronous processing pipelines with Spring Boot scheduled tasks, reducing batch failures by ~60%.",
      "Partnered with frontend teams on API contracts and sprint planning for seamless UI integration.",
    ],
  },
];

export const education = {
  school: "The University of Texas at Austin",
  degree: "Bachelor of Science in Computer Science",
  period: "Sep 2008 – Jun 2012",
  location: "Austin, TX",
};

export const certifications = [
  "Oracle Certified Professional: Java SE 8 Programmer II",
  "Oracle Certified Master: Java EE Enterprise Architect",
  "Microsoft Certified: Azure Fundamentals",
  "AWS Certified Developer – Associate",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Full Stack", href: "#fullstack" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
