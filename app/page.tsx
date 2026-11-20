import Image from "next/image";
import { ProjectEntry } from "@/components/project-entry";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Tag } from "@/components/tag";
import { WritingEntry } from "@/components/writing-entry";
import { currently, currentlyUpdated } from "@/content/currently";
import { lab } from "@/content/lab";
import { featuredProjects } from "@/content/projects";
import { contactHref, hasDirectContact, site } from "@/content/site";
import { notes, writingIntro } from "@/content/writing";

export default function HomePage() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero ------------------------------------------------------------- */}
        <section aria-labelledby="intro-heading" className="hero-grid border-b border-line">
          <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-16">
            {/* Masthead line: who it is, and what kind of work this is. */}
            <div className="animate-rise flex flex-col gap-2.5 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink">
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-accent" />
                {site.name}
              </p>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
                {site.capabilities.join(" · ")}
              </p>
            </div>

            <div className="mt-12 grid gap-12 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
              <div>
                <h1
                  id="intro-heading"
                  className="animate-rise rise-1 max-w-[24ch] font-serif text-[clamp(2.35rem,5.2vw,4.05rem)] leading-[1.03] tracking-[-0.02em]"
                >
                  {site.statement.lead}{" "}
                  <span className="italic text-ink-muted">{site.statement.emphasis}</span>
                  {site.statement.rest}
                </h1>

                <p className="animate-rise rise-2 mt-8 max-w-lg text-[1.0625rem] leading-[1.7] text-ink-muted">
                  {site.supporting}
                </p>

                <div className="animate-rise rise-3 mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[0.8125rem] text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Explore my work
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="#writing"
                    className="link-underline text-[0.8125rem] text-ink-muted hover:text-ink"
                  >
                    Read my notes
                  </a>
                  <a
                    href={contactHref}
                    className="link-underline text-[0.8125rem] text-ink-muted hover:text-ink"
                  >
                    Work with me
                  </a>
                </div>
              </div>

              {/*
                Portrait. A bright outdoor shot, so it gets a hairline frame and
                a soft shadow to sit properly on the dark canvas. `sizes` keeps
                the browser from downloading a 20rem-wide image for a phone.
              */}
              {site.portrait ? (
                <figure className="animate-rise rise-2 max-w-sm lg:mt-1 lg:max-w-none">
                  <div className="overflow-hidden rounded-lg border border-line-strong bg-surface-raised shadow-[0_28px_64px_-40px_rgba(0,0,0,0.95)]">
                    <Image
                      src={site.portrait.src}
                      alt={site.portrait.alt}
                      width={site.portrait.width}
                      height={site.portrait.height}
                      priority
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 24rem, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-faint">
                    <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
                    {site.portrait.caption}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </section>

        {/* 01 — Currently --------------------------------------------------- */}
        <Section
          id="currently"
          index="01"
          title="Currently"
          note={`Updated ${currentlyUpdated}`}
        >
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {currently.map((item) => (
              <div key={item.label} className="border-t border-line pt-4">
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-faint">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 02 — Selected work ----------------------------------------------- */}
        <Section
          id="projects"
          index="02"
          title="Selected work"
          note="A few products I've helped build. A fuller archive is coming."
        >
          <div className="space-y-8 sm:space-y-10">
            {featuredProjects.map((project, index) => (
              <ProjectEntry key={project.slug} project={project} index={index + 1} />
            ))}
          </div>
        </Section>

        {/* 03 — Writing ----------------------------------------------------- */}
        <Section
          id="writing"
          index="03"
          title="Writing"
          note="Engineering, AI, products, and the rest of it."
        >
          <p className="max-w-xl text-[0.8125rem] leading-relaxed text-ink-faint">
            {writingIntro}
          </p>
          <div className="mt-9 space-y-7 sm:space-y-8">
            {notes.map((note, index) => (
              <WritingEntry key={note.slug} note={note} index={index} />
            ))}
          </div>
        </Section>

        {/* 04 — Lab --------------------------------------------------------- */}
        <Section
          id="lab"
          index="04"
          title="The lab"
          note="Small things I make because they'd be useful to me."
        >
          <p className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-muted">{lab.intro}</p>

          <div className="mt-8 space-y-4">
            {lab.items.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Tag tone="accent">{item.status}</Tag>
                  <h3 className="font-serif text-[1.4rem] tracking-tight">{item.name}</h3>
                </div>
                <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-5 inline-block font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-accent"
                  >
                    Open ↗
                  </a>
                ) : (
                  <p className="mt-5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-faint">
                    Not open yet
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="handwritten mt-6 text-[0.9375rem]">{lab.outro}</p>
        </Section>

        {/* 05 — Work with me ------------------------------------------------ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-32 border-t border-line md:scroll-mt-20"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-ink-faint">
              05
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:items-end lg:gap-16">
              <div>
                <h2
                  id="contact-heading"
                  className="max-w-[19ch] font-serif text-[clamp(2rem,5vw,3.2rem)] leading-[1.02] tracking-[-0.015em]"
                >
                  Have something you&rsquo;re trying to build?
                </h2>
                <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-ink-muted">
                  Whether you need help turning an idea into a product, improving an existing
                  product, or putting AI to practical use, let&rsquo;s talk.
                </p>
              </div>

              {/*
                Contact actions render from verified data only. Add `email` or
                `socials` in content/site.ts and these switch to a real mailto or
                profile link automatically.
              */}
              <div className="flex flex-col items-start gap-3">
                {hasDirectContact ? (
                  <>
                    {site.email ? (
                      <>
                        <a
                          href={`mailto:${site.email}`}
                          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[0.8125rem] font-medium text-accent-contrast transition-opacity hover:opacity-90"
                        >
                          Email me
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </a>
                        <p className="font-mono text-[0.6875rem] tracking-[0.06em] text-ink-faint">
                          {site.email}
                        </p>
                      </>
                    ) : null}
                    {site.socials.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-[0.8125rem] text-ink-muted hover:text-ink"
                      >
                        {social.label} ↗
                      </a>
                    ))}
                  </>
                ) : (
                  <>
                    <a
                      href="#projects"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[0.8125rem] font-medium text-accent-contrast transition-opacity hover:opacity-90"
                    >
                      See what I&rsquo;ve built
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                    <a
                      href="#writing"
                      className="link-underline text-[0.8125rem] text-ink-muted hover:text-ink"
                    >
                      Read the notes
                    </a>
                  </>
                )}
              </div>
            </div>

            <p className="handwritten mt-10 text-right text-[1.0625rem]">— Micheal</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
