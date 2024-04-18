<script lang="ts">
  import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
  import { pop } from "svelte-spa-router";

  export let title: string;
  export let noBackButton = false;
  export let actionsOnlyBigScreen = false;

  let hasScrolled = false;
  document.onscroll = () => (hasScrolled = scrollY != 0);
</script>

<header
  class="navbar bg-base-100 sm:h-20 sm:fixed {!hasScrolled ||
    'sm:shadow-lg'} mb-4 z-10 px-4 gap-2"
>
  <!-- back button -->
  {#if !noBackButton}
    <button class="btn btn-ghost btn-sm sm:btn-md btn-square" on:click={pop}>
      <ArrowLeft size={20} />
    </button>
  {/if}

  <!-- content on left -->
  <h2 class="text-2xl">{title}</h2>

  <!-- content on right -->
  <div
    class="ml-auto w-fit {actionsOnlyBigScreen
      ? 'hidden sm:flex'
      : 'flex'} gap-6"
  >
    <slot />
  </div>
</header>

<hr class="h-16 hidden sm:block sm:h-20 mb-4" />
