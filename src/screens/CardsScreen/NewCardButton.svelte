<script lang="ts">
  import { addCard } from "@/storage/storageOperations";

  export let deckID: string;

  function makeNewCard() {
    addCard(deckID, { frontFace: "", backFace: "" });
  }
</script>

<button class="add-new-card-button" on:click={makeNewCard}>
  <span>new card ＋</span>
</button>
