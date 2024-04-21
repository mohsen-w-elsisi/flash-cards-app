<script lang="ts">
  import type { Attempt } from "@/types";
  import moment from "moment";
  import MistakesDialog from "./MistakesDialog.svelte";

  export let attempt: Attempt;

  const { date, duration, numberOfCards, mistakes } = attempt;

  const correct = numberOfCards - mistakes.length;
  const correctPercentage = Math.round(correct*100/numberOfCards)

  const dateText = moment(date).format("D-M-YY");

  let showMistakesDialog: () => void;
</script>

<article class="card bg-base-200 w-full">
  <span class="p-3 gap-2 grid grid-cols-2">
    <div>
      <span class="stat-title">date</span>
      <span class="stat-value text-3xl">{dateText}</span>
    </div>

    <div>
      <span class="stat-title">time</span>
      <span class="stat-value">{duration}s</span>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-interactive-supports-focus -->
    <div on:click={showMistakesDialog} role="button">
      <span class="stat-title">mistakes</span>
      <span class="stat-value">{mistakes.length}</span>
    </div>

    <div>
      <span class="stat-title">correct</span>
      <span class="stat-value">{correct}</span>
    </div>

    <div class="col-span-2">
      <span class="stat-title">{correctPercentage}%</span>
      <progress
        class="progress progress-success bg-red-600 stat-value"
        value={correct}
        max={numberOfCards}
      />
    </div>
  </span>
</article>

<MistakesDialog {mistakes} bind:showMistakesDialog />

<style>
  div {
    @apply stat bg-base-300 rounded-box;
  }
</style>
