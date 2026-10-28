import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "header";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      // Primary: Discord Blurple CTA
      primary:
        "bg-[#5865f2] hover:bg-[#3442d9] text-[#ffffff] rounded-[12px]",
      // Secondary: Crisp white pill/card button
      secondary:
        "bg-[#ffffff] hover:bg-[#f6f6f6] text-[#23272a] rounded-[12px] border border-[#23272a]/10",
      // Ghost: Outlined transparent button
      ghost:
        "bg-transparent hover:bg-white/10 text-[#ffffff] border border-white/20 rounded-[12px]",
      // Header: Pill button for navigation actions
      header:
        "bg-[#ffffff] hover:bg-[#f6f6f6] text-[#000000] rounded-[16px]",
    };

    const sizeStyles = {
      sm: "text-sm px-3.5 py-2 gap-1.5",
      md: "text-base px-5 py-3 gap-2",
      lg: "text-base px-6 py-4 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
