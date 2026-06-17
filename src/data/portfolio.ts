export const profile = {
  name: "Ram Kumar",
  title: "Java Architect",
  location: "Huntsville, TX",
  email: "bestdev007@proton.me",
  linkedin: "https://www.linkedin.com/in/ram-kumar-32b223149/",
  summary:
    "Java Architect with 13+ years of escalating responsibility across enterprise backend systems, microservices architecture, and cloud-deployed Spring Boot applications. One of fewer than 5% of engineers holding both Oracle Certified Master Java EE Enterprise Architect and AWS Certified Developer credentials simultaneously. Brings hands-on experience building scalable, distributed systems and a track record of clean, maintainable code across financial services, healthcare, and logistics domains.",
};

export const skillGroups = [
  {
    label: "Backend",
    skills: [
      "Java 8/11/17",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Event-Driven Architecture",
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
    label: "Data & Security",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "OAuth2 / JWT",
      "Application Security",
    ],
  },
  {
    label: "Quality & Frontend",
    skills: [
      "JUnit",
      "Mockito",
      "Test Automation",
      "Angular",
      "Full Stack Development",
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
    highlights: [
      "Defined Java backend architecture standards for enterprise microservices platforms serving Fortune-class client environments.",
      "Led a team of 8 engineers building Spring Boot services and React/Angular frontends in 2-week Agile sprints.",
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
    highlights: [
      "Built full stack apps with Spring Boot and Angular for financial services clients handling 1M+ daily events.",
      "Developed RESTful APIs consumed by 4 downstream applications, reducing integration turnaround from 14 to 6 days.",
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
    highlights: [
      "Built enterprise web applications with Spring Boot and Angular for healthcare and retail clients.",
      "Developed RESTful APIs wired to Angular UI components, cutting integration defects by ~35%.",
      "Integrated PostgreSQL and MySQL with query optimization improving page load times by 25%.",
      "Delivered 8 feature releases on schedule over 28 months in Scrum ceremonies with QA and UX teams.",
    ],
  },
  {
    role: "Java Backend Developer",
    company: "HubSpot",
    location: "Cambridge, MA",
    period: "Jul 2012 – Mar 2016",
    highlights: [
      "Developed Java backend services and RESTful APIs for logistics and finance apps with ~200K daily users.",
      "Designed relational schemas in Oracle and PostgreSQL; SQL optimization cut response times by 20%.",
      "Built asynchronous processing pipelines with Spring Boot scheduled tasks, reducing batch failures by ~60%.",
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
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
