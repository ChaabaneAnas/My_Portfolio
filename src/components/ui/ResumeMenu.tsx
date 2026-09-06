"use client";

import { useEffect, useId, useRef, useState } from "react";
import { actionBase, actionVariants } from "@/components/ui/ActionLink";
import { ChevronDown, Download } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";
import { RESUME_LANGUAGE_LABEL } from "@/lib/site";
import { otherLang, resumePath } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

interface ResumeMenuProps {
  lang: Lang;
  nav: Content["nav"];
  /** Visual treatment. `sheet` renders inline options instead of a popover. */
  variant: "hero" | "header" | "sheet";
  /** Overrides the trigger text; the hero uses its own wording. */
  label?: string;
  className?: string;
  /** The mobile sheet passes -1 to keep links out of the tab order while closed. */
  tabIndex?: number;
}

/**
 * Both résumés ship at once, so a single download link cannot serve both. The
 * site language orders the choices — it does not decide for the reader.
 */
export function ResumeMenu({
  lang,
  nav,
  variant,
  label,
  className,
  tabIndex,
}: ResumeMenuProps) {
  const langs: Lang[] = [lang, otherLang(lang)];
  const text = label ?? nav.resume;

  if (variant === "sheet") {
    return <SheetLinks langs={langs} nav={nav} text={text} tabIndex={tabIndex} />;
  }

  return (
    <Popover
      langs={langs}
      nav={nav}
      variant={variant}
      text={text}
      className={className}
      tabIndex={tabIndex}
    />
  );
}

/**
 * The mobile sheet is a `grid-rows-[0fr]` container with `overflow-hidden`, so
 * an absolutely positioned popover inside it would be clipped. Both options are
 * laid out inline instead: same destinations, nothing to clip.
 */
function SheetLinks({
  langs,
  nav,
  text,
  tabIndex,
}: {
  langs: Lang[];
  nav: Content["nav"];
  text: string;
  tabIndex?: number;
}) {
  const [primary, secondary] = langs;

  return (
    <div className="mt-4 flex flex-col items-center gap-3">
      <a
        href={resumePath(primary)}
        hrefLang={primary}
        download=""
        tabIndex={tabIndex}
        aria-label={`${nav.resumeAria} — ${RESUME_LANGUAGE_LABEL[primary]}`}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#04212a]"
      >
        <Download />
        {text}
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] opacity-70">
          {RESUME_LANGUAGE_LABEL[primary]}
        </span>
      </a>
      <a
        href={resumePath(secondary)}
        hrefLang={secondary}
        download=""
        tabIndex={tabIndex}
        aria-label={`${nav.resumeAria} — ${RESUME_LANGUAGE_LABEL[secondary]}`}
        className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-dim transition-colors hover:text-accent"
      >
        <Download className="text-sm" />
        {RESUME_LANGUAGE_LABEL[secondary]}
        <span aria-hidden>PDF</span>
      </a>
    </div>
  );
}

const triggerClasses: Record<"hero" | "header", string> = {
  hero: cn(actionBase, actionVariants.ghost),
  header:
    "group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-text transition-colors hover:border-accent/45 hover:text-accent",
};

/** Right-aligned in the header cluster, left-aligned under the hero CTA row. */
const menuAlign: Record<"hero" | "header", string> = {
  hero: "left-0",
  header: "right-0",
};

function Popover({
  langs,
  nav,
  variant,
  text,
  className,
  tabIndex,
}: {
  langs: Lang[];
  nav: Content["nav"];
  variant: "hero" | "header";
  text: string;
  className?: string;
  tabIndex?: number;
}) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [open, setOpen] = useState(false);

  // Opening moves focus into the menu, per the menu-button pattern. The effect
  // runs after `inert` has been removed, so the item is focusable by then.
  useEffect(() => {
    if (open) itemRefs.current[0]?.focus();
  }, [open]);

  // Listeners exist only while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const close = (restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  };

  const moveTo = (index: number) => {
    const items = itemRefs.current;
    const wrapped = (index + items.length) % items.length;
    items[wrapped]?.focus();
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        tabIndex={tabIndex}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
          } else if (event.key === "Escape") {
            close(false);
          }
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={nav.resumeAria}
        className={triggerClasses[variant]}
      >
        {text}
        <Download className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
        <ChevronDown
          className={cn(
            "text-sm text-dim transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      {/* Kept mounted so the open/close transition has something to animate;
          `inert` takes the closed links out of the tab order and the a11y tree. */}
      <div
        id={menuId}
        role="menu"
        aria-label={nav.resumeMenuAria}
        inert={!open}
        onKeyDown={(event) => {
          const index = itemRefs.current.indexOf(
            event.target as HTMLAnchorElement,
          );
          if (event.key === "Escape") {
            close(true);
          } else if (event.key === "ArrowDown") {
            event.preventDefault();
            moveTo(index + 1);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            moveTo(index - 1);
          }
        }}
        className={cn(
          "absolute top-full z-30 mt-2 min-w-52 rounded-xl border border-line bg-surface/95 p-1 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl",
          "transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          menuAlign[variant],
          open ? "opacity-100" : "-translate-y-1 opacity-0",
        )}
      >
        {langs.map((item, index) => (
          <a
            key={item}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            role="menuitem"
            href={resumePath(item)}
            hrefLang={item}
            download=""
            onClick={() => setOpen(false)}
            className="flex items-center justify-between gap-6 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-accent focus-visible:bg-surface-2 focus-visible:text-accent"
          >
            {RESUME_LANGUAGE_LABEL[item]}
            <span
              aria-hidden
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-dim"
            >
              PDF
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
