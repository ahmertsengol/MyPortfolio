import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";

export type ButtonProps =
  | ({ variant?: Variant; as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ variant?: Variant; as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

function composeClasses(variant: Variant): string {
  if (variant === "primary")
    return "inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium text-white border border-white/15 bg-white/10 backdrop-blur hover:bg-white/15 shadow-sm";
  if (variant === "secondary")
    return "inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium text-foreground/90 border border-white/10 hover:bg-white/10";
  if (variant === "accent")
    return "inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium text-white shadow-sm border border-white/10 bg-[linear-gradient(90deg,var(--accent),color-mix(in_srgb,var(--accent)_60%,#7c3aed))] hover:opacity-95";
  return "inline-flex items-center justify-center h-10 px-4 rounded-full text-sm font-medium hover:bg-white/10 border border-transparent";
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const baseProps = props as { variant?: Variant; className?: string; children?: React.ReactNode; as?: "button" | "a" };
    const { variant = "primary", className = "", children, as = "button" } = baseProps;
    const classes = `${composeClasses(variant)} ${className}`;
    if (as === "a") {
      const anchorProps = props as { href?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
      const { href, ...rest } = anchorProps;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} href={href} {...rest}>
          {children}
        </a>
      );
    }
    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

