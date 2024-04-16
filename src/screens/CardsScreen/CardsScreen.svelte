<script lang="ts">
  import { getDeck } from "@/storage/storageOperations";
  import ResponsiveGrid from "@/ui/ResponsiveGrid.svelte";
  import NewCardButton from "./NewCardButton.svelte";
  import { THEME_CONTEXT_KEY, deckColorMap } from "@/ui/colors";
  import { setContext } from "svelte";
  import CardTile from "./CardTile.svelte";
  import BottomBar from "./BottomBar.svelte";
  import Header from "./Header.svelte";

  export let params: { deckID: string };
  let { deckID } = params;

  const deck = getDeck(deckID);

  let theme = deckColorMap[$deck.color].theme;

  setContext(THEME_CONTEXT_KEY, theme);
  setContext('deckID', deckID)
</script>

<Header />
<ResponsiveGrid>
  {#each $deck.cards as card}
    <CardTile {card} />
  {/each}
</ResponsiveGrid>
<BottomBar />
