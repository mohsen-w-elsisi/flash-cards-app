<script lang="ts">
  import { editCard } from "@/storage/storageOperations";
  import type { Card, ColorTheme } from "@/types";
  import { THEME_CONTEXT_KEY } from "@/ui/colors";
  import { getContext } from "svelte";
  import Inputs from "./Inputs.svelte";
  import Dialog from "@/ui/Dialog.svelte";
  import DeleteDialog from "@/ui/DeleteDialog.svelte";
  import type { Readable } from "svelte/store";

  export let card: Card;
  export let onSave: () => any = () => undefined;
  export let onCancel: () => any = () => undefined;

  export function showEditDialog() {
    newFrontFace = card.frontFace;
    newBackFace = card.backFace;

    showDialog();
  }

  function saveCardChanges() {
    editCard(deckID, card.ID, {
      frontFace: newFrontFace,
      backFace: newBackFace,
    });

    onSave();
  }

  let showDialog: () => void;
  let showDeleteDialog: () => void;

  let newFrontFace = card.frontFace;
  let newBackFace = card.backFace;

  let deckID: string = getContext("deckID");
  let theme: Readable<ColorTheme> = getContext(THEME_CONTEXT_KEY);

  let disableSubmission = false;
  $: disableSubmission = newFrontFace == "" || newBackFace == "";
</script>

<Dialog bind:showDialog>
  <Inputs bind:frontFace={newFrontFace} bind:backFace={newBackFace} />

  <form method="dialog" slot="action">
    <button on:click={onCancel}>cancel</button>
    <button on:click={showDeleteDialog}>delete</button>
    <button
      class="btn {$theme.button}"
      on:click={saveCardChanges}
      disabled={disableSubmission}
    >
      save
    </button>
  </form>
</Dialog>

<DeleteDialog type="card" {deckID} cardID={card.ID} bind:showDeleteDialog />
