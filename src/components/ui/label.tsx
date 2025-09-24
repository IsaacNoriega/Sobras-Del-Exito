import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
  className={cn("mb-1 block text-base font-bold text-amber-700", className)}
      {...props}
    />
  );
}
