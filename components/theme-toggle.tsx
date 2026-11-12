"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const THEME_ATTRIBUTE = "data-theme";
const STORAGE_KEY = "mt-theme";

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [THEME_ATTRIBUTE],
  });

  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute(THEME_ATTRIBUTE) === "light" ? "light" : "dark";
}

/** Dark is the default, so the server always renders the dark state. */
function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * Dark is the default. This toggle only ever opts *in* to light mode by writing
 * `data-theme` on <html> plus a localStorage entry that the inline script in
 * app/layout.tsx replays before first paint.
 *
 * The current theme is read straight from the DOM through useSyncExternalStore,
 * so there is no state syncing effect and no hydration mismatch.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLight = theme === "light";
  const label = isLight ? "Switch to dark theme" : "Switch to light theme";

  function toggleTheme() {
    const next: Theme = isLight ? "dark" : "light";
    document.documentElement.setAttribute(THEME_ATTRIBUTE, next);

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private browsing); the toggle still works for the session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      <span aria-hidden="true" className="block">
        {isLight ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5a8.5 8.5 0 1 0 10.9 10.9Z" />
    </svg>
  );
}

