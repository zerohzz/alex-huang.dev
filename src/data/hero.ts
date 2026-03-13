export const HERO = {
  name: "Alex Huang",
  // Displayed as "alex-huang" (default color) + ".dev" (accent color)
  logoPrefix: "alex-huang",
  logoSuffix: ".dev",
  roles: [
    "Salesforce Engineer",
    "Technical Consultant",
    "AI Integration Engineer",
    "Functional BA"
  ],
  location: "Melbourne, Australia",
  // Used in the hero section description (also reflected in SITE.desc in config.ts)
  bio: "Senior Engineer & Technical Consultant | 7+ Years | Salesforce · Apex · LWC · DevOps · AI Integration. End-to-end solution delivery specialist across public sector, healthcare, and enterprise environments. Expert in scalable solution architecture, Apex/LWC development, DevOps/CI/CD, and integration patterns — with a strong track record of transforming complex business requirements into production-ready systems.",
  // Structured bio for visual rendering in hero section
  tags: [
    "7+ Years",
    "Salesforce",
    "Apex",
    "LWC",
    "DevOps",
    "AI Integration",
  ],
  bullets: [
    "End-to-end solution delivery specialist across public sector, healthcare, and Entertainment industries.",
    "With a strong track record of transforming complex business requirements into production-ready systems.",
    "Fulfilled various roles such as technical consultant, senior developer, designer, and functional business analyst, consistently achieving impactful results.",
  ],
} as const;
