<script lang="ts">
  import History from "svelte-material-icons/History.svelte";
  import Edit from "svelte-material-icons/CircleEditOutline.svelte";
  import Add from "svelte-material-icons/Plus.svelte";
  import Check from "svelte-material-icons/CheckOutline.svelte";
  import { getContext } from "svelte";
  import DeckEditDialog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";
  import CardEditDialog from "./CardEditDialog.svelte";
  import type { Card } from "@/types";
  import { get } from "svelte/store";
  import { push } from "svelte-spa-router";
  import {
    addCard,
    getCard,
    getDeck,
    removeCard,
  } from "@/storage/storageOperations";

  const pusher = (url: string) => () => push(url);

  const deckID: string = getContext("deckID");
  const deck = getDeck(deckID);

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
</script>

<button on:click={pusher(`attempts/${deckID}`)}><History size={30} /></button>
<button on:click={showDeckEditDialog}><Edit size={30} /></button>
<button on:click={makeNewCard}><Add size={30} /></button>
<button on:click={pusher(`review/${deckID}`)}><Check size={30} /></button>

<!-- dialogs -->

<DeckEditDialog deck={$deck} bind:showEditDialog={showDeckEditDialog} />
<CardEditDialog
  card={newCard}
  bind:showEditDialog={showCardEditDialog}
  onSave={resetNewCard}
  onCancel={deleteNewCard}
/>
