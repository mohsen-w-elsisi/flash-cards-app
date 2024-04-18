<script lang="ts">
  export let disableAutoActionsLayout = false;
  export let modalBoxStyling = "";

  export function showDialog() {
    dialog.showModal();
  }

  let dialog: HTMLDialogElement;
</script>

<dialog bind:this={dialog} class="modal modal-bottom sm:modal-middle">
  <span class="modal-box {modalBoxStyling}">
    <slot />

    {#if !disableAutoActionsLayout}
      <sapn class="modal-action-full-width autoActionsLayout">
        <slot name="action" />
      </sapn>
    {/if}
  </span>
</dialog>
