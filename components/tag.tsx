import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  tone?: "default" | "accent";
};

const base =
  "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] uppercase leading-none tracking-[0.12em]";

const tones = {
  default: "border-line text-ink-muted",
  accent: "border-transparent bg-accent-soft text-accent",
} as const;

export function Tag({ children, tone = "default" }: TagProps) {
  return <span className={`${base} ${tones[tone]}`}>{children}</span>;
}
