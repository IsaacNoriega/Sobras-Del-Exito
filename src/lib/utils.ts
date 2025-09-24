import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina clases de Tailwind de forma condicional y evita conflictos
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}
