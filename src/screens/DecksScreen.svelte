<script lang="ts">
  import ResponsiveGrid from "@/ui/ResponsiveGrid.svelte";
  import { getDecks } from "@/storage/storageOperations";
  import DeckCard from "./DeckCard.svelte";
  import NewDeckButton from "./NewDeckButton.svelte";

  const decks = getDecks();
</script>

<header class="navbar">
  <span class="navbar-start">mohsen's app</span>
</header>

<ResponsiveGrid>
  {#each $decks as deck}
    <DeckCard {deck} />
  {/each}
  <NewDeckButton />
</ResponsiveGrid>
