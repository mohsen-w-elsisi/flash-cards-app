<script lang="ts">
  import type { Attempt } from "@/types";
  import moment from "moment";
  import DateIcon from "svelte-material-icons/Calendar.svelte";

  export let attempt: Attempt;

  const { date, duration, numberOfCards, mistakes } = attempt;

  const correct = numberOfCards - mistakes.length;
  const percentageCorrect = correct / numberOfCards;

  const dateText = moment(date).format("D-M-YY");
</script>

<article class="card bg-base-200 p-3 gap-2 w-full grid grid-cols-2">
  <div>
    <span class="stat-title">date</span>
    <span class="stat-value text-3xl">{dateText}</span>
  </div>

  <div>
    <span class="stat-title">time</span>
    <span class="stat-value">{duration}s</span>
  </div>

  <div>
    <span class="stat-title">mistakes</span>
    <span class="stat-value">{mistakes.length}</span>
  </div>

  <div>
    <span class="stat-title">correct</span>
    <span class="stat-value">{correct}</span>
  </div>

  <div class="col-span-2">
    <progress class="progress progress-success bg-red-600" value={correct} max={numberOfCards} />
  </div>
</article>

<style>
  div {
    @apply stat bg-base-300 rounded-box;
  }
</style>
