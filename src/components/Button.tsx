import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "text";
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
  "inline-flex items-center justify-center gap-2.5 font-nunito font-bold tracking-[0.04em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white shadow-lg shadow-forest/20 hover:bg-charcoal hover:-translate-y-0.5",
  secondary:
    "bg-sage text-charcoal hover:bg-forest hover:text-white",
  outline:
    "border-2 border-forest/20 text-forest hover:border-forest hover:bg-forest/5",
  ghost:
    "text-forest hover:text-charcoal hover:bg-forest/5",
  text:
    "text-charcoal underline underline-offset-[6px] decoration-charcoal/30 hover:decoration-charcoal px-0",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm rounded-full",
  md: "px-7 py-3.5 text-base rounded-full",
  lg: "px-9 py-4 text-lg rounded-full",
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
  const sizeClass = variant === "text" ? "text-base" : sizes[size];
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
