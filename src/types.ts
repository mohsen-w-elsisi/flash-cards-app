export interface Deck {
  ID: string;
  name: string;
  color: Color;
  cards: Card[];
  attempts: Attempt[];
}

export interface Card {
  ID: string;
  frontFace: string;
  backFace: string;
}

export interface Attempt {
  date: number; //UCT
  duration: number;
  numberOfCards: number;
  mistakes: string[];
}

export interface UnsavedDeck {
  name: string;
  color: Color;
}

export interface UnsavedCard {
  frontFace: string;
  backFace: string;
}

export type Color = "red" | "yellow" | "green" | "magenta" | "blue";

export interface ColorProps {
  emoji: string;
  theme: ColorTheme;
}

export interface ColorTheme {
  background: string;
  button: string;
}

export interface StorageProvider {
  load: () => Deck[];
  save: (decks: Deck[]) => void;
}
