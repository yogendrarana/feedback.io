import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dedent(strings: TemplateStringsArray, ...values: any) {
  const raw = String.raw({ raw: strings }, ...values);
  const lines = raw.split('\n');
  const minIndent = lines.reduce((min, line) => {
    const match = line.match(/^(\s+)/);
    return match ? Math.min(min, match[1].length) : min;
  }, Infinity);

  return lines.map(line => line.slice(minIndent)).join('\n').trim();
}
