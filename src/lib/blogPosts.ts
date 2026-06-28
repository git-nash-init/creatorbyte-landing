export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "crm-features-every-growing-team",
    date: "March 19, 2026",
    title: "CRM Features Every Growing Team",
    excerpt: "Learn how to structure your sales process, manage leads effectively, and close more deals.",
    image: "/assets/blog/blog-post-1.png",
  },
  {
    slug: "how-to-build-a-high-converting-sales",
    date: "March 20, 2026",
    title: "How to Build a High-Converting Sales",
    excerpt: "Learn how to structure your sales process, manage leads effectively, and close more deals.",
    image: "/assets/blog/blog-post-2.png",
  },
  {
    slug: "how-automation-can-boost-your-sales",
    date: "March 21, 2026",
    title: "How Automation Can Boost Your Sales",
    excerpt: "Explore how automation reduces work, improves follow-ups, and your team focus on.",
    image: "/assets/blog/blog-post-3.png",
  },
];
