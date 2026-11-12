import type { ReactNode } from "react";

// 이력서처럼 왼쪽 열에 섹션 이름, 오른쪽 열에 내용을 둔다.
export function Section({
  id,
  label,
  lead,
  children,
}: {
  id: string;
  label: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[180px_1fr] lg:gap-12">
        <h2
          id={`${id}-label`}
          className="self-start text-[15px] font-semibold before:mb-3 before:block before:h-0.5 before:w-6 before:bg-accent lg:sticky lg:top-24"
        >
          {label}
        </h2>
        <div className="min-w-0">
          {lead && (
            <p className="max-w-3xl text-2xl font-bold leading-snug tracking-[-0.025em] sm:text-[1.875rem]">
              {lead}
            </p>
          )}
          <div className={lead ? "mt-10 sm:mt-12" : undefined}>{children}</div>
        </div>
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
