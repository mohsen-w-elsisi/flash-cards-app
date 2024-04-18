<script lang="ts">
  import { editCard } from "@/storage/storageOperations";
  import type { Card, ColorTheme } from "@/types";
  import { THEME_CONTEXT_KEY } from "@/ui/colors";
  import { getContext } from "svelte";
  import CardEditModalInput from "./CardEditModalInput.svelte";
  import Dialog from "@/ui/Dialog.svelte";
  import DeleteDialog from "@/ui/DeleteDialog.svelte";

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
  let theme: ColorTheme = getContext(THEME_CONTEXT_KEY);
</script>

<Dialog bind:showDialog>
  <CardEditModalInput
    bind:frontFace={newFrontFace}
    bind:backFace={newBackFace}
  />

  <form method="dialog" slot="action">
    <button on:click={onCancel}>cancel</button>
    <button on:click={showDeleteDialog}>delete</button>
    <button on:click={() => alert("not implemented")}> move </button>
    <button class="btn {theme.button}" on:click={saveCardChanges}>
      save
    </button>
  </form>
</Dialog>

<DeleteDialog type="card" {deckID} cardID={card.ID} bind:showDeleteDialog />
