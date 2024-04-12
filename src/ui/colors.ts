import type { Color } from "@/types";

export const colors: readonly Color[] = [
  "blue",
  "green",
  "magenta",
  "red",
  "yellow",
];

export const deckColorMap: { [k in Color]: { class: string; emoji: string } } =
  {
    blue: { class: "bg-blue-300", emoji: "🔵" },
    green: { class: "bg-green-300", emoji: "🟢" },
    magenta: { class: "bg-blue-400", emoji: "🟣" },
    yellow: { class: "bg-yellow-200", emoji: "🟡" },
    red: { class: "bg-red-300", emoji: "🔴" },
  } as const;
