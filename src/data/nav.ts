export const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/posts" },
  { label: "Contact", href: "/contact" },
] as const;

// Blog nav should be active for both /posts and /tags
export const BLOG_ACTIVE_PATHS = ["/posts", "/tags"];
