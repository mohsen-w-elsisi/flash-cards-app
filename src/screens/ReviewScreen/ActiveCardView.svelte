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
  class="card card-compact {theme.background} h-full {!cardFlipped ||
    'flip'} duration-500"
  on:click={toggleFlipping}
>
  <span class="card-body justify-center w-full h-full">
    <h2 class="text-3xl text-center">
      {cardFlipped ? activeCard.backFace : activeCard.frontFace}
    </h2>
  </span>
</button>

<style>
  .flip {
    transform: rotateY(180deg);
    & span {
      transform: rotateY(-180deg);
    }
  }
</style>
