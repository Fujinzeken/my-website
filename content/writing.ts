import type { Note } from "./types";

/**
 * PLACEHOLDER CONTENT — nothing below has been published.
 *
 * These are working drafts, so they render with a visible "Draft" label and no
 * date or reading time (both would be invented). When a note goes live, set
 * `status: "published"`, add `publishedAt` (ISO), `readingTime`, and `href`.
 */
export const writingIntro =
  "Nothing published yet. These are the drafts I'm closest to finishing — they'll move up here as they land.";

export const notes: Note[] = [
  {
    slug: "what-i-look-for-before-adding-ai",
    title: "What I look for before adding AI to a product",
    excerpt:
      "Most AI features fail on the framing long before they fail on the model. Notes on finding the part of a workflow where a model actually earns its place.",
    category: "AI",
    status: "draft",
    publishedAt: null,
    readingTime: null,
    href: null,
  },
  {
    slug: "the-frontend-work-nobody-budgets-for",
    title: "The frontend work nobody budgets for",
    excerpt:
      "How much of building a product frontend is really product decisions, edge states, and the parts that never show up in a screenshot.",
    category: "Engineering",
    status: "draft",
    publishedAt: null,
    readingTime: null,
    href: null,
  },
  {
    slug: "distribution-is-a-product-feature",
    title: "Distribution is a product feature",
    excerpt:
      "What changed once I started treating organic growth and SEO as product surface instead of marketing work bolted on at the end.",
    category: "Startups & distribution",
    status: "draft",
    publishedAt: null,
    readingTime: null,
    href: null,
  },
  {
    slug: "learning-in-public-without-performing",
    title: "Learning in public without performing",
    excerpt:
      "Keeping a working notebook instead of a personal brand — and why unfinished thoughts are worth publishing when the framing is honest.",
    category: "Learning notes",
    status: "draft",
    publishedAt: null,
    readingTime: null,
    href: null,
  },
];
