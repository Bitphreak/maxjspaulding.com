"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-lg font-semibold text-text-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            MS
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-1 md:gap-2">
            {navLinks.map(({ label, href }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "text-primary bg-surface"
                        : "text-text-muted hover:text-text-primary hover:bg-surface"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
