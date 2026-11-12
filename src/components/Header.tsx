"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const NAV = [
  { href: "#about", label: "소개" },
  { href: "#capabilities", label: "역량" },
  { href: "#work", label: "작업" },
  { href: "#foundation", label: "기반 경험" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-ink text-ink-text [--focus:var(--ink-accent)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-[15px] font-bold tracking-tight">
          박승규
        </a>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex gap-7 text-sm text-ink-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted hover:text-ink-text md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="주요 메뉴" className="border-t border-ink-line md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-base text-ink-muted hover:text-ink-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
