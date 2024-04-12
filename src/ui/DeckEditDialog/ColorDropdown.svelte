<script lang="ts">
  import type { Color } from "@/types";
  import { colors, deckColorMap } from "../colors";

  export let selectedColor: Color;

  function colorUpdater(color: Color) {
    return () => (selectedColor = color);
  }
</script>

<div class="dropdown dropdown-end dropdown-top sm:dropdown-bottom">
  <div tabindex="0" role="button" class="color-drop">
    {deckColorMap[selectedColor].emoji}
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul
    tabindex="0"
    class="dropdown-content z-[1] flex justify-end gap-1 p-2 shadow bg-base-100 rounded-box w-fit"
  >
    {#each colors as color}
      <button class="color-drop" on:click={colorUpdater(color)}>
        {deckColorMap[color].emoji}
      </button>
    {/each}
  </ul>
</div>

<style>
  .color-drop {
    @apply rounded-full text-2xl;
  }
</style>
