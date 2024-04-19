<script lang="ts">
  import { getDeck } from "@/storage/storageOperations";
  import Header from "@/ui/Header.svelte";
  import { themeOf } from "@/ui/colors";
  import ActiveCardView from "./ActiveCardView.svelte";
  import ResponseChoices from "./ResponseChoices.svelte";
  import { viewAttempts } from "@/ui/navigations";

  export let params: { deckID: string };

  const deckID = params.deckID;

  const deck = getDeck(deckID);
  const cards = $deck.cards;

  let activeCard = cards[0];

  function switchToNextCard() {
    cards.shift();
    if (cards.length == 0) viewAttempts(deckID);
    else activeCard = cards[0];
  }

  function onWrong() {
    cards.push(activeCard);
    switchToNextCard();
  }

  const theme = themeOf($deck);

  let cardFlipped = false;
</script>

<span class="flex flex-col h-screen">
  <Header title={$deck.name} />
  <main class="h-full w-screen max-w-[500px] p-6 mx-auto flex flex-col gap-6">
    <ActiveCardView {theme} {activeCard} bind:cardFlipped />
    <ResponseChoices
      hide={!cardFlipped}
      onCorrect={switchToNextCard}
      {onWrong}
    />
  </main>
</span>
