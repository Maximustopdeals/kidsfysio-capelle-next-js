import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "text";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2.5 font-medium tracking-[0.04em] transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-cream hover:bg-ink",
  secondary:
    "bg-sage text-cream hover:bg-forest",
  outline:
    "border border-charcoal/20 text-charcoal hover:border-charcoal/50 hover:bg-charcoal/[0.03]",
  ghost:
    "text-sage hover:text-forest",
  text:
    "text-charcoal underline underline-offset-[6px] decoration-charcoal/25 hover:decoration-charcoal/60 px-0",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.8rem] rounded-full",
  md: "px-7 py-3.5 text-[0.9rem] rounded-full",
  lg: "px-9 py-4 text-[0.95rem] rounded-full",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const sizeClass = variant === "text" ? "text-[0.95rem]" : sizes[size];
  const classes = `${base} ${variants[variant]} ${sizeClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
