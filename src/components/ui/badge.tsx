import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blurple" | "outline" | "success";
}

export function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#2c2f33] text-[#babcd9] border border-[#50555f]/40",
    blurple: "bg-[#5865f2]/15 text-[#8891f2] border border-[#5865f2]/30",
    outline: "bg-transparent text-[#babcd9] border border-[#50555f]/60",
    success: "bg-[#57f287]/15 text-[#57f287] border border-[#57f287]/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
