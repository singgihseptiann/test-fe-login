import React from "react";
import { cn } from "@/lib/utils";
import { SpinnerProps } from "@/types/spinner.types";

export function Spinner({
  variant = "primary",
  size = "md",
  className,
  label,
  labelClassName,
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-8 w-8 border-4",
  };

  const variantClasses = {
    primary: "border-primary",
    secondary: "border-secondary",
    danger: "border-red-500",
    success: "border-green-500",
    white: "border-white",
    black: "border-black",
  };

  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <div
        className={cn(
          "animate-spin rounded-full border-t-transparent",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      />
      {label && <span className={cn(labelClassName)}>{label}</span>}
    </div>
  );
}
