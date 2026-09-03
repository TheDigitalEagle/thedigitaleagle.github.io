export interface Post {
  route: string;
  title: string;
  description?: string;
  date: Date;
  dateText: string;
}

const entries = import.meta.glob("../pages/blog/*.md", { eager: true }) as Record<
  string,
  { frontmatter: { title?: string; description?: string; date?: string; draft?: boolean } }
>;

export function getPosts(): Post[] {
  return Object.entries(entries)
    .filter(([, mod]) => !mod.frontmatter.draft)
    .map(([path, mod]) => {
      const slug = path.split("/").pop()!.replace(/\.md$/, "");
      const date = new Date(mod.frontmatter.date ?? 0);
      return {
        route: `/blog/${slug}/`,
        title: mod.frontmatter.title ?? slug.replace(/-/g, " "),
        description: mod.frontmatter.description,
        date,
        dateText: date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }),
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
