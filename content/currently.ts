import type { CurrentlyItem } from "./types";

/**
 * The "Currently" snapshot. This is the part of the site meant to be updated
 * most often — edit the values below and the section follows.
 *
 * Nothing here names a specific employer, client, or personal activity, because
 * none of that is confirmed yet. Replace with the real thing as it happens.
 */
export const currentlyUpdated = "December 2026";

export const currently: CurrentlyItem[] = [
  {
    label: "Building",
    value:
      "AI-powered product experiments, and the notes that come out of them — small tools first, products if they earn it.",
  },
  {
    label: "Working on",
    value:
      "Product engineering and growth work with founders, from the first build to the awkward middle.",
  },
  {
    label: "Learning",
    value:
      "Practical AI engineering: agents that do real work, and how to tell whether they actually do.",
  },
  {
    label: "Off-screen",
    value: "Reading, walking, and a pile of half-finished side projects.",
  },
];
