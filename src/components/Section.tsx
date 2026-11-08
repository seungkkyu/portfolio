import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        {title && (
          <h2 className="mt-3 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">{title}</h2>
        )}
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="사용 기술">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
