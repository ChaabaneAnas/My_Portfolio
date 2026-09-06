import type { Lang } from "@/content/types";

export const SITE = {
  url: "https://chaabaneanas.github.io",
  name: "Anas Chaabane",
  shortName: "AC",
  role: "Full Stack Developer",
  email: "anas.chaabane98@gmail.com",
  phone: "+21626951134",
  phoneDisplay: "+216 26 951 134",
  location: "Sousse, Tunisia",
  locality: "Sousse",
  country: "TN",
  linkedin: "https://www.linkedin.com/in/chaabaneanas/",
  github: "https://github.com/ChaabaneAnas",
  githubUser: process.env.NEXT_PUBLIC_GITHUB_USER ?? "ChaabaneAnas",
  resume: { en: "/Anas_Chaabane_EN.pdf", fr: "/Anas_Chaabane_FR.pdf" },

  /**
   * Hero portrait. Leave null and the hero renders exactly as it does without
   * one — no placeholder, no reserved gap. Set all three fields together: the
   * dimensions are what stop the image shifting the layout as it loads.
   */
  portrait: { src: "/portrait.webp", width: 640, height: 640 },
  since: 2022,
} as const;

/**
 * Résumé language names, written in their own language, so they read the same
 * on both trees. Language-neutral like `src/content/links.ts`, which is why
 * they sit here rather than in the dictionaries.
 */
export const RESUME_LANGUAGE_LABEL: Record<Lang, string> = {
  en: "English",
  fr: "Français",
};

/** Public by design — Web3Forms keys are meant to live in the client bundle. */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
