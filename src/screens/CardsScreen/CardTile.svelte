<script lang="ts">
  import type { Card, ColorTheme } from "@/types";
  import { THEME_CONTEXT_KEY } from "@/ui/colors";
  import { getContext } from "svelte";
  import CardEditDialog from "./CardEditDialog/CardEditDialog.svelte";
  import type { Readable } from "svelte/store";

  export let card: Card;

  let theme: Readable<ColorTheme> = getContext(THEME_CONTEXT_KEY);

  let showEditDialog: () => void;
</script>

<button class="card card-compact {$theme.background}" on:click={showEditDialog}>
  <span class="card-body justify-center">
    <h2 class="text-xl text-center">
      {card.frontFace}
    </h2>
  </span>
</button>

<CardEditDialog {card} bind:showEditDialog />
