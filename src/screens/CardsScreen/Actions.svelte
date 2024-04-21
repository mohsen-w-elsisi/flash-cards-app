<script lang="ts">
  import History from "svelte-material-icons/History.svelte";
  import Edit from "svelte-material-icons/CircleEditOutline.svelte";
  import Add from "svelte-material-icons/Plus.svelte";
  import Check from "svelte-material-icons/CheckOutline.svelte";
  import { getContext } from "svelte";
  import DeckEditDialog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";
  import CardEditDialog from "./CardEditDialog/CardEditDialog.svelte";
  import type { Card, ColorTheme } from "@/types";
  import { get, type Readable } from "svelte/store";
  import { THEME_CONTEXT_KEY } from "@/ui/colors";
  import {
    addCard,
    getCard,
    getDeck,
    removeCard,
  } from "@/storage/storageOperations";
  import { review, viewAttempts } from "@/ui/navigations";

  const deckID: string = getContext("deckID");
  const deck = getDeck(deckID);

  function reviewDeck() {
    review(deckID);
  }

  function viewDeckAttempts() {
    viewAttempts(deckID);
  }

  function makeNewCard() {
    const newCardID = addCard(deckID, { frontFace: "", backFace: "" });
    newCard = get(getCard(deckID, newCardID));
    showCardEditDialog();
  }

  function deleteNewCard() {
    removeCard(deckID, newCard.ID);
    resetNewCard();
  }

  function resetNewCard() {
    newCard = { ID: "", frontFace: "", backFace: "" };
  }

  let showDeckEditDialog: () => void;
  let showCardEditDialog: () => void;

  let newCard: Card = { ID: "", frontFace: "", backFace: "" };

  let theme: Readable<ColorTheme> = getContext(THEME_CONTEXT_KEY);
</script>

<button on:click={viewDeckAttempts}><History size={30} /></button>
<button on:click={showDeckEditDialog}><Edit size={30} /></button>
<button on:click={makeNewCard}><Add size={30} /></button>
<button on:click={reviewDeck} disabled={$deck.cards.length == 0}>
  <Check size={30} />
</button>

<!-- dialogs -->

<DeckEditDialog
  deck={$deck}
  theme={$theme}
  bind:showEditDialog={showDeckEditDialog}
/>
<CardEditDialog
  card={newCard}
  bind:showEditDialog={showCardEditDialog}
  onSave={resetNewCard}
  onCancel={deleteNewCard}
/>

<style>
  button {
    @apply btn btn-ghost flex-1;
  }
</style>
