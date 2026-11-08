"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Work" },
  { href: "#foundation", label: "Foundation" },
  { href: "#contact", label: "Contact" },
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
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-sm font-bold tracking-tight">
          SeungKyu Park
        </a>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex gap-6 text-sm text-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted hover:text-text md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="주요 메뉴" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-5xl px-4 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-base text-muted hover:text-text"
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
