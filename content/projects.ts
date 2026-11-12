import type { Project } from "./types";

/**
 * Curated work. `featured: true` entries render on the homepage; the rest are
 * ready for a future /projects page.
 *
 * Rules for this file:
 * - `url` is only set for domains that have been checked. Never guess a link.
 * - `role` describes Micheal's contribution; `context` describes the product's
 *   outcomes. Keep the two separate so nothing implies he did it alone.
 * - `status` drives a visible label for anything that isn't a live product:
 *   "relaunching" and "discontinued" both render a tag instead of hiding the
 *   entry, so a project going quiet is stated plainly rather than deleted.
 * - The homepage shows a curated four. AllSEO.ai and Review Miner stay in this
 *   file (`featured: false`) for the future /projects page.
 */
export const projects: Project[] = [
  {
    slug: "detecting-ai",
    name: "Detecting AI",
    summary:
      "An AI detection product for people reviewing writing they didn't watch being written. I built and owned much of the product frontend through its early growth, then led the frontend team as it grew.",
    role: "Product frontend, then frontend team lead for three engineers",
    context:
      "The product passed 100k users and a $2M+ valuation while I was on the team — outcomes that belonged to the whole team.",
    tags: ["Product engineering", "Frontend", "AI"],
    url: "https://detecting-ai.com",
    status: "active",
    featured: true,
  },
  {
    slug: "kadrhr",
    name: "KadrHR",
    summary:
      "An HR, payroll, and attendance platform for teams that already live inside Telegram. My work spans product engineering and the organic growth experiments that brought people in.",
    role: "Product engineering, organic growth & SEO experiments",
    context: null,
    tags: ["Product engineering", "Growth systems"],
    url: "https://kadrhr.com",
    status: "active",
    featured: true,
  },
  {
    slug: "audionarrator",
    name: "Audionarrator",
    summary:
      "Turns a PDF into a real audiobook: it reads the document's structure, finds the chapters, hides the front matter, and plays it back chapter by chapter instead of as one endless stream.",
    role: "Founder — product, engineering, and the writing",
    context:
      "Built because a 600-page systems textbook for a class had no audiobook, and everything available at the time narrated it like running prose.",
    tags: ["AI", "Product engineering", "Founder"],
    url: "https://audionarrator.io",
    status: "active",
    featured: true,
  },
  {
    slug: "animx",
    name: "Animx",
    summary:
      "An AI image and video creation workspace that puts a long list of generation models behind one interface.",
    role: "Full-stack engineering",
    context: null,
    tags: ["AI", "Product engineering", "Full-stack"],
    url: "https://animx.ai",
    status: "active",
    featured: true,
  },
  {
    slug: "allseo",
    name: "AllSEO.ai",
    summary:
      "A multi-agent content workflow that plans, writes, reviews, and validates articles before they go out.",
    role: "Product engineering",
    context: null,
    tags: ["AI", "Agents", "Growth systems"],
    url: null,
    status: "active",
    featured: false,
  },
  {
    slug: "review-miner",
    name: "Review Miner",
    summary:
      "A tool that mines competitor reviews to surface recurring complaints, feature requests, and product opportunities — the raw material for positioning and roadmaps.",
    role: "Product engineering",
    context: null,
    tags: ["AI", "Research"],
    url: null,
    status: "relaunching",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
