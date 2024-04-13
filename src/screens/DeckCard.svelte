<script lang="ts">
  import DeckEditDIalog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";
  import type { Deck } from "@/types";
  import { deckColorMap } from "@/ui/colors";

  export let deck: Deck;

  let deckColorClass: string;
  $: deckColorClass = deckColorMap[deck.color].class;

  let showEditDialog: () => void;
</script>

<article class="card card-compact {deckColorClass}">
  <span class="card-body">
    <h2 class="card-title text-3xl m-auto text-gray-800">{deck.name}</h2>
    <span class="card-actions flex mt-auto flex-nowrap">
      <button
        class="btn btn-sm flex-1 btn-outline text-gray-800"
        on:click={showEditDialog}
      >
        edit
      </button>
      <button class="btn btn-sm flex-1 btn-primary">review</button>
    </span>
  </span>
</article>

<DeckEditDIalog {deck} bind:showEditDialog />
