<script lang="ts">
  import type { Color } from "@/types";
  import { deckColorMap } from "../colors";

  export let name: string;
  export let color: Color;

  let colorClass: string;

  $: colorClass = deckColorMap[color].theme.background
</script>

<div class="card aspect-[2/3] mx-auto w-full max-w-80 sm:h-56 sm:w-auto {colorClass}">
  <span class="card-body">
    <h2 class="card-title text-6xl sm:text-2xl m-auto">{name}</h2>
  </span>
</div>