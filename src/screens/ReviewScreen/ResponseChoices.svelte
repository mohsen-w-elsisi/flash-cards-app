<script lang="ts">
  export let hide: boolean;

  export let onCorrect: () => void;
  export let onWrong: () => void;
</script>

<div class="flex *:flex-1 gap-6 {!hide || 'opacity-0'}">
  <button on:click={onWrong} class="btn btn-error">wrong</button>
  <button on:click={onCorrect} class="btn btn-success">correct</button>
</div>
