<script lang="ts">
  import type { Card, ColorTheme } from "@/types";

  export let theme: ColorTheme;
  export let activeCard: Card;

  export let cardFlipped = false;

  $: {
    activeCard;
    unflipCard();
  }

  function flipCard() {
    cardFlipped = true;
  }

  function unflipCard() {
    cardFlipped = false;
  }

  function toggleFlipping() {
    if (cardFlipped) unflipCard();
    else flipCard();
  }
</script>

<button
  class="card card-compact {theme.background} h-full"
  on:click={toggleFlipping}
>
  <span class="card-body justify-center">
    <h2 class="text-xl text-center">
      {cardFlipped ? activeCard.backFace : activeCard.frontFace}
    </h2>
  </span>
</button>
