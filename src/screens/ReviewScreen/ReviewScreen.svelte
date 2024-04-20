<script lang="ts">
  import { addAttempt, getDeck } from "@/storage/storageOperations";
  import Header from "@/ui/Header.svelte";
  import { themeOf } from "@/ui/colors";
  import ActiveCardView from "./ActiveCardView.svelte";
  import ResponseChoices from "./ResponseChoices.svelte";
  import { viewAttempts } from "@/ui/navigations";
  import createTimer from "./timer";

  export let params: { deckID: string };

  const { startTimer, stopTimer } = createTimer();

  const deckID = params.deckID;

  const deck = getDeck(deckID);
  const cards = [...$deck.cards];

  const mistakes: string[] = []

  let activeCard = cards[0];

  function switchToNextCard() {
    cards.shift();
    if (cards.length == 0) {
      recordThisAttempt();
      viewAttempts(deckID);
    } else {
      activeCard = cards[0];
    }
  }

  function onWrong() {
    cards.push(activeCard);
    mistakes.push(activeCard.ID)
    switchToNextCard();
  }

  function recordThisAttempt() {
    const duration = stopTimer();
    const date = Date.now()
    const numberOfCards = $deck.cards.length
    addAttempt($deck.ID, {date, duration, mistakes, numberOfCards})
  }

  const theme = themeOf($deck);

  let cardFlipped = false;

  startTimer()
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
