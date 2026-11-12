import type { ReactNode } from "react";

type SectionProps = {
  /** Anchor id, also used to label the section for assistive tech. */
  id: string;
  /** Editorial section number, e.g. "02". */
  index: string;
  title: string;
  /** Optional aside under the title — a timestamp, a short qualifier. */
  note?: string;
  children: ReactNode;
};

/**
 * Numbered editorial section: a sticky index/title rail on the left, content on
 * the right, collapsing to a single column on small screens.
 */
export function Section({ id, index, title, note, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-32 border-t border-line md:scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-y-8 py-14 sm:py-16 lg:grid-cols-[12.5rem_minmax(0,1fr)] lg:gap-x-14 lg:py-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-ink-faint">
              {index}
            </p>
            <h2
              id={headingId}
              className="mt-3 font-serif text-[1.75rem] leading-none tracking-tight sm:text-[2rem]"
            >
              {title}
            </h2>
            {note ? (
              <p className="mt-3 max-w-[24ch] text-[0.8125rem] leading-relaxed text-ink-faint">
                {note}
              </p>
            ) : null}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
