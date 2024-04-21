<script lang="ts">
  import Screen from "@/ui/Screen.svelte";
  import { getDeck } from "@/storage/storageOperations";
  import ResponsiveGrid from "@/ui/ResponsiveGrid.svelte";
  import { THEME_CONTEXT_KEY, themeOf } from "@/ui/colors";
  import { setContext } from "svelte";
  import CardTile from "./CardTile.svelte";
  import BottomBar from "./BottomBar.svelte";
  import Actions from "./Actions.svelte";
  import Header from "@/ui/Header.svelte";
  import { derived } from "svelte/store";
  import ScreenCenteredMessage from "@/ui/ScreenCenteredMessage.svelte";

  export let params: { deckID: string };
  let { deckID } = params;

  const deck = getDeck(deckID);

  const theme = derived(deck, themeOf);

  setContext("deckID", deckID);
  setContext(THEME_CONTEXT_KEY, theme);
</script>

<Screen>
  <Header title={$deck.name} actionsOnlyBigScreen>
    <Actions />
  </Header>

  {#if $deck.cards.length != 0}
    <ResponsiveGrid>
      {#each $deck.cards as card}
        <CardTile {card} />
      {/each}
    </ResponsiveGrid>
  {:else}
    <ScreenCenteredMessage>
      you haven't added any cards in this deck yet
    </ScreenCenteredMessage>
  {/if}

  <span class="sm:hidden">
    <BottomBar />
  </span>
</Screen>
