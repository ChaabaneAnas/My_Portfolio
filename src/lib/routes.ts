import type { Lang } from "@/content/types";
import { SITE } from "@/lib/site";

/** English lives at the root, French under /fr — both fully prerendered. */
export function homePath(lang: Lang): string {
  return lang === "en" ? "/" : "/fr/";
}

export function sectionPath(lang: Lang, id: string): string {
  return `${homePath(lang)}#${id}`;
}

export function workPath(lang: Lang, slug: string): string {
  return lang === "en" ? `/work/${slug}/` : `/fr/work/${slug}/`;
}

/** Both résumés ship in `public/`; the site language picks the default one. */
export function resumePath(lang: Lang): string {
  return SITE.resume[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "fr" : "en";
}
