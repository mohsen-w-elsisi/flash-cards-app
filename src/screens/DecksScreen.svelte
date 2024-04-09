<script lang="ts">
  import { getDecks } from "@/storage/storageOperations";

  const decks = getDecks();
</script>

<header class="navbar">
  <span class="navbar-start">mohsen's app</span>
</header>

{#each $decks as deck}
  <article class="card">
    <p class="card-title">{deck.name}</p>
  </article>
{/each}
