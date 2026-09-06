"use client";

import { useEffect, useRef } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowDown, ArrowRight } from "@/components/ui/Icons";
import { ResumeMenu } from "@/components/ui/ResumeMenu";
import { SITE } from "@/lib/site";
import { sectionPath } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

/**
 * Entrance animation is pure CSS with `animation-fill-mode: both`, so the hero
 * paints on first frame and never depends on hydration to become visible.
 * JavaScript here only adds the pointer spotlight.
 */
export function Hero({ lang, content }: { lang: Lang; content: Content }) {
  const { hero, nav } = content;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = root.getBoundingClientRect();
        root.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        root.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        root.style.setProperty("--spot-opacity", "1");
      });
    };
    const onLeave = () => root.style.setProperty("--spot-opacity", "0");

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
      <section
          id="top"
          ref={rootRef}
          className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-28"
      >
          {/* Background stack: grid, ambient glows, pointer spotlight, noise. */}
          <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
          >
              <div className="absolute inset-0 grid-field mask-fade-y opacity-40" />
              <div className="absolute -top-48 left-1/2 h-160  w-304 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.15),transparent)] blur-2xl" />
              <div className="absolute -bottom-80 -right-84 h-144 w-xl rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.12),transparent)] blur-2xl" />
              <div
                  className="absolute inset-0 opacity-(--spot-opacity,0) transition-opacity duration-500"
                  style={{
                      background:
                          'radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 40%), rgba(34,211,238,0.10), transparent 70%)'
                  }}
              />
              <div className="absolute inset-0 noise-field opacity-[0.03] mix-blend-overlay" />
          </div>

          <div className="shell w-full">
              <div
                  className="flex flex-wrap items-center justify-between gap-4 enter-rise"
                  style={delay(60)}
              >
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-accent">
                      <span className="relative flex size-1.5">
                          <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-accent" />
                      </span>
                      {hero.status}
                  </span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-dim">
                      {hero.location}
                  </span>
              </div>

              <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-12 lg:gap-12">
                  {/* Portrait is a sibling of the h1, never a child: inside it,
                      the alt text folds into the heading's accessible name on
                      top of the sr-only line. Ordered first on mobile so a face
                      appears above the fold without crowding a narrow screen. */}
                  {SITE.portrait ? (
                      <div
                          className="relative order-first w-40 enter-rise sm:w-44 lg:order-0 lg:col-span-4 lg:col-start-9 lg:w-full lg:max-w-80"
                          style={delay(240)}
                      >
                          {/* Glow behind the figure so a cutout reads as placed in
                              the scene rather than pasted onto it. Sibling before
                              the image, so DOM order alone stacks it correctly. */}
                          <div
                              aria-hidden
                              className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.16),rgba(167,139,250,0.10)_55%,transparent)] blur-2xl"
                          />
                          {/* No frame, no aspect box, no object-cover: this is a
                              cutout, so it keeps its natural 1:1 and floats. The
                              bottom mask dissolves the torso into the section and
                              takes the cutout's clipped left shoulder with it. */}
                          {/* eslint-disable-next-line @next/next/no-img-element --
                              next/image optimizes nothing under images.unoptimized. */}
                          <img
                              src={SITE.portrait.src}
                              width={SITE.portrait.width}
                              height={SITE.portrait.height}
                              alt={SITE.name}
                              fetchPriority="high"
                              decoding="async"
                              className="relative block w-full mask-fade-b grayscale-[0.4] contrast-[1.05]"
                          />
                      </div>
                  ) : null}

                  <div className="min-w-0 lg:col-span-8 lg:row-start-1">
                      <h1>
                          {/* One interpolated string, not adjacent expressions:
                              React separates those with comment nodes, and the
                              lone whitespace node between them gets dropped from
                              the computed accessible name ("AnasChaabane"). */}
                          <span className="sr-only">
                              {`${hero.firstName} ${hero.lastName} — ${hero.role}`}
                          </span>
                          <span aria-hidden className="block">
                              <span className="block overflow-hidden pb-[0.06em]">
                                  <span
                                      className="block text-display font-bold uppercase enter-line"
                                      style={delay(120)}
                                  >
                                      {hero.firstName}
                                  </span>
                              </span>
                              <span className="flex items-end gap-4 sm:gap-8">
                                  <span className="block flex-none overflow-hidden pb-[0.06em]">
                                      <span
                                          className="block text-display font-bold uppercase enter-line"
                                          style={delay(200)}
                                      >
                                          {hero.lastName}
                                      </span>
                                  </span>
                              </span>
                          </span>
                      </h1>

                      <p
                          className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-accent enter-rise sm:text-sm"
                          style={delay(300)}
                      >
                          {hero.role}
                      </p>

                      <p
                          className="mt-6 max-w-[62ch] text-lead text-muted enter-rise"
                          style={delay(360)}
                      >
                          {hero.lead}
                      </p>

                      <div
                          className="mt-8 flex flex-col gap-6 enter-rise"
                          style={delay(440)}
                      >
                          <div className="flex flex-wrap gap-3">
                              <ActionLink href={sectionPath(lang, 'work')}>
                                  {hero.primaryCta}
                                  <ArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                              </ActionLink>
                              <ResumeMenu
                                  lang={lang}
                                  nav={nav}
                                  variant="hero"
                                  label={hero.secondaryCta}
                              />
                          </div>

                          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-dim">
                              {hero.stackLine.map((item, index) => (
                                  <li
                                      key={item}
                                      className="flex items-center gap-3"
                                  >
                                      {item}
                                      {index < hero.stackLine.length - 1 ? (
                                          <span
                                              aria-hidden
                                              className="size-1 rounded-full bg-line"
                                          />
                                      ) : null}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>

              <dl
                  className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line enter-rise sm:grid-cols-4"
                  style={delay(540)}
              >
                  {hero.stats.map((stat) => (
                      <div key={stat.label} className="bg-bg px-5 py-6">
                          <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                              {stat.label}
                          </dt>
                          <dd className="mt-2 text-h3 font-semibold figure-accent">
                              {stat.value}
                          </dd>
                      </div>
                  ))}
              </dl>
          </div>

          <a
              href={sectionPath(lang, 'work')}
              className="shell mt-8 hidden items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-dim transition-colors enter-rise hover:text-accent lg:flex"
              style={delay(900)}
          >
              <ArrowDown className="animate-bounce text-sm" />
              {hero.scrollHint}
          </a>
      </section>
  );
}
