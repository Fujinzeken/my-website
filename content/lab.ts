import type { LabItem } from "./types";

/**
 * The Lab: free tools, experiments, and small utilities.
 * Everything here is a teaser for now — no tool is built in this milestone.
 */
export const lab = {
  intro:
    "Small tools, experiments, and templates. Free to use, and judged only by whether they're actually useful.",
  items: [
    {
      name: "SaaS Opportunity Scanner",
      status: "In progress",
      summary:
        "Point it at a competitor or a public review source. It reads the customer feedback and surfaces the recurring complaints, feature requests, and unmet needs underneath — the raw material for positioning and product decisions.",
      tags: ["AI", "Research", "Founders"],
      href: null,
    },
  ] as LabItem[],
  outro: "More experiments will land here as they're ready.",
};
