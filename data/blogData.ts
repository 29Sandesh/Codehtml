export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    desc: string;
    tags: string[];
    color: string;
    content?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "modern-ui-trends",
        title: "Why Simple Design Wins",
        date: "Nov 02, 2025",
        readTime: "5 min read",
        desc: "In an age of complexity, clarity is king. How we design for impact.",
        tags: ["Design", "UX"],
        color: "blue",
        content: "<p>Simplicity is not about removing features, it's about removing friction. When we design interfaces, we focus on the user's core intent...</p>"
    },
    {
        slug: "fast-websites-seo",
        title: "Speed Matters: SEO in 2025",
        date: "Oct 15, 2025",
        readTime: "4 min read",
        desc: "Google's latest core web vitals update and what it means for your business.",
        tags: ["SEO", "Performance"],
        color: "green",
        content: "<p>Performance is no longer just a nice-to-have; it is a critical ranking factor. A site that loads in under 1 second sees 3x higher conversion rates...</p>"
    },
    {
        slug: "future-of-web-dev",
        title: "The Future of Web Development",
        date: "Sep 12, 2025",
        readTime: "6 min read",
        desc: "How AI and Server Components are changing the way we build digital products.",
        tags: ["Tech", "Strategy"],
        color: "purple",
        content: "<p>We are entering a new era of efficiency. Tools like React Server Components allow us to build faster, lighter, and more dynamic applications...</p>"
    }
];