"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";
import { withBase } from "@/lib/paths";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="nav">
      <Link className="wordmark" href="/">
        <Image src={withBase("/media/hectare-logo.png")} alt="Hectare" width={300} height={58} priority />
      </Link>
      <nav className="nav-desktop" aria-label="Ana menü">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        ref={buttonRef}
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Kapat" : "Menü"}
      </button>
      <nav
        id={menuId}
        className={open ? "nav-mobile is-open" : "nav-mobile"}
        aria-label="Mobil menü"
        hidden={!open}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            ref={index === 0 ? firstLinkRef : undefined}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
