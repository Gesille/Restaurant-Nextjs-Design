"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/site";
import Image from "next/image";
type NavState = { scrolled: boolean; awake: boolean; sleep: boolean };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState<NavState>({ scrolled: false, awake: false, sleep: false });
  const state = useRef<NavState>({ scrolled: false, awake: false, sleep: false });

  // Sticky header behaviour: same thresholds as the original template (150px / 350px).
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const s = state.current;
      let changed = false;

      if (st > 150 && !s.scrolled) {
        s.scrolled = true;
        changed = true;
      }
      if (st < 150 && s.scrolled) {
        s.scrolled = false;
        s.sleep = false;
        changed = true;
      }
      if (st > 350 && !s.awake) {
        s.awake = true;
        changed = true;
      }
      if (st < 350 && s.awake) {
        s.awake = false;
        s.sleep = true;
        changed = true;
      }
      if (changed) setNav({ ...s });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const classes = [
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "ftco_navbar",
    "bg-dark",
    "ftco-navbar-light",
    nav.scrolled && "scrolled",
    nav.awake && "awake",
    nav.sleep && "sleep",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={classes} id="ftco-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/" aria-label="Ashtar Mishoo - Home">
  <Image
    src="/images/logo/logo.png"
    alt="Ashtar Mishoo"
    width={70}
    height={75}
    priority
    className="navbar-logo"
  />
</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="ftco-nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="oi oi-menu" /> Menu
        </button>

        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {navLinks.map((link) => (
              <li className={`nav-item${isActive(link.href) ? " active" : ""}`} key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
