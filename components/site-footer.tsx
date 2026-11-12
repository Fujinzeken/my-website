import { nav, site, statementText } from "@/content/site";

/**
 * Footer: identity, newsletter placeholder, site links, and elsewhere links.
 * Social links only render once verified URLs are added to `site.socials`.
 */
export function SiteFooter() {
  /** Email first, then profiles — everything the footer offers as a way in. */
  const elsewhere = [
    ...(site.email ? [{ label: "Email", href: `mailto:${site.email}` }] : []),
    ...site.socials,
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="font-serif text-[1.35rem] tracking-tight">{site.name}</p>
            <p className="mt-2.5 max-w-xs text-[0.875rem] leading-relaxed text-ink-muted">
              {statementText}
            </p>

            <div className="mt-6 rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
                Newsletter
              </p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                {site.newsletter.label}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-faint">
                <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-accent" />
                {site.newsletter.note}
              </p>
            </div>
          </div>

          <nav aria-labelledby="footer-this-site">
            <p
              id="footer-this-site"
              className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint"
            >
              This site
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-[0.875rem] text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="link-underline text-[0.875rem] text-ink-muted transition-colors hover:text-ink"
                >
                  Work with me
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
              Elsewhere
            </p>
            {elsewhere.length > 0 ? (
              <ul className="mt-4 space-y-2.5">
                {elsewhere.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="link-underline text-[0.875rem] text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="handwritten mt-4 max-w-[16ch] text-[0.9375rem] leading-snug">
                still rounding these up.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-faint">
            © {site.name}
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-faint">
              Built with Next.js
            </p>
            <a
              href="#top"
              className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-accent"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
