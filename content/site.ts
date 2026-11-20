import type { NavItem, Portrait, SocialLink } from "./types";

/**
 * Single source of truth for the site's identity and positioning copy.
 */
export const site = {
  name: "Micheal Tijani",
  title: "Micheal Tijani — Product, AI & Growth Engineering",
  description:
    "I build products, explore ideas, and share what I learn along the way. Product engineering, AI engineering, and growth systems for founders.",

  /**
   * Positioning statement — the headline of the site.
   * Split so the hero can emphasise part of it typographically without
   * duplicating the copy. Use `statementText` for the plain string.
   */
  statement: {
    lead: "I build products,",
    emphasis: "explore ideas",
    rest: ", and share what I learn along the way.",
  },
  /** Supporting line under the headline. */
  supporting:
    "I work with founders to turn ideas into software, make existing products better, and put AI to practical use.",
  capabilities: ["Product engineering", "AI engineering", "Growth systems"],

  /**
   * Hero portrait. Lives in /public; dimensions are the real pixel size so the
   * space is reserved before load. Set to `null` for the text-only hero.
   */
  portrait: {
    src: "/hero.png",
    alt: "Portrait of Micheal Tijani",
    caption: "Lagos, Nigeria",
    width: 1216,
    height: 1294,
  } as Portrait | null,

  /**
   * Primary contact. Drives the header button, the hero link, and the contact
   * section. Set to `null` to fall back to in-page actions.
   */
  email: "michealayobamitijani@gmail.com" as string | null,

  /** Verified profiles — rendered in the contact section and the footer. */
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/micheal-tijani" },
    { label: "X", href: "https://x.com/asyncronin" },
    { label: "GitHub", href: "https://github.com/Fujinzeken" },
  ] as SocialLink[],

  newsletter: {
    label: "A short, occasional note on what I'm building and learning.",
    note: "Coming soon",
  },
};

/** Compact navigation. Anchors today, real routes later. */
export const nav: NavItem[] = [
  { label: "Currently", href: "#currently" },
  { label: "Projects", href: "#projects", futureRoute: "/projects" },
  { label: "Writing", href: "#writing", futureRoute: "/writing" },
  { label: "Lab", href: "#lab", futureRoute: "/lab" },
];

/** The positioning statement as one plain string (footer, metadata, shares). */
export const statementText = [
  site.statement.lead,
  site.statement.emphasis,
  site.statement.rest,
].join(" ");

/** Resolves to a mailto once `site.email` is set, otherwise keeps the CTA in-page. */
export const contactHref = site.email ? `mailto:${site.email}` : "#contact";

/** True once there is at least one verified way to reach Micheal directly. */
export const hasDirectContact = Boolean(site.email) || site.socials.length > 0;
