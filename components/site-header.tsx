import { contactHref, nav, site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

/**
 * Compact sticky header: name (doubles as Home), anchor nav, theme toggle, and a
 * restrained "Work with me" button.
 *
 * When the secondary pages exist, swap each `item.href` for `item.futureRoute`
 * (see content/site.ts) and the anchor nav becomes real navigation.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="group inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="block h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150"
            />
            <span className="font-serif text-[1.15rem] tracking-tight">{site.name}</span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={contactHref}
              className="rounded-full border border-line-strong px-3.5 py-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent sm:px-4"
            >
              Work with me
            </a>
          </div>
        </div>

        <nav
          aria-label="Sections, compact"
          className="-mx-6 flex items-center gap-6 overflow-x-auto px-6 pb-3 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
