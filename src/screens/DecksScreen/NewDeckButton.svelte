<script lang="ts">
  import { addDeck, getDeck, removeDeck } from "@/storage/storageOperations";
  import type { Deck } from "@/types";
  import DeckEditDialog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";
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

<button class="add-new-card-button" on:click={makeNewCard}>
  <span>add card ＋</span>
</button>

<DeckEditDialog
  bind:deck={newDeck}
  bind:showEditDialog
  onSave={resetNewDeck}
  onCancel={deleteDeckJustCreated}
/>
