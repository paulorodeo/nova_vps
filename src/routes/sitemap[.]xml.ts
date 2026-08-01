import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { indexableRoutes } from "@/config/routes";
import { publishedPosts } from "@/constants/blog";
import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.url;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...indexableRoutes.map((r) => ({
            path: r.path,
            changefreq: r.changefreq,
            priority: r.priority,
          })),
          // Somente posts publicados entram no sitemap.
          ...publishedPosts.map((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.publishedAt,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
