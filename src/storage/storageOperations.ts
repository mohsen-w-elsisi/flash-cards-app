import { get, readonly, writable } from "svelte/store";
import storageProvider from "./storageProviders";
import type { Deck, UnsavedDeck } from "@/types";

const decks = writable(storageProvider.load());

decks.subscribe(storageProvider.save);

function makeID() {
  return `${Math.random()}`;
}

export function getDecks() {
  return readonly(decks);
}

export function addDeck(unsavedDeck: UnsavedDeck) {
  const newDeck: Deck = {
    ...unsavedDeck,
    ID: makeID(),
    cards: [],
    attempts: [],
  };

  decks.update((oldDecks) => [...oldDecks, newDeck]);
}

export function removeDeck(deckID: string) {
  decks.update(($decks) => $decks.filter((deck) => deck.ID != deckID));
}

export function editDeck(deckID: string, newDeck: UnsavedDeck) {
  decks.update((oldDecks) =>
    oldDecks.map(
      (deck) => (deck.ID != deckID ? deck : { ...deck, ...newDeck })
    )
  );
}
