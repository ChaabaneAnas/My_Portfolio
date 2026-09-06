export type Lang = "en" | "fr";

export const LANGS: Lang[] = ["en", "fr"];

export interface NavItem {
  /** Fragment id on the home page, e.g. "work". */
  id: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  metrics: Metric[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  program: string;
  period: string;
  location: string;
  points: string[];
}

export interface CaseSection {
  heading: string;
  body: string[];
  /** Optional bullet list rendered under the prose. */
  list?: string[];
}

export interface Project {
  /** Stable, language-neutral route segment. Must match across dictionaries. */
  slug: string;
  name: string;
  tagline: string;
  category: string;
  period: string;
  role: string;
  /** One-line card summary on the home page. */
  summary: string;
  stack: string[];
  study: {
    lead: string;
    sections: CaseSection[];
    outcome: string[];
    metrics?: Metric[];
  };
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  /** 0–100, drives the meter width. */
  value: number;
}

export interface Content {
  htmlLang: string;
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  nav: {
    items: NavItem[];
    resume: string;
    resumeAria: string;
    resumeMenuAria: string;
    openMenu: string;
    closeMenu: string;
    langLabel: string;
    switchTo: string;
    skipToContent: string;
    backToTop: string;
  };
  hero: {
    status: string;
    role: string;
    firstName: string;
    lastName: string;
    lead: string;
    stackLine: string[];
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
    stats: Metric[];
    location: string;
  };
  work: {
    label: string;
    title: string;
    intro: string;
    viewCase: string;
    all: string;
    projects: Project[];
  };
  experience: {
    label: string;
    title: string;
    intro: string;
    present: string;
    items: ExperienceItem[];
    educationLabel: string;
    education: EducationItem[];
  };
  stack: {
    label: string;
    title: string;
    intro: string;
    groups: StackGroup[];
    note: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    languagesLabel: string;
    languages: LanguageSkill[];
    factsLabel: string;
    facts: { label: string; value: string }[];
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
      tooShort: string;
      fallbackNote: string;
      fallbackCta: string;
    };
    directLabel: string;
    copy: string;
    copied: string;
  };
  footer: {
    built: string;
    rights: string;
    availability: string;
  };
  caseStudy: {
    back: string;
    overview: string;
    role: string;
    period: string;
    stackLabel: string;
    outcome: string;
    next: string;
    liveSite: string;
    sourceCode: string;
    contactCta: string;
    contactLead: string;
  };
  notFound: {
    title: string;
    lead: string;
    cta: string;
  };
}
