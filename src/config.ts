export const SITE = {
  website: "https://alex-huang.dev/",
  author: "Alex Huang",
  profile: "https://github.com/zerohzz",
  desc: "Senior Salesforce Developer with 7+ years across consulting and in-house delivery. Currently sole developer for a global entertainment company — owning LWC engineering, Apex, CI/CD, and integrations across 60+ venues in AU, NZ, and US.",
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
