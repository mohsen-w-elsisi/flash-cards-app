<script lang="ts">
  import ResponsiveGrid from "@/ui/ResponsiveGrid.svelte";
  import { getDecks } from "@/storage/storageOperations";
  import DeckCard from "./DeckTile.svelte";
  import NewDeckButton from "./NewDeckButton.svelte";
  import Header from "@/ui/Header.svelte";

  const decks = getDecks();
</script>

<Header title="mohsen's app" noBackButton />

<ResponsiveGrid>
  {#each $decks as deck}
    <DeckCard {deck} />
  {/each}
  <NewDeckButton />
</ResponsiveGrid>
