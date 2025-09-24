import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold shadow border-2 border-amber-400 bg-yellow-100 text-yellow-800 transition-all duration-200",
        variant === "outline" &&
          "bg-white text-amber-600 border-amber-400",
        className
      )}
      {...props}
    />
  );
}
