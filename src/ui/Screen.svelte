<script>
  import { fly } from "svelte/transition";

  const duration = 300;
</script>

<div
  in:fly={{ x: innerWidth, duration, opacity: 1 }}
  out:fly={{ x: -(innerWidth / 3), duration }}
  class="absolute w-full h-full"
>
  <slot />
</div>


