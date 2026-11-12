/**
 * Shared content types. Everything the homepage renders lives in this folder as
 * plain typed data so the layout can be edited independently of the copy.
 */

export type NavItem = {
  label: string;
  /** In-page anchor for the homepage milestone. */
  href: string;
  /** Point this at a real route once the secondary page exists (e.g. "/projects"). */
  futureRoute?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  /** What Micheal actually did — kept separate from the product's own results. */
  role: string;
  /** Product-level context (growth, scale). Never framed as his alone. */
  context: string | null;
  tags: string[];
  /** Only set when the URL has been verified. Never guess one. */
  url: string | null;
  /** Discontinued / relaunching products are labelled in the UI, not hidden. */
  status: "active" | "relaunching" | "discontinued";
  /** Featured entries appear on the homepage; the rest wait for /projects. */
  featured: boolean;
};

export type NoteStatus = "draft" | "published";

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  status: NoteStatus;
  /** ISO date. Only set once a note is actually published. */
  publishedAt: string | null;
  readingTime: string | null;
  /** Only set once the note has a URL. */
  href: string | null;
};

export type CurrentlyItem = {
  label: string;
  value: string;
};

export type LabItem = {
  name: string;
  status: string;
  summary: string;
  tags: string[];
  href: string | null;
};
