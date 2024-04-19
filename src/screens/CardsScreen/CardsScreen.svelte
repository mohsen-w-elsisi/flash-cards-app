<script lang="ts">
  import { getDeck } from "@/storage/storageOperations";
  import ResponsiveGrid from "@/ui/ResponsiveGrid.svelte";
  import { THEME_CONTEXT_KEY, deckColorMap, themeOf } from "@/ui/colors";
  import { setContext } from "svelte";
  import CardTile from "./CardTile.svelte";
  import BottomBar from "./BottomBar.svelte";
  import Actions from "./Actions.svelte";
  import Header from "@/ui/Header.svelte";
  import { derived } from "svelte/store";

  export let params: { deckID: string };
  let { deckID } = params;

  const deck = getDeck(deckID);

  const theme = derived(deck, themeOf);

  setContext("deckID", deckID);
  setContext(THEME_CONTEXT_KEY, theme);
</script>

<Header title={$deck.name} actionsOnlyBigScreen>
  <Actions />
</Header>

<ResponsiveGrid>
  {#each $deck.cards as card}
    <CardTile {card} />
  {/each}
</ResponsiveGrid>

<span class="sm:hidden">
  <BottomBar />
</span>
