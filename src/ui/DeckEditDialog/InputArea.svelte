<script lang="ts">
  import type { Color } from "@/types";
  import ColorDropdown from "./ColorDropdown.svelte";

  export let name: string;
  export let color: Color;
</script>

<div class="flex gap-4 w-max-[100%] mt-4">
  <input
    type="text"
    class="input input-bordered flex-1"
    placeholder="Deck Name"
    bind:value={name}
  />

  <ColorDropdown bind:selectedColor={color} />
</div>
