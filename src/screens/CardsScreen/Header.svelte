<script lang="ts">
  import { getDeck } from "@/storage/storageOperations";
  import { getContext } from "svelte";
  import Actions from "./Actions.svelte";

  const deckID: string = getContext("deckID");
  const deck = getDeck(deckID);

  let hasScrolled = false;
  document.onscroll = () => (hasScrolled = scrollY != 0);
</script>

<header
  class="navbar bg-base-100 sm:h-20 sm:fixed {!hasScrolled ||
    'sm:shadow-lg'} mb-4"
>
  <h2 class="flex-1 text-2xl">{$deck.name}</h2>
  <div class="w-fit hidden sm:flex gap-6">
    <Actions />
  </div>
</header>

<hr class="h-16 hidden sm:block sm:h-20 mb-4">
