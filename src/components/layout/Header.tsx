"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Close, Globe, Menu } from "@/components/ui/Icons";
import { ResumeMenu } from "@/components/ui/ResumeMenu";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { homePath, otherLang, sectionPath } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

interface HeaderProps {
  lang: Lang;
  nav: Content["nav"];
}

export function Header({ lang, nav }: HeaderProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  const isHome = pathname === homePath(lang) || pathname === homePath(lang).replace(/\/$/, "");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Above the first section there is nothing to highlight.
      if (window.scrollY < 240) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for the desktop nav. Only meaningful on the home page.
  useEffect(() => {
    if (!isHome) return;
    const sections = nav.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, nav.items]);

  // Position the sliding indicator over the active link; a CSS transition on
  // the span does the movement, so no animation library is involved.
  useEffect(() => {
    if (!isHome || !active) {
      setPill(null);
      return;
    }
    const link = navRef.current?.querySelector<HTMLElement>(`[data-nav="${active}"]`);
    setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
  }, [active, isHome]);

  // Lock the page behind the mobile sheet, and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const alt = otherLang(lang);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-18">
        <Link href={homePath(lang)} className="group inline-flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-md border border-line bg-surface font-mono text-xs font-semibold tracking-tight text-accent transition-colors group-hover:border-accent/50"
          >
            {SITE.shortName}
          </span>
          <span className="sr-only font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors group-hover:text-muted sm:not-sr-only sm:inline">
            {SITE.name}
          </span>
        </Link>

        <nav
          ref={navRef}
          aria-label="Primary"
          className="relative hidden items-center gap-1 md:flex"
        >
          <span
            aria-hidden
            className="absolute inset-y-1 left-0 -z-10 rounded-full border border-line bg-surface transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: pill ? 1 : 0,
              width: pill ? `${pill.width}px` : 0,
              transform: `translateX(${pill?.left ?? 0}px)`,
            }}
          />
          {nav.items.map((item) => (
            <Link
              key={item.id}
              href={sectionPath(lang, item.id)}
              data-nav={item.id}
              aria-current={active === item.id && isHome ? "true" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm transition-colors",
                active === item.id && isHome ? "text-text" : "text-muted hover:text-text",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={homePath(alt)}
            hrefLang={alt}
            title={nav.switchTo}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent/45 hover:text-accent"
          >
            <Globe className="text-sm" />
            {alt}
            <span className="sr-only">— {nav.switchTo}</span>
          </Link>

          <ResumeMenu
            lang={lang}
            nav={nav}
            variant="header"
            className="hidden sm:block"
          />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className="grid size-9 place-items-center rounded-full border border-line text-text transition-colors hover:border-accent/45 hover:text-accent md:hidden"
          >
            {open ? <Close className="text-lg" /> : <Menu className="text-lg" />}
          </button>
        </div>
      </div>

      {/* 0fr → 1fr animates the sheet open without measuring its height. */}
      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-line bg-bg/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="shell flex flex-col py-4">
            {nav.items.map((item, index) => (
              <Link
                key={item.id}
                href={sectionPath(lang, item.id)}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
                className="flex items-center gap-4 border-b border-line-soft py-4 text-h3 font-medium last:border-b-0"
              >
                <span aria-hidden className="font-mono text-[0.6875rem] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <ResumeMenu
              lang={lang}
              nav={nav}
              variant="sheet"
              tabIndex={open ? undefined : -1}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
