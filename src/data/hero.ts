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
  bio: "Senior Salesforce Engineer & Technical Consultant with 7+ years across public sector, healthcare, and enterprise environments. End-to-end solution delivery specialist — Apex, LWC, DevOps/CI/CD, AI integration, and scalable solution architecture across 60+ venues in AU, NZ, and US.",
} as const;
