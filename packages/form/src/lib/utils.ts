import JSConfetti from "js-confetti";
import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generate confetti animation:
export const generateConfetti = async () => {
  const jsConfetti = new JSConfetti();
  await jsConfetti.addConfetti({
      confettiColors: ["#fdd835", "#4caf50", "#2196f3", "#f44336", "#ff9800"],
      confettiRadius: 3,
      confettiNumber: 100,
  });
};