<script lang="ts">
  import { editCard } from "@/storage/storageOperations";
  import type { Card, ColorTheme } from "@/types";
  import { THEME_CONTEXT_KEY } from "@/ui/colors";
  import { getContext } from "svelte";
  import CardEditModalInput from "./CardEditModalInput.svelte";

  export let card: Card;
  export let onSave: () => any = () => undefined;
  export let onCancel: () => any = () => undefined;

  export function showEditDialog() {
    newFrontFace = card.frontFace;
    newBackFace = card.backFace;

    dialog.showModal();
  }

  function saveCardChanges() {
    editCard(deckID, card.ID, {
      frontFace: newFrontFace,
      backFace: newBackFace,
    });

    onSave();
  }

  let dialog: HTMLDialogElement;

  let newFrontFace = card.frontFace;
  let newBackFace = card.backFace;

  let deckID: string = getContext("deckID");
  let theme: ColorTheme = getContext(THEME_CONTEXT_KEY);
</script>

<dialog bind:this={dialog} class="modal modal-bottom sm:modal-middle">
  <span class="modal-box">
    <CardEditModalInput
      bind:frontFace={newFrontFace}
      bind:backFace={newBackFace}
    />

    <span class="modal-action justify-normal">
      <form method="dialog" class="flex gap-3 flex-1">
        <button class="btn flex-1" on:click={onCancel}>cancel</button>
        <button class="btn flex-1 {theme.button}" on:click={saveCardChanges}>
          save
        </button>
      </form>
    </span>
  </span>
</dialog>
