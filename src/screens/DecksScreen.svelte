<script lang="ts">
  import ResponsiveGrid from "@/ui/ResponsiveGrid.svelte";
  import { addDeck, getDecks } from "@/storage/storageOperations";
  import DeckCard from "./DeckCard.svelte";

  const decks = getDecks();
</script>

<header class="navbar">
  <span class="navbar-start">mohsen's app</span>
</header>

<ResponsiveGrid>
  {#each $decks as deck}
    <DeckCard {deck} />
  {/each}
  <button
    class="btn btn-primary"
    on:click={() => addDeck({ name: "this is a card", color: "magenta" })}
    >add card</button
  >
</ResponsiveGrid>
