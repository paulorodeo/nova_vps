import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { publishedPosts } from "@/constants/blog";
import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.url;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Feed RSS do blog.
 * Enquanto não houver posts publicados, o feed é servido válido e vazio.
 */
export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = publishedPosts.map((p) =>
          [
            `    <item>`,
            `      <title>${escapeXml(p.title)}</title>`,
            `      <link>${BASE_URL}/blog/${p.slug}</link>`,
            `      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>`,
            `      <description>${escapeXml(p.excerpt)}</description>`,
            `      <pubDate>${new Date(`${p.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>`,
            `      <category>${escapeXml(p.category)}</category>`,
            `    </item>`,
          ].join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
          `  <channel>`,
          `    <title>Blog — ${escapeXml(siteConfig.name)}</title>`,
          `    <link>${BASE_URL}/blog</link>`,
          `    <description>${escapeXml(siteConfig.description)}</description>`,
          `    <language>pt-BR</language>`,
          `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
          ...items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
