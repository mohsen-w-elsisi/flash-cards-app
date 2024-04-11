<script lang="ts">
  import type { Color, Deck } from "@/types";

  export let deck: Deck;

  const deckCOlorMap: { [k in Color]: string } = {
    blue: "bg-blue-300",
    green: "bg-green-300",
    magenta: "bg-blue-400",
    yellow: "bg-yellow-200",
    red: "bg-red-300",
  } as const;

  const deckColor = deckCOlorMap[deck.color];
</script>

<article class="card card-compact {deckColor}">
  <span class="card-body">
    <h2 class="card-title text-3xl m-auto text-gray-800">{deck.name}</h2>
    <span class="card-actions flex mt-auto flex-nowrap">
      <button class="btn btn-outline text-gray-800 flex-1 btn-sm ">edit</button>
      <button class="btn btn-primary flex-1 btn-sm">review</button>
    </span>
  </span>
</article>
