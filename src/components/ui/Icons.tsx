import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </Svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M7 17 17 7m0 0H8.5M17 7v8.5" />
    </Svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M12 4v15m0 0 5.5-5.5M12 19l-5.5-5.5" />
    </Svg>
  );
}

export function Download(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </Svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="m6 9.5 6 6 6-6" />
    </Svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="2.5" />
      <path {...stroke} d="m4 7.5 7.1 5.2a1.5 1.5 0 0 0 1.8 0L20 7.5" />
    </Svg>
  );
}

export function GitHub(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </Svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.85 1.26-1.85 2.56v4.92h-4v-11Z"
      />
    </Svg>
  );
}

export function Copy(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...stroke} x="9" y="9" width="11" height="11" rx="2" />
      <path {...stroke} d="M15 6.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h.5" />
    </Svg>
  );
}

export function Check(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M4 8h16M4 16h16" />
    </Svg>
  );
}

export function Close(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="m6 6 12 12M18 6 6 18" />
    </Svg>
  );
}

export function Star(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        {...stroke}
        d="M12 3.5 14.6 9l5.9.8-4.3 4.1 1.05 5.9L12 17l-5.25 2.8L7.8 13.9 3.5 9.8 9.4 9 12 3.5Z"
      />
    </Svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...stroke} cx="12" cy="12" r="8.5" />
      <path {...stroke} d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" />
    </Svg>
  );
}

export function Spark(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" />
    </Svg>
  );
}
