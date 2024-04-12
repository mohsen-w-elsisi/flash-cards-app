<script lang="ts">
  import type { Deck } from "@/types";
  import DeckPreview from "./DeckPreview.svelte";
  import InputArea from "./InputArea.svelte";
  import { editDeck } from "@/storage/storageOperations";

  export let deck: Deck;

  export function showEditDialog() {
    dialog.showModal();
  }

  function saveDeckChanges() {
    editDeck(deck.ID, { name: newName, color: newColor });
  }

  let dialog: HTMLDialogElement;

  let newName = deck.name;
  let newColor = deck.color;
</script>

<dialog bind:this={dialog} class="modal modal-bottom sm:modal-middle">
  <span class="modal-box sm:flex sm:w-fit">
    <DeckPreview name={newName} color={newColor} />

    <div class="sm:ml-4 flex flex-col">
      <h2 class="hidden sm:block text-4xl text-center my-auto">Edit Deck</h2>

      <InputArea bind:name={newName} bind:color={newColor} />

      <span class="modal-action justify-normal">
        <form method="dialog" class="flex gap-3 flex-1">
          <button class="btn flex-1">cancel</button>
          <button class="btn btn-primary flex-1" on:click={saveDeckChanges}>
            save
          </button>
        </form>
      </span>
    </div>
  </span>
</dialog>
