import type { Content } from "./types";

export const en: Content = {
  htmlLang: "en",

  meta: {
    title: "Anas Chaabane — Full Stack Developer",
    titleTemplate: "%s · Anas Chaabane",
    description:
      "Full Stack Developer with 4 years in production. I build fast, data-dense products with React, Next.js, TypeScript, NestJS and D3 — and I measure the difference.",
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "D3.js",
      "GraphQL",
      "Power BI extensions",
      "Qlik extensions",
      "Tunisia",
      "Sousse",
      "Anas Chaabane",
    ],
    ogAlt: "Anas Chaabane — Full Stack Developer",
  },

  nav: {
    items: [
      { id: "work", label: "Work" },
      { id: "experience", label: "Experience" },
      { id: "stack", label: "Stack" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    resume: "Résumé",
    resumeAria: "Download résumé",
    resumeMenuAria: "Résumé language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
    switchTo: "Voir en français",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
  },

  hero: {
    status: "Open to opportunities",
    role: "Full Stack Developer",
    firstName: "Anas",
    lastName: "Chaabane",
    lead:
      "Four years shipping production software. I work across the JavaScript stack — React and Next.js on the front, Node and NestJS behind it — and I spend most of my time on the part people actually feel: how fast it loads, and how it holds up under real data.",
    stackLine: ["TypeScript", "React", "Next.js", "NestJS", "GraphQL", "D3.js"],
    primaryCta: "View selected work",
    secondaryCta: "Résumé",
    scrollHint: "Scroll",
    location: "Sousse, Tunisia · Remote-friendly · GMT+1",
    stats: [
      { value: "4", label: "Years in production" },
      { value: "20+", label: "Shipped projects" },
      { value: "5+", label: "Developers led" },
      { value: "3", label: "Languages spoken" },
    ],
  },

  work: {
    label: "Selected work",
    title: "Things I built, and what changed because of them",
    intro:
      "A short list rather than a long one. Each of these shipped to real users, and each has a write-up covering the problem, the architecture and the outcome.",
    viewCase: "Read case study",
    all: "All work",
    projects: [
      {
        slug: "truechart",
        name: "Truechart Plus",
        tagline: "IBCS-compliant chart engines inside Power BI and Qlik",
        category: "Data visualization · Vayetek",
        period: "2026 — Present",
        role: "Lead Full Stack Developer",
        summary:
          "React and D3 IBCS-compliant visualization extensions running inside Power BI and Qlik Sense, built for datasets large enough that a naive render locks up the host application.",
        stack: ["React", "TypeScript", "D3.js", "Power BI API", "Qlik Sense API", "Rollup"],
        study: {
          lead:
            "Designed to streamline data visualization and teamwork, TRUECHART enhances IBCS clarity with real-time commenting, flexible pivoting, and planning features like splashing and scenarios—enabling insight, collaboration, and strategy in one place.",
          sections: [
            {
              heading: "The problem",
              body: [
                "Power BI and Qlik both expose an extension API, and both hand you the same hard constraint: your visual runs inside their update loop, on their data model, within their memory budget. A chart that renders comfortably in a standalone React app will stutter — or freeze the entire report — once it has to redraw on every cross-filter, every resize and every selection change.",
                "The clients asking for these visuals are not asking for decoration. They want encodings the stock library cannot express: layered comparisons, custom hierarchies, domain-specific scales, over datasets in the tens of thousands of rows.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "Every visual is split into three layers. A data layer reshapes the host's data view into a flat, typed structure. A layout layer built on D3 computes scales, stacks and paths, and never touches the DOM. A thin React layer paints exactly what the layout layer produced.",
                "Keeping D3 out of the DOM is the decision that makes the rest work. There is no double bookkeeping between two libraries that both want to own nodes, no orphaned SVG after an update, and the layout layer is testable without a browser.",
              ],
              list: [
                "Memoized layout computation keyed on the host's data revision, so a resize never recomputes scales",
                "Canvas-backed rendering paths for series past the point where SVG stops being viable",
                "A shared token layer so every extension inherits the report theme instead of hardcoding colour",
                "Property-pane schemas typed end to end, so a formatting option cannot exist in the UI without a handler",
              ],
            },
            {
              heading: "Leading the work",
              body: [
                "I lead a team of five-plus developers here: setting the architecture, reviewing every pull request, and clearing whatever is blocking someone before it eats a sprint. Review is where most of the performance work actually happens — the difference between a visual that redraws in 16ms and one that takes 400ms is usually four lines inside a render path.",
                "Alongside that I refactored a legacy React codebase in the same product, cutting unnecessary re-renders by roughly 25% and making the interface measurably quicker to respond.",
              ],
            },
          ],
          outcome: [
            "Chart components delivered on schedule, with product managers and designers as partners rather than clients",
            "25% fewer re-renders across the refactored legacy React codebase",
            "Sprint velocity up after taking on pull-request review and blocker-clearing for the team",
          ],
          metrics: [
            { value: "−25%", label: "React re-renders" },
            { value: "5+", label: "Developers led" },
            { value: "2", label: "BI platforms targeted" },
          ],
        },
      },
      {
        slug: "mnadhem",
        name: "Mnadhem",
        tagline: "An operations hub built for how Tunisian retail actually works",
        category: "Product · Founder and engineer",
        period: "2026 — Present",
        role: "Full Stack Developer",
        summary:
          "Internal operations, cash-flow tracking and inventory for small and mid-sized Tunisian retail, fashion and D2C brands — designed around cash, informal suppliers and multi-channel selling.",
        stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
        study: {
          lead:
            "Most inventory software assumes a business that banks everything, buys from invoiced suppliers, and sells through one channel. A large share of Tunisian retail does none of those three. Mnadhem is built for the business that actually exists.",
          sections: [
            {
              heading: "The problem",
              body: [
                "Small and mid-sized retail, fashion and direct-to-consumer brands here run on a spreadsheet, a notebook and a group chat. Stock lives in one place, cash in another, and the reconciliation between them happens in someone's head at the end of the week — which is exactly when it is too late to act on.",
                "Imported tools fail for structural reasons, not cosmetic ones. They assume card payments, invoiced suppliers, a single sales channel, and a tax model that does not match. The gap is not translation. It is the data model.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "I started from the cash ledger rather than the product catalogue. Every movement — a sale, a supplier payment, a return, a delivery fee, an owner withdrawal — is an entry against an account, and inventory movement is derived from it. That inversion is what makes the numbers reconcile without a weekly ritual.",
                "The interface is built for speed of entry over completeness of data. Recording a sale takes one screen and no required fields beyond the ones that affect money, because a tool slower than the notebook simply does not get used.",
              ],
              list: [
                "Double-entry cash ledger as the source of truth, with inventory as a projection over it",
                "Multi-channel sales capture: shop floor, social DMs, delivery partners",
                "Supplier accounts that tolerate partial, informal and out-of-order payment",
                "Role-scoped access so an owner, a shop manager and a stockkeeper each get one surface",
              ],
            },
            {
              heading: "Architecture",
              body: [
                "Next.js App Router on the front with server components on every read path, so list views ship almost no client JavaScript. NestJS behind it with a module per domain — ledger, inventory, catalogue, identity — and PostgreSQL underneath, with the ledger tables append-only.",
                "Append-only was a deliberate constraint. A corrected mistake becomes a reversing entry rather than an edit, so the history behind a disputed number is always recoverable. In a cash business, that is the feature.",
              ],
            },
          ],
          outcome: [
            "In active development and use, with the data model validated against real shop workflows rather than assumptions",
            "Owner dashboard answers the two questions that matter daily: what is on hand, and what is owed",
            "Built as a product I own end to end — research, data modelling, API, interface and rollout",
          ],
        },
      },
      {
        slug: "dieture-website",
        name: "Dieture Website",
        tagline: "The front door for a 10,000-customer subscription business",
        category: "Product · Dieture",
        period: "2023 — 2026",
        role: "Full Stack Developer, team of three",
        summary:
          "The official Dieture site — meal-plan discovery, dietitian booking, addons, subscription management and onboarding, with a headless CMS and funnel tracking behind it. Led the build with two other developers.",
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "GraphQL",
          "Headless CMS",
        ],
        study: {
          lead:
            "A meal subscription is a considered purchase. The website has to explain a product people will eat every day, take a sign-up that involves real choices, and then stay useful to that customer for as long as they subscribe. It is a storefront, an onboarding flow and an account area that all have to feel like one thing.",
          sections: [
            {
              heading: "The problem",
              body: [
                "Selling a subscription is not selling a product. A visitor has to understand the plans, trust the nutrition behind them, pick something that fits their goals, and then keep managing that choice long after the first purchase — pausing, changing plan, adding items, booking a dietitian.",
                "Doing all of that on one site means the marketing surface and the account surface cannot be two products bolted together, which is the usual outcome once the pages marketing owns and the flows engineering owns start drifting apart.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "I led the build with two other developers. We treated content as data from the start: plans, copy and campaign pages come from a headless CMS, so marketing can change an offer or launch a landing page without a deploy and without a developer in the loop.",
                "Everything that affects conversion is instrumented. Event tracking runs the length of the funnel — plan view, plan selection, onboarding step, checkout — so \"where do people drop out\" has an answer in the data rather than an opinion in a meeting.",
              ],
              list: [
                "Meal-plan discovery and comparison, driven from CMS content",
                "Dietitian appointment booking",
                "Addon purchase and subscription management for existing customers",
                "End-to-end onboarding, from first visit to an active subscription",
                "Marketing tooling and funnel event tracking wired through the whole flow",
              ],
            },
            {
              heading: "Three developers, one front end",
              body: [
                "Three people on one front end only works if the boundaries are decided before the code is. We split by flow rather than by layer — discovery, onboarding, account — over a shared component and data layer, so two of us were rarely editing the same file and the seams between flows stayed visible in review.",
              ],
            },
          ],
          outcome: [
            "30% increase in online sales in the first quarter after launch",
            "Higher engagement across the plan-discovery and onboarding flows",
            "Marketing ships copy, plans and campaign pages without a deploy",
            "Serves a customer base of 10,000+ active subscribers",
          ],
          metrics: [
            { value: "+30%", label: "Online sales, first quarter" },
            { value: "10,000+", label: "Active users" },
            { value: "−25%", label: "Page load time" },
          ],
        },
      },
      {
        slug: "dieture-platform",
        name: "Dieture Operations Platform",
        tagline: "The software that runs a meal-subscription business end to end",
        category: "Internal platform · Dieture",
        period: "2023 — 2026",
        role: "Full Stack Developer",
        summary:
          "A microservices backend, three role-specific field apps and a custom ERP/CRM backoffice running subscriptions, kitchen, packing, delivery and B2B for 10,000+ active customers.",
        stack: [
          "React",
          "TypeScript",
          "Node.js",
          "NestJS",
          "Microservices",
          "PostgreSQL",
          "GraphQL",
        ],
        study: {
          lead:
            "Dieture does not outsource the hard part. It owns the kitchen, the packing line and the drivers, so a subscription is not a transaction that ends at checkout — it is a meal that has to be cooked, packed, routed and delivered, every day, for thousands of customers at once. The software that coordinates all of that is what I spent three years building.",
          sections: [
            {
              heading: "The problem",
              body: [
                "An operation spanning a kitchen, a packing line, a delivery fleet and a support desk produces the same information four times, in four places. Before the platform, each of those ran on its own tool — spreadsheets, chat threads, printed sheets — and none of them agreed with the others.",
                "The cost shows up as questions nobody can answer quickly: where is this subscription in today's cycle, why did this delivery miss, how much of this ingredient does tomorrow need. Past 10,000 active customers, the gaps between tools stopped being an annoyance and became the constraint on growth.",
              ],
            },
            {
              heading: "The system",
              body: [
                "One microservices backend holds the domain — subscriptions, customers, menus, inventory, deliveries — and every surface above it is a thin, role-specific client over that single model. No business rule gets re-implemented in an app.",
                "Each field app is deliberately narrow. A chef mid-service, a packer at the line and a driver holding a phone in one hand do not need the same screen, and none of them needs a general-purpose one. Each app answers the single question its user has at that moment.",
              ],
              list: [
                "Kitchen app — production requirements per service, derived from live subscription data into what actually has to be cooked",
                "Packer app — the packing line's queue, item by item, with verification built into the flow",
                "Driver app — the day's route and stops, built for one-handed use in a vehicle",
                "Backoffice dashboard — the control surface over all of it",
              ],
            },
            {
              heading: "The dashboard",
              body: [
                "The dashboard replaced the most tools. It is a custom ERP and CRM in one: subscriptions with their full history, customer progress, deliveries, packing, kitchen workflows, B2B retailer accounts, and internal capture of complaints and feedback — plus the configuration that drives every other app in the platform.",
                "Two parts took the most work. Delivery coverage is modelled as editable geographic zones rather than a list of accepted areas, so operations can redraw what is serviceable without a developer. And every meaningful action writes a structured log entry, which is what turned \"why did this happen\" from an investigation into a query.",
              ],
              list: [
                "Custom delivery-coverage mapping, editable by the operations team",
                "Subscription lifecycle — pauses, plan changes, renewals and full customer history on one timeline",
                "B2B retailer accounts alongside direct consumer subscriptions",
                "Advanced theming and configuration, propagated out to the field apps",
                "Detailed structured logging and real-time operational insight",
              ],
            },
            {
              heading: "My part in it",
              body: [
                "I contributed heavily to the backend and owned large parts of the dashboard across three years — the complicated features rather than the screens: coverage mapping, the configuration layer, subscription state handling, and the logging that made everything else debuggable.",
                "Building where a bug has a physical consequence changes how you work. A wrong number in the kitchen app is wasted food; a wrong route is a customer who does not eat that day. That is the discipline this codebase taught me.",
              ],
            },
          ],
          outcome: [
            "Replaced multiple manual tools with one internal platform used across kitchen, packing, delivery, support and management",
            "Measurably better operational efficiency, data accuracy and cross-team visibility",
            "Supported the company's growth past 10,000 active users",
            "API response times cut by 30% across the services I worked on",
          ],
          metrics: [
            { value: "10,000+", label: "Active users served" },
            { value: "4", label: "Apps on one backend" },
            { value: "−30%", label: "API response time" },
          ],
        },
      },


      {
        slug: "palletflow",
        name: "PalletFlow",
        tagline: "Three applications, one logistics pipeline",
        category: "Freelance · Logistics",
        period: "2025",
        role: "Full Stack Developer",
        summary:
          "An admin dashboard, a driver app and a partner portal over a single NestJS backend — covering inventory, mission assignment, QR-scanned delivery and issue tracking.",
        stack: ["React", "Radix UI", "Tailwind CSS", "NestJS", "TypeScript", "PostgreSQL"],
        study: {
          lead:
            "Pallet logistics has three audiences with almost nothing in common: the operator assigning work, the driver executing it on a phone in the field, and the partner who only wants to know where their goods are. PalletFlow is one system with three deliberately different front doors.",
          sections: [
            {
              heading: "The problem",
              body: [
                "The same mission means three different things depending on who is looking. To the operator it is a row in a queue with a cost and an assignee. To the driver it is one task at a time, at arm's length, possibly with no signal. To the partner it is a status and a date.",
                "One interface for all three would have failed all three. Three disconnected apps would have meant three sources of truth.",
              ],
            },
            {
              heading: "Approach",
              body: [
                "One NestJS backend, one domain model, three clients over a shared component library. The shared layer is small on purpose — tokens, primitives, the API client, the auth flow. Everything above that is written per audience.",
                "The driver app took the strictest constraints: large touch targets, a QR scanner as the primary interaction, and a UI that assumes the connection will drop. Scans queue locally and reconcile when the device is back online, because a driver standing in a warehouse should not be blocked by a signal bar.",
              ],
              list: [
                "Admin dashboard — inventory, mission assignment, issue tracking, partner management",
                "Transporter app — mission list, task-at-a-time flow, QR scanning, proof of delivery",
                "Partner app — read-only mission and delivery visibility, scoped to the partner's own goods",
                "Radix UI primitives throughout, so keyboard and screen-reader behaviour came correct by default",
              ],
            },
            {
              heading: "Architecture",
              body: [
                "NestJS modules split by domain behind a role-based guard layer, so a partner token can only ever resolve its own missions — enforced at the query level rather than by filtering the response.",
                "Mission state moves through an explicit state machine, and every transition is recorded with its actor and timestamp. That is what turned issue tracking into a read over existing data instead of a separate feature.",
              ],
            },
          ],
          outcome: [
            "Three applications delivered against one backend and one design system",
            "QR-scanned confirmation replaced paper proof-of-delivery in the field",
            "Full mission audit trail available to operators without a separate reporting tool",
          ],
          metrics: [
            { value: "3", label: "Applications shipped" },
            { value: "1", label: "Shared design system" },
            { value: "100%", label: "Missions auditable" },
          ],
        },
      },
    ],
  },

  experience: {
    label: "Experience",
    title: "Four years, three teams, one throughline: make it faster",
    intro:
      "Every role below has a number attached to it, because the work was measured. These are the ones that held up afterwards.",
    present: "Present",
    items: [
      {
        id: "vayetek",
        company: "Vayetek",
        role: "Lead Full Stack Developer",
        period: "Feb 2026 — Present",
        location: "Sousse, Tunisia",
        current: true,
        summary:
          "Leading development of custom data-visualization extensions for Power BI and Qlik, and the team that builds them.",
        highlights: [
          "Built custom Power BI and Qlik visualization extensions in React and D3.js, running inside each host's rendering lifecycle.",
          "Led a team of 5+ developers and owned pull-request review, clearing blockers early and lifting sprint velocity.",
          "Refactored a legacy React codebase, cutting re-renders by 25% and making the UI measurably quicker.",
          "Partnered with product managers and UI/UX designers to ship high-performance chart components on schedule.",
        ],
        metrics: [
          { value: "−25%", label: "React re-renders" },
          { value: "5+", label: "Developers led" },
        ],
        stack: ["React", "TypeScript", "D3.js", "Power BI API", "Qlik Sense API"],
      },
      {
        id: "dieture",
        company: "Dieture",
        role: "Full Stack Developer",
        period: "Aug 2023 — Feb 2026",
        location: "Sousse, Tunisia",
        summary:
          "Three years on the platform behind a Qatari meal-subscription business that owns its own kitchen, packing line and delivery fleet — public website, microservices backend, and the internal system that runs the operation.",
        highlights: [
          "Led the public website build with two other developers, contributing to a 30% increase in online sales in the first quarter after launch.",
          "Contributed heavily to the microservices backend and to the internal dashboard — a custom ERP and CRM covering subscriptions, kitchen workflows, packing, deliveries, B2B retailers and customer history.",
          "Built the delivery-coverage mapping, the configuration and theming layer that drives the kitchen, driver and packer apps, and the structured logging behind operational reporting.",
          "Architected and optimised API endpoints, reducing response time by 30%.",
          "Engineered a scalable front-end architecture in Next.js and React, delivering 25% faster page loads.",
          "Introduced GraphQL for client-driven queries, eliminating over-fetching on data-heavy screens.",
          "Integrated a headless CMS and funnel event tracking so marketing ships offers and campaign pages without a deploy.",
        ],
        metrics: [
          { value: "10,000+", label: "Active users" },
          { value: "+30%", label: "Online sales" },
          { value: "−30%", label: "API response time" },
        ],
        stack: ["Next.js", "React", "Node.js", "NestJS", "GraphQL", "TypeScript", "PostgreSQL"],
      },
      {
        id: "enr-agri",
        company: "EnR Agri",
        role: "Frontend Developer",
        period: "Feb 2023 — Aug 2023",
        location: "Sousse, Tunisia",
        summary:
          "Front-end delivery on a Next.js product, focused on responsive UI and first-load performance.",
        highlights: [
          "Built responsive UI components with Next.js and Tailwind CSS, contributing to a 20% lift in user engagement.",
          "Applied server-side rendering, code splitting and lazy loading to cut load time by 40%.",
          "Integrated third-party services for reporting and data visualization.",
        ],
        metrics: [
          { value: "−40%", label: "Load time" },
          { value: "+20%", label: "User engagement" },
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      },
    ],
    educationLabel: "Education",
    education: [
      {
        id: "microverse",
        school: "Microverse",
        program: "Full-Stack Web Development",
        period: "May 2022 — Mar 2023",
        location: "Remote",
        points: [
          "1300+ hours of mastery-based full-stack curriculum",
          "15+ projects in React, Ruby on Rails and JavaScript",
          "Daily remote pair programming and Agile delivery",
        ],
      },
      {
        id: "polytechnique",
        school: "Ecole Polytechnique Sousse",
        program: "Preparatory Cycle for Engineering Studies",
        period: "Jun 2018 — Sep 2021",
        location: "Sousse, Tunisia",
        points: [
          "Intensive mathematics, physics and engineering fundamentals",
          "Analytical and problem-solving training for competitive national entrance exams",
        ],
      },
    ],
  },

  stack: {
    label: "Stack",
    title: "What I reach for",
    intro:
      "Tools I have shipped production software with, grouped by where they sit. The list is deliberately shorter than the list of tools I have touched.",
    groups: [
      {
        name: "Frontend",
        items: [
          "TypeScript",
          "React",
          "Next.js",
          "Redux",
          "Tailwind CSS",
          "Radix UI",
          "React Query",
          "Web Animations",
        ],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "NestJS",
          "GraphQL",
          "REST APIs",
          "Ruby on Rails",
          "PostgreSQL",
          "Prisma",
        ],
      },
      {
        name: "Data & visualization",
        items: [
          "D3.js",
          "Power BI extensions",
          "Qlik Sense extensions",
          "SQL",
          "Chart architecture",
        ],
      },
      {
        name: "Practice",
        items: [
          "Git",
          "Code review",
          "Agile / Scrum",
          "Web performance",
          "Accessibility",
          "CI/CD",
        ],
      },
    ],
    note:
      "Comfortable owning a feature from data model to interaction detail — and equally comfortable being the person who reviews yours.",
  },


  about: {
    label: "About",
    title: "Engineer first, but the interface is the product",
    paragraphs: [
      "I am a full stack developer based in Sousse, Tunisia, four years into building software that people use at work every day. My centre of gravity is the JavaScript and TypeScript ecosystem — React and Next.js on the front, Node and NestJS behind it — and my instinct on any feature is to ask what it will cost in load time before asking what it will look like.",
      "That started with an engineering preparatory cycle, which gave me the habit of measuring things, and continued through Microverse, where I wrote code in daily remote pair programming with people in other time zones. It is why code review is my favourite part of the job rather than an obligation: most of the performance work on a team happens inside someone else's pull request.",
      "Right now I lead a small team building data-visualization extensions for Power BI and Qlik — the kind of work where a careless render loop freezes someone's report. On the side I am building Mnadhem, an operations product for Tunisian retail businesses, because the tools available to them assume a business that does not exist here.",
    ],
    languagesLabel: "Languages",
    languages: [
      { name: "Arabic", level: "Native", value: 100 },
      { name: "English", level: "Proficient", value: 88 },
      { name: "French", level: "Advanced", value: 80 },
    ],
    factsLabel: "At a glance",
    facts: [
      { label: "Based in", value: "Sousse, Tunisia (GMT+1)" },
      { label: "Focus", value: "Full stack · React and NestJS" },
      { label: "Currently", value: "Lead Full Stack Developer at Vayetek" },
      { label: "Open to", value: "Full-time, contract and remote" },
    ],
  },

  contact: {
    label: "Contact",
    title: "Let's build something",
    lead:
      "Hiring, contracting, or just after a second opinion on an architecture decision — I read everything that comes through here and reply within a day or two.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      message: "Message",
      messagePlaceholder: "Tell me about the role, the project, or the problem.",
      submit: "Send message",
      sending: "Sending…",
      success:
        "Thank you — your message has been sent. It is in my inbox, and I reply within a day or two.",
      error:
        "That did not go through. Email me directly at anas.chaabane98@gmail.com and it will reach me.",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      tooShort: "A little more detail would help.",
      fallbackNote: "The form is not wired up yet — email works just as well.",
      fallbackCta: "Email me directly",
    },
    directLabel: "Direct",
    copy: "Copy",
    copied: "Copied",
  },

  footer: {
    built: "Designed and built by Anas Chaabane with Next.js and Tailwind CSS. No animation library — the motion here is CSS.",
    rights: "All rights reserved.",
    availability: "Open to opportunities",
  },

  caseStudy: {
    back: "Back to work",
    overview: "Overview",
    role: "Role",
    period: "Period",
    stackLabel: "Stack",
    outcome: "Outcome",
    next: "Next project",
    liveSite: "Live site",
    sourceCode: "Source code",
    contactCta: "Start a conversation",
    contactLead: "Working on something similar? I would like to hear about it.",
  },

  notFound: {
    title: "404 — Nothing here",
    lead: "That page does not exist, or it moved. The work is still where you left it.",
    cta: "Back home",
  },
};
