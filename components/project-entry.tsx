import type { Project } from "@/content/types";
import { Tag } from "./tag";

type ProjectEntryProps = {
  project: Project;
  index: number;
};

/** Visible label for any project that isn't a straightforwardly live product. */
const statusLabels: Record<Project["status"], string | null> = {
  active: null,
  relaunching: "Relaunching",
  discontinued: "Discontinued",
};

/**
 * One curated project: number, name, what it is, what Micheal did, tags.
 * The whole row reacts on hover, which keeps a long list calm at rest.
 */
export function ProjectEntry({ project, index }: ProjectEntryProps) {
  const position = String(index).padStart(2, "0");
  const statusLabel = statusLabels[project.status];

  return (
    <article className="group border-t border-line pt-8 first:border-t-0 first:pt-0 sm:pt-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0 max-w-2xl">
          <div className="flex items-baseline gap-3">
            <span
              aria-hidden="true"
              className="font-mono text-[0.6875rem] tracking-[0.2em] text-ink-faint"
            >
              {position}
            </span>
            <h3 className="font-serif text-[1.6rem] leading-none tracking-tight sm:text-[1.75rem]">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors group-hover:text-accent"
                >
                  {project.name}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block align-middle text-[0.7rem] text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              ) : (
                project.name
              )}
            </h3>
            {statusLabel ? (
              <Tag tone={project.status === "relaunching" ? "accent" : "default"}>
                {statusLabel}
              </Tag>
            ) : null}
          </div>

          <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          {project.context ? (
            <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-faint">
              {project.context}
            </p>
          ) : null}

          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[0.8125rem] text-ink-muted">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-faint">
              Role
            </span>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <span>{project.role}</span>
          </p>
        </div>

        <ul className="flex shrink-0 flex-wrap gap-2 sm:max-w-[12.5rem] sm:flex-col sm:items-end">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
