"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const THEME_ATTRIBUTE = "data-theme";
/**
 * Versioned so that changing the default doesn't get masked by a preference
 * saved under the previous default.
 */
const STORAGE_KEY = "mt-theme-v2";

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [THEME_ATTRIBUTE],
  });

  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute(THEME_ATTRIBUTE) === "dark" ? "dark" : "light";
}

/** Light is the default, so the server always renders the light state. */
function getServerSnapshot(): Theme {
  return "light";
}

/**
 * Light is the default. Dark is the opt-in: this toggle writes
 * `data-theme="dark"` on <html> (and removes it for light) plus a localStorage
 * entry that the inline script in app/layout.tsx replays before first paint.
 *
 * The current theme is read straight from the DOM through useSyncExternalStore,
 * so there is no state syncing effect and no hydration mismatch.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";
  // The icon shows the theme you would switch *to*.
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  function toggleTheme() {
    if (isDark) {
      document.documentElement.removeAttribute(THEME_ATTRIBUTE);
    } else {
      document.documentElement.setAttribute(THEME_ATTRIBUTE, "dark");
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, isDark ? "light" : "dark");
    } catch {
      // Storage can be blocked (private browsing); the toggle still works for the session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      <span aria-hidden="true" className="block">
        {isDark ? <SunIcon /> : <MoonIcon />}
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

