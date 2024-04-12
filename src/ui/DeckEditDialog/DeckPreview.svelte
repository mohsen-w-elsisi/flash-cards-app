<script lang="ts">
  import type { Color } from "@/types";
  import { deckColorMap } from "../colors";

  export let name: string;
  export let color: Color;
</script>

<div class="card aspect-[2/3] w-full sm:h-full sm:w-auto {deckColorMap[color].class}">
  <span class="card-body">
    <h2 class="card-title text-6xl sm:text-2xl m-auto text-gray-800">{name}</h2>
  </span>
</div>