<script lang="ts">
  import { getDeck } from "@/storage/storageOperations";
  import Header from "@/ui/Header.svelte";
  import AttemptTile from "./AttemptTile.svelte";

  export let params: { deckID: string };

  const { deckID } = params;

  const deck = getDeck(deckID);
</script>

<Header title={$deck.name} />
<main class="flex flex-col gap-4 px-2">
  {#each $deck.attempts as attempt}
    <AttemptTile {attempt} />
  {/each}
</main>
