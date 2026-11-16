"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, footerLinks } from "@/lib/content";

export function BottomBar() {
  const pathname = usePathname();

  return (
    <footer className="bottom-bar">
      <p>
        © {company.name}
        <span className="footer-trade">Hectare Foreign Trade</span>
      </p>
      <nav aria-label="Alt menü">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
