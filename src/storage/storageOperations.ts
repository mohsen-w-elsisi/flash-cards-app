import { derived, readonly, writable } from "svelte/store";
import storageProvider from "./storageProviders";
import type { Attempt, Card, Deck, UnsavedCard, UnsavedDeck } from "@/types";

const decks = writable(storageProvider.load());

decks.subscribe(storageProvider.save);

function makeID() {
  return `${Math.random()}`.replace(".", "");
}

function overwriteDeckInDecks(deckID: string, editor: (deck: Deck) => Deck) {
  decks.update(($decks) =>
    $decks.map((deck) => (deck.ID == deckID ? editor(deck) : deck))
  );
}

function findByID<T extends Card | Deck>(list: T[], ID: string): T {
  return list.reduce((prev, cur) => (cur.ID == ID ? cur : prev), {ID: ""} as T);
}

function removeByID<T extends Card | Deck>(list: T[], ID: string): T[] {
  return list.filter((item) => item.ID != ID);
}

export function getDecks() {
  return readonly(decks);
}

export function getDeck(deckID: string) {
  return derived(decks, ($decks) => findByID($decks, deckID));
}

export function addDeck(unsavedDeck: UnsavedDeck) {
  const newDeckID = makeID();

  const newDeck: Deck = {
    ...unsavedDeck,
    ID: newDeckID,
    cards: [],
    attempts: [],
  };

  decks.update(($decks) => [...$decks, newDeck]);

  return newDeckID;
}

export function removeDeck(deckID: string) {
  decks.update(($decks) => removeByID($decks, deckID));
}

export function editDeck(deckID: string, newDeck: UnsavedDeck) {
  overwriteDeckInDecks(deckID, (deck) => ({ ...deck, ...newDeck }));
}

export function getCard(deckID: string, cardID: string) {
  return derived(decks, ($decks) => {
    const deck = findByID($decks, deckID);
    const card = findByID(deck.cards, cardID);
    return card;
  });
}

export function addCard(deckID: string, unsavedCard: UnsavedCard) {
  const newCardID = makeID();

  const newCard: Card = {
    ID: newCardID,
    ...unsavedCard,
  };

  overwriteDeckInDecks(deckID, (deck) => ({
    ...deck,
    cards: [...deck.cards, newCard],
  }));

  return newCardID;
}

export function editCard(deckID: string, cardID: string, newCard: UnsavedCard) {
  const adjustedCard: Card = {
    ID: cardID,
    ...newCard,
  };

  overwriteDeckInDecks(deckID, (deck) => ({
    ...deck,
    cards: deck.cards.map((card) => (card.ID == cardID ? adjustedCard : card)),
  }));
}

export function removeCard(deckID: string, cardID: string) {
  overwriteDeckInDecks(deckID, (deck) => ({
    ...deck,
    cards: removeByID(deck.cards, cardID),
  }));
}

export function addAttempt(deckID: string, attempt: Attempt) {
  overwriteDeckInDecks(deckID, (deck) => ({
    ...deck,
    attempts: [...deck.attempts, attempt],
  }));
}
