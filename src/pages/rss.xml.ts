import type { APIContext } from "astro";
import { getPosts } from "../lib/posts";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET({ site }: APIContext) {
  const base = site!.toString().replace(/\/$/, "");
  const items = getPosts()
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${base}${p.route}</link>
      <guid>${base}${p.route}</guid>
      <pubDate>${p.date.toUTCString()}</pubDate>
      ${p.description ? `<description>${esc(p.description)}</description>` : ""}
    </item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Kullhem Labs notes</title>
    <link>${base}/blog/</link>
    <description>Lab notes from Kullhem Labs: write-ups, edge cases, and what was learned building things.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
