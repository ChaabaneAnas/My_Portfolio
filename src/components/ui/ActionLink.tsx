import Link from "next/link";
import { cn } from "@/lib/cn";

export type Variant = "primary" | "ghost";

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
  "aria-label"?: string;
}

/** Shared with `ResumeMenu`, whose trigger must be a <button> yet look identical. */
export const actionBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px";

export const actionVariants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#04212a] hover:bg-[#67e3f5] focus-visible:bg-[#67e3f5] shadow-[0_0_0_0_rgba(34,211,238,0.35)] hover:shadow-[0_10px_30px_-12px_rgba(34,211,238,0.65)]",
  ghost:
    "border border-line bg-surface/60 text-text hover:border-accent/45 hover:bg-surface-2 hover:text-accent",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  external,
  download,
  className,
  ...rest
}: ActionLinkProps) {
  const classes = cn(actionBase, actionVariants[variant], className);

  if (external || download || href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
