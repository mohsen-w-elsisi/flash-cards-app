<script lang="ts">
  import Screen from "@/ui/Screen.svelte";
  import { getDeck } from "@/storage/storageOperations";
  import Header from "@/ui/Header.svelte";
  import AttemptTile from "./AttemptTile.svelte";
  import { setContext } from "svelte";
  import ScreenCenteredMessage from "@/ui/ScreenCenteredMessage.svelte";

  export let params: { deckID: string };

  const { deckID } = params;

  const deck = getDeck(deckID);

  setContext("deckID", deckID);
</script>

<Screen>
  <Header title={$deck.name} />
  {#if $deck.attempts.length != 0}
    <main class="flex flex-col gap-4 px-2 max-w-3xl mx-auto">
      {#each $deck.attempts.toReversed() as attempt}
        <AttemptTile {attempt} />
      {/each}
    </main>
  {:else}
    <ScreenCenteredMessage>
      you haven't attempted reviewing this deck yet
    </ScreenCenteredMessage>
  {/if}
</Screen>
