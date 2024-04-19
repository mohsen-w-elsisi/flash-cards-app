<script lang="ts">
  import { addDeck, getDeck, removeDeck } from "@/storage/storageOperations";
  import type { Deck } from "@/types";
  import DeckEditDialog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";
  import { deckColorMap, themeOf } from "@/ui/colors";
  import { get } from "svelte/store";

  function makeNewCard() {
    const newDeckID = addDeck({ name: "", color: "yellow" });
    newDeck = get(getDeck(newDeckID));
    showEditDialog();
  }

  function resetNewDeck() {
    newDeck = {
      ID: "",
      name: "",
      color: "yellow",
      cards: [],
      attempts: [],
    };
  }

  function deleteDeckJustCreated() {
    removeDeck(newDeck.ID);
    resetNewDeck();
  }

  let newDeck: Deck = {
    ID: "",
    name: "",
    color: "yellow",
    cards: [],
    attempts: [],
  };

  let showEditDialog: () => void;
</script>

<button on:click={makeNewCard}>
  <span>add card ＋</span>
</button>

<DeckEditDialog
  bind:deck={newDeck}
  bind:showEditDialog
  theme={themeOf(newDeck)}
  onSave={resetNewDeck}
  onCancel={deleteDeckJustCreated}
/>

<style>
  button {
    @apply card
      border-2 border-base-content border-dashed
      flex flex-col justify-center;

    & > * {
      @apply text-base-content text-xl text-center w-full;
    }
  }
</style>
