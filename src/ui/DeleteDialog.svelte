<script lang="ts">
  import { removeCard, removeDeck } from "@/storage/storageOperations";
  import Dialog from "./Dialog.svelte";

  export let type: "deck" | "card";
  export let deckID: string;
  export let cardID = "";

  export function showDeleteDialog() {
    showDialog();
  }

  function deleteThing() {
    if (type == "deck") {
      removeDeck(deckID);
    } else {
      removeCard(deckID, cardID);
    }
  }

  let showDialog: () => void;
</script>

<Dialog bind:showDialog>
  <h2 class="text-4xl">are you sure you want to delete this {type}?</h2>

  <form method="dialog" slot="action">
    <button>cancel</button>
    <button class="btn btn-error" on:click={deleteThing}>delete</button>
  </form>
</Dialog>
