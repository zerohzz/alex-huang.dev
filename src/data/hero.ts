export const HERO = {
  name: "Alex Huang",
  // Displayed as "alex-huang" (default color) + ".dev" (accent color)
  logoPrefix: "alex-huang",
  logoSuffix: ".dev",
  roles: [
    "Salesforce Developer",
    "Technical Consultant",
    "Full Stack Engineer",
    "Functional BA"
  ],
  location: "Melbourne, Australia",
  // Used in the hero section description (also reflected in SITE.desc in config.ts)
  bio: "Senior Salesforce Developer with 7+ years across consulting and in-house delivery. Currently sole developer for a global entertainment company — owning LWC engineering, Apex, CI/CD, and integrations across 60+ venues in AU, NZ, and US.",
} as const;
