<script lang="ts">
  import Dialog from "@/ui/Dialog.svelte";
  import { getCard } from "@/storage/storageOperations";
  import { get } from "svelte/store";
  import { getContext } from "svelte";

  export let mistakes: string[];

  export let showMistakesDialog: () => void;

  const deckID: string = getContext("deckID");

  const mistakenCards = mistakes
    .map((cardID) => getCard(deckID, cardID))
    .map(get);
</script>

<Dialog bind:showDialog={showMistakesDialog}>
  {#each mistakenCards as card}
    <article class="card card-compact bg-base-200 w-full my-2">
      <span class="card-body">
        {#if card.ID}
          <b>{card.frontFace}:</b>
          <span>{card.backFace}</span>
        {:else}
          <span class="opacity-50">card has been delete</span>
        {/if}
      </span>
    </article>
  {/each}
</Dialog>
