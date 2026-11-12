import type { Note } from "@/content/types";

type WritingEntryProps = {
  note: Note;
  index: number;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/**
 * A note in the writing list. Drafts are labelled as drafts and carry no date or
 * reading time, so nothing on the page implies a published article.
 */
export function WritingEntry({ note, index }: WritingEntryProps) {
  const isDraft = note.status === "draft";
  const meta = isDraft ? "Draft" : note.readingTime;

  return (
    <article className="group border-t border-line pt-6 first:border-t-0 first:pt-0 sm:pt-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-faint">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span aria-hidden="true">—</span>
        <span className="text-ink-muted">{note.category}</span>
        {meta ? (
          <>
            <span aria-hidden="true">·</span>
            <span className={isDraft ? "text-accent" : undefined}>{meta}</span>
          </>
        ) : null}
        {note.publishedAt ? (
          <>
            <span aria-hidden="true">·</span>
            <time dateTime={note.publishedAt}>{formatDate(note.publishedAt)}</time>
          </>
        ) : null}
      </div>

      <h3 className="mt-2.5 font-serif text-[1.3rem] leading-snug tracking-tight sm:text-[1.4rem]">
        {note.href ? (
          <a href={note.href} className="link-underline transition-colors group-hover:text-accent">
            {note.title}
          </a>
        ) : (
          note.title
        )}
      </h3>

      <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-ink-muted">{note.excerpt}</p>
    </article>
  );
}
