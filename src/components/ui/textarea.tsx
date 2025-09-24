import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl border-2 border-amber-400 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}
