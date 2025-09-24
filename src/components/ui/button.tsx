import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold shadow-lg border-2 border-amber-400 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-300 hover:to-orange-300 hover:shadow-yellow-300/40 transition-all duration-200",
        variant === "outline" &&
          "bg-white text-amber-600 border-amber-400 hover:bg-yellow-50",
        className
      )}
      {...props}
    />
  );
}
