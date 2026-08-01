import type { BlogPost } from "@/types/content";

/**
 * Fonte de conteúdo do blog.
 * Estrutura preparada para uma futura integração com CMS/banco:
 * basta substituir este array por um loader mantendo o mesmo tipo `BlogPost`.
 *
 * Posts com `draft: true` ficam fora da listagem pública, do sitemap e do RSS.
 */
export const blogPosts: BlogPost[] = [];

export const publishedPosts = blogPosts.filter((p) => !p.draft);

export function findPost(slug: string) {
  return publishedPosts.find((p) => p.slug === slug);
}

export const blogCategories = Array.from(new Set(publishedPosts.map((p) => p.category)));
