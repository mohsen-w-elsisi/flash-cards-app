import type { Deck, StorageProvider } from "@/types";

const STORAGE_KEY = "decks";

function save(decks: Deck[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

function load(): Deck[] {
  const rawString = localStorage.getItem(STORAGE_KEY);
  if (rawString === null) return [];
  const decks = JSON.parse(rawString);
  return decks;
}

export default {
  load,
  save,
} as StorageProvider;
