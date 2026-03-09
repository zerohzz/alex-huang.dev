export const SITE = {
  website: "https://alex-huang.dev/",
  author: "Alex Huang",
  profile: "https://github.com/zerohzz",
  desc: "Senior Salesforce Engineer & Technical Consultant with 7+ years across public sector, healthcare, and enterprise environments. End-to-end solution delivery specialist — Apex, LWC, DevOps/CI/CD, AI integration, and scalable solution architecture across 60+ venues in AU, NZ, and US.",
  title: "Alex Huang",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/zerohzz/alex-huang.dev/edit/main/src/data/blog/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Australia/Sydney",
} as const;
