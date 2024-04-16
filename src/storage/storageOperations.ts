import { derived, get, readonly, writable } from "svelte/store";
import storageProvider from "./storageProviders";
import type { Card, Deck, UnsavedCard, UnsavedDeck } from "@/types";

const decks = writable(storageProvider.load());

decks.subscribe(storageProvider.save);

function makeID() {
  return `${Math.random()}`.replace(".", "");
}

function overwriteDeckInDecks(deckID: string, editor: (deck: Deck) => Deck) {
  decks.update((oldDecks) =>
    oldDecks.map((deck) => (deck.ID == deckID ? editor(deck) : deck))
  );
}

export function getDecks() {
  return readonly(decks);
}

export function getDeck(deckID: string) {
  return derived(decks, (_decks) =>
    _decks.reduce((prev, cur) => (cur.ID == deckID ? cur : prev))
  );
}

export function addDeck(unsavedDeck: UnsavedDeck) {
  const newCardID = makeID();

  const newDeck: Deck = {
    ...unsavedDeck,
    ID: newCardID,
    cards: [],
    attempts: [],
  };

  decks.update((oldDecks) => [...oldDecks, newDeck]);

  return newCardID;
}

export function removeDeck(deckID: string) {
  decks.update(($decks) => $decks.filter((deck) => deck.ID != deckID));
}

export function editDeck(deckID: string, newDeck: UnsavedDeck) {
  overwriteDeckInDecks(deckID, (deck) => ({ ...deck, ...newDeck }));
}

export function getCard(deckID: string, cardID: string) {
  return derived(decks, (_decks) =>
    _decks.reduce<Card>(
      (prevDeck, curDeck) =>
        curDeck.ID == deckID
          ? curDeck.cards.reduce((prevCard, curCard) =>
              curCard.ID == cardID ? curCard : prevCard
            )
          : prevDeck,
      { ID: "", frontFace: "", backFace: "" }
    )
  );
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

export function editCard(
  deckID: string,
  cardID: string,
  unsavedCard: UnsavedCard
) {
  const adjustedCard: Card = {
    ID: cardID,
    ...unsavedCard,
  };

  overwriteDeckInDecks(deckID, (deck) => ({
    ...deck,
    cards: deck.cards.map((card) => (card.ID == cardID ? adjustedCard : card)),
  }));
}

export function removeCard(deckID: string, cardID: string) {
  overwriteDeckInDecks(deckID, (deck) => ({
    ...deck,
    cards: deck.cards.filter((card) => card.ID != cardID),
  }));
}
