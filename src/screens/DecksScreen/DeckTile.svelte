<script lang="ts">
  import DeckEditDIalog from "@/ui/DeckEditDialog/DeckEditDialog.svelte";
  import type { ColorTheme, Deck } from "@/types";
  import { themeOf } from "@/ui/colors";
  import { link } from "svelte-spa-router";
  import { review } from "@/ui/navigations";

  export let deck: Deck;

  function reviewDeck() {
    review(deck.ID);
  }

  let theme: ColorTheme;
  $: theme = themeOf(deck);

  let showEditDialog: () => void;
</script>

<article class="card card-compact {theme.background}">
  <span class="card-body">
    <a class="flex items-center h-full" href="/deck/{deck.ID}" use:link>
      <h2 class="card-title text-3xl">
        {deck.name}
      </h2>
    </a>

    <span class="card-actions flex flex-nowrap">
      <button
        class="btn btn-sm hover:border-black hover:bg-opacity-30 hover:bg-white flex-1 btn-outline text-gray-800"
        on:click={showEditDialog}
      >
        edit
      </button>
      <button class="btn btn-sm flex-1 {theme.button}" disabled={deck.cards.length == 0} on:click={reviewDeck}>
        review
      </button>
    </span>
  </span>
</article>

<DeckEditDIalog {deck} bind:theme bind:showEditDialog />
