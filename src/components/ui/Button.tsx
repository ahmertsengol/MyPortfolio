import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
};

function composeClasses(variant: Variant): string {
  if (variant === "primary")
    return "inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 shadow-sm";
  if (variant === "secondary")
    return "inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium text-foreground bg-white/10 border border-white/20 hover:bg-white/15";
  return "inline-flex items-center justify-center h-10 px-4 rounded-full text-sm font-medium hover:bg-white/10 border border-transparent";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...rest }, ref) => {
    return (
      <button ref={ref} className={`${composeClasses(variant)} ${className}`} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

