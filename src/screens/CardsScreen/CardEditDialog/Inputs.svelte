<script lang="ts">
  import type { ColorTheme } from "@/types";
  import { THEME_CONTEXT_KEY } from "@/ui/colors";
  import { getContext } from "svelte";
  import type { Readable } from "svelte/store";

  export let frontFace: string;
  export let backFace: string;

  let theme: Readable<ColorTheme> = getContext(THEME_CONTEXT_KEY);
</script>

<div
  class="card aspect-[2/3] sm:aspect-[3/2] w-full max-w-80 sm:max-w-none mx-auto {$theme.background}"
>
  <span class="card-body sm:flex-row">
    <textarea bind:value={frontFace} />
    <hr class="divider my-8 divider-neutral sm:divider-horizontal" />
    <textarea bind:value={backFace} />
  </span>
</div>

<style>
  textarea {
    @apply w-full h-full 
      bg-transparent 
      text-3xl 
      resize-none;

    &:focus-visible {
      outline: none;
    }
  }
</style>
