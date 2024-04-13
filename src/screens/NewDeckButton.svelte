<script lang="ts">
  import { addDeck, getDeck, removeDeck } from "@/storage/storageOperations";
  import type { Deck } from "@/types";
  import DeckEditDialog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";

  function makeNewCard() {
    const newDeckID = addDeck({ name: "", color: "yellow" });
    newDeck = getDeck(newDeckID);
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

<button
  class="card border-2 border-base-content border-dashed flex flex-col justify-center"
  on:click={makeNewCard}
>
  <span class="text-base-content text-xl text-center w-full">add card ＋</span>
</button>

<DeckEditDialog
  bind:deck={newDeck}
  bind:showEditDialog
  onSave={resetNewDeck}
  onCancel={deleteDeckJustCreated}
/>
