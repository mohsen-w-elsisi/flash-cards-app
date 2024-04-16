import type { Color, ColorProps } from "@/types";

export const colors: readonly Color[] = [
  "blue",
  "green",
  "magenta",
  "red",
  "yellow",
];

export const deckColorMap: { [k in Color]: ColorProps } = {
  blue: {
    emoji: "🔵",
    theme: {
      background: "bg-blue-300 text-gray-800",
      button: "blue-button",
    },
  },
  green: {
    emoji: "🟢",
    theme: {
      background: "bg-green-300 text-gray-800",
      button: "green-button",
    },
  },
  magenta: {
    emoji: "🟣",
    theme: {
      background: "bg-purple-300 text-gray-800",
      button: "magenta-button",
    },
  },
  yellow: {
    emoji: "🟡",
    theme: {
      background: "bg-yellow-200 text-gray-800",
      button: "yellow-button",
    },
  },
  red: {
    emoji: "🔴",
    theme: {
      background: "bg-red-300 text-gray-800",
      button: "red-button",
    },
  },
} as const;

export const THEME_CONTEXT_KEY = "color";
