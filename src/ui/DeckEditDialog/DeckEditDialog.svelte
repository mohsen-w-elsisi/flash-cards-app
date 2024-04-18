<script lang="ts">
  import type { Deck } from "@/types";
  import DeckPreview from "./DeckPreview.svelte";
  import InputArea from "./InputArea.svelte";
  import { editDeck } from "@/storage/storageOperations";
  import Dialog from "../Dialog.svelte";
  import DeleteDialog from "../DeleteDialog.svelte";

  export let deck: Deck;
  export let onSave: () => any = () => undefined;
  export let onCancel: () => any = () => undefined;

  export function showEditDialog() {
    newName = deck.name;
    newColor = deck.color;

    showDialog();
  }

  function saveDeckChanges() {
    editDeck(deck.ID, { name: newName, color: newColor });
    onSave();
  }

  let showDialog: () => void;
  let showDeleteDialog: () => void;

  let newName = deck.name;
  let newColor = deck.color;
</script>

<Dialog
  bind:showDialog
  modalBoxStyling="sm:flex sm:w-fit"
  disableAutoActionsLayout
>
  <DeckPreview name={newName} color={newColor} />

  <div class="sm:ml-4 flex flex-col">
    <h2 class="hidden sm:block text-4xl text-center my-auto">Edit Deck</h2>

    <InputArea bind:name={newName} bind:color={newColor} />

    <span class="modal-action-full-width">
      <form method="dialog">
        <button on:click={onCancel}>cancel</button>
        <button on:click={showDeleteDialog}>delete</button>
        <button class="btn btn-primary" on:click={saveDeckChanges}>
          save
        </button>
      </form>
    </span>
  </div>
</Dialog>

<DeleteDialog type="deck" deckID={deck.ID} bind:showDeleteDialog />
