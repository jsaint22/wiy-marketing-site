"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavChild {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  label: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { href: "/about", label: "About" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/virtual-family-office", label: "Virtual Family Office" },
      { href: "/for-business-owners", label: "For Business Owners" },
      { href: "/for-real-estate-investors", label: "For RE Investors" },
      { href: "/for-fire-followers", label: "For FIRE Followers" },
      { href: "/our-process", label: "Our Process" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  {
    label: "Insights",
    children: [
      { href: "/blog", label: "Blog" },
      { href: "/podcast", label: "Podcast" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/vs-aum", label: "Flat Fee vs. AUM" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = item.children?.some((child) => pathname === child.href);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
          isActive
            ? "text-primary bg-neutral-bg"
            : "text-neutral-dark hover:text-primary hover:bg-neutral-bg/50"
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-1 w-56 z-50"><div className="bg-white shadow-lg rounded-lg border border-neutral-bg py-2">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname === child.href
                  ? "text-primary font-semibold bg-neutral-bg"
                  : "text-neutral-dark hover:text-primary hover:bg-neutral-bg/50"
              }`}
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div></div>
      )}
    </div>
  );
}

function MobileDropdown({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${
          item.children?.some((c) => pathname === c.href)
            ? "text-primary bg-neutral-bg"
            : "text-neutral-dark hover:text-primary"
        }`}
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="pl-4 space-y-1 mt-1">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className={`block px-3 py-2 text-sm rounded-md ${
                pathname === child.href
                  ? "text-primary font-semibold bg-neutral-bg"
                  : "text-neutral-dark/70 hover:text-primary"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-bg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/wiy-logo-horizontal.png"
              alt="Wealth In Yourself"
              width={220}
              height={48}
              className="h-12 sm:h-[52px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <DesktopDropdown key={link.label} item={link} pathname={pathname} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-neutral-bg"
                      : "text-neutral-dark hover:text-primary hover:bg-neutral-bg/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-dark"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-neutral-bg">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) =>
                link.children ? (
                  <MobileDropdown
                    key={link.label}
                    item={link}
                    pathname={pathname}
                    onClose={() => setMobileOpen(false)}
                  />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 text-base font-medium rounded-md ${
                      pathname === link.href
                        ? "text-primary bg-neutral-bg"
                        : "text-neutral-dark hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-3 px-5 py-2.5 bg-primary text-white text-center text-sm font-semibold rounded-lg"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
