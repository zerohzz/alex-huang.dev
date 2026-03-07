export const EXPERIENCE = [
  {
    title: "Senior Salesforce Developer",
    company: "Fun Lab",
    companyUrl: "#",
    linkedinUrl: "https://www.linkedin.com/company/funlab-pty-ltd",
    location: "Sydney, Australia",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      "Sole in-house Salesforce developer for a global entertainment company (Strike Bowling, Holey Moley, 60+ venues across AU, NZ, US) — full ownership of platform architecture, engineering, QA, CI/CD, and post-deployment support.",
      "Architected an enterprise-grade 8-step LWC function-booking wizard orchestrating real-time API calls across 14+ sub-components — primary revenue interface across all brands and regions.",
      "Delivered greenfield US tax compliance via AvaTax integration (Asynchronous Apex) for 8 US venues, enabling compliant invoicing and Conga document generation from day one.",
      "Designed and maintained Azure DevOps YAML CI/CD pipelines with SFDX Git Delta, maintaining a fortnightly Agile release cadence (~109 deployment commits).",
      "Independently resolved 171+ production service requests and incidents across 26 months (525 commits), covering hotfixes, architectural decisions, and multi-region platform resilience.",
      "Built sandbox refresh automation framework (RemoteSiteSettingsDeployUtil, RefreshUtilities) to eliminate manual post-refresh misconfigurations across Named Credentials, integration URLs, and payment gateway keys.",
    ],
  },
  {
    title: "Consultant / Salesforce Developer",
    company: "Deloitte Digital",
    companyUrl: "#",
    linkedinUrl: "https://www.linkedin.com/company/deloitte-digital",
    location: "Sydney – Melbourne, Australia",
    start: "Mar 2021",
    end: "Jun 2023",
    bullets: [
      "Delivered enterprise Salesforce solutions for public sector and health clients across three major engagements: NSW Police Force, WA Health, and ACH Group.",
      "NSW Police Force: Joined as lead developer on LWC digital form migration from paper — deployed 180+ components to an Experience Cloud community portal, integrating Google reCAPTCHA and Address Lookup.",
      "WA Health VMS: Designed and built User Provisioning automation reducing manual effort from 23 to 3 minutes per account. Developed Apex Email Service handler, 7 Flows, and Permission Set Groups for COVID-19 vaccine management system.",
      "ACH Group: Full lifecycle participation (Mobilisation through Go-Live) — workshops, data migration via Salesforce Data Loader, system testing, defect triage.",
      "Ran client workshops and playback sessions; translated business requirements into user stories and acceptance criteria across all engagements.",
    ],
  },
  {
    title: "Technical Consultant / Microsoft Developer",
    company: "Visible Insights",
    companyUrl: "#",
    linkedinUrl: "https://www.linkedin.com/company/visible-insights",
    location: "Sydney, Australia",
    start: "Jul 2018",
    end: "Feb 2021",
    bullets: [
      "Served as main developer and solution architect for multiple LiveTiles & SharePoint intranet projects across enterprise clients.",
      "Developed Power BI and Excel data visualisation dashboards integrated with client project data.",
      "Implemented Microsoft Project & Portfolio Management solutions for large organisations, providing training and ongoing support.",
      "Delivered solutions across SharePoint, Office 365, Project Online, LiveTiles, Power BI, PowerApps, and Power Automate.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "LWC Function Booking Wizard",
    context: "Fun Lab — In-House",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      "Architected an enterprise-grade 8-step Lightning Web Component wizard orchestrating 14+ sub-components with real-time API integration.",
      "Serves as the primary revenue interface for function creation and editing across all brands and regions (AU, NZ, US).",
      "Integrated with AvaTax (US tax), Stripe/AAkPay (payments), and Funhouse proprietary REST API.",
    ],
    tags: ["LWC", "Apex", "REST API", "AvaTax", "Stripe"],
    link: null,
    blogSlug: "lwc-booking-wizard-funlab",
  },
  {
    name: "US Tax Compliance (AvaTax Integration)",
    context: "Fun Lab — Greenfield",
    start: "2024",
    end: "Present",
    bullets: [
      "Implemented asynchronous Queueable Apex tax calculations via AvaTax for 8 US venues.",
      "Automated 20% service charge recalculations on OLI changes and tax-exempt zeroing logic.",
      "Deployed real-time AvaTax readiness LWC, enabling compliant invoicing and Conga document generation from day one.",
    ],
    tags: ["Apex", "AvaTax", "Queueable", "LWC", "Conga"],
    link: null,
    blogSlug: "avatax-us-tax-compliance",
  },
  {
    name: "NSW Police Force — Form Digital Transformation",
    context: "Deloitte Digital (Client: NSW Police Force)",
    start: "Dec 2022",
    end: "Apr 2023",
    bullets: [
      "Digitised the paper-based Public Assembly notice form into a Salesforce Experience Cloud community portal using LWC.",
      "Integrated Google reCAPTCHA and Address Lookup components; deployed 180+ metadata components.",
      "Led as main developer: feature branches, pull requests, smoke & shakedown testing, and demo workshops.",
    ],
    tags: ["LWC", "Experience Cloud", "Change Sets", "Public Sector"],
    link: null,
    blogSlug: "nsw-police-form-digitalisation",
  },
  {
    name: "WA Health — Vaccine Management System",
    context: "Deloitte Digital (Client: WA Health)",
    start: "Jan 2022",
    end: "Aug 2022",
    bullets: [
      "Built User Provisioning automation reducing manual effort from 23 minutes to 3 minutes per user account.",
      "Developed Apex Email Service handler, 7 Flows, and Permission Set Groups for COVID-19 vaccine management.",
      "Delivered CI/CD via feature branches and pull requests; ran client workshops and playback sessions.",
    ],
    tags: ["Apex", "Flows", "Email Service", "DevOps", "Healthcare"],
    link: null,
    blogSlug: "wa-health-vaccine-management",
  },
];

// Categorised skill groups — used for the resume Skills section
export const SKILL_GROUPS = [
  {
    title: "Key Skills",
    skills: [
      "Apex",
      "Lightning Web Components",
      "SOQL",
      "Flow Builder",
      "Asynchronous Apex",
      "REST API",
      "CI/CD",
      "Solution Architecture",
    ],
  },
  {
    title: "Platforms",
    skills: [
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
      "Salesforce Marketing Cloud",
      "SFMC Journey Builder",
    ],
  },
  {
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SOQL",
      "SQL",
      "Python",
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      "Azure DevOps",
      "SFDX Git Delta",
      "Salesforce CLI",
      "Git",
      "Playwright",
      "Jest",
      "Conga Composer",
      "Conga Sign",
      "Jira",
      "Visual Studio Code",
      "Claude Code",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Data & Integrations",
    skills: [
      "AvaTax",
      "Stripe",
      "Named Credentials",
      "OAuth 2.0",
      "JWT",
      "Custom Metadata Types",
      "Sandbox Management",
      "Salesforce Data Loader",
    ],
  },
] as const;

// Flat SKILLS list derived from SKILL_GROUPS — used for the 3D sphere
export const SKILLS = SKILL_GROUPS.flatMap(g => [...g.skills]);

export const EDUCATION = [
  {
    degree: "Master of Business Information System",
    university: "Monash University",
    universityUrl: "https://www.monash.edu/",
    years: "2017 — 2018",
    location: "Melbourne, Australia",
  },
  {
    degree: "Bachelor of Computer Science",
    university: "Monash University",
    universityUrl: "https://www.monash.edu/",
    years: "2014 — 2016",
    location: "Melbourne, Australia",
  },
];

export const CERTS = [
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    issued: "2022",
    credentialUrl: "#",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    issued: "2022",
    credentialUrl: "#",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    issued: "2023",
    credentialUrl: "#",
  },
  {
    name: "Salesforce Certified Business Analyst",
    issuer: "Salesforce",
    issued: "2023",
    credentialUrl: "#",
  },
  {
    name: "Salesforce Certified Associate",
    issuer: "Salesforce",
    issued: "2023",
    credentialUrl: "#",
  },
  {
    name: "Trailhead Ranger",
    issuer: "Salesforce",
    issued: "2022",
    credentialUrl: "https://trailblazer.salesforce.com/",
  },
  {
    name: "MS-339: Managing Microsoft SharePoint Server",
    issuer: "Microsoft",
    issued: "2020",
    credentialUrl: "#",
  },
  {
    name: "MS-347: Enabling Office 365 Services",
    issuer: "Microsoft",
    issued: "2020",
    credentialUrl: "#",
  },
  {
    name: "MS-348: Managing Projects Microsoft PPM",
    issuer: "Microsoft",
    issued: "2019",
    credentialUrl: "#",
  },
  {
    name: "MS-778: Analyzing and Visualizing Data with Power BI",
    issuer: "Microsoft",
    issued: "2019",
    credentialUrl: "#",
  },
];
