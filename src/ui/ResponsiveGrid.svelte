<main>
  <slot />
</main>

<style>
  main {
    --item-height: 15rem;
    --item-width: 10rem;

    --grid-colum-width: minmax(calc(var(--item-width) + 1rem), 1fr);

    display: grid;
    grid-template-columns: repeat(auto-fill, var(--grid-colum-width));
    grid-auto-rows: var(--item-height);
    row-gap: 1rem;

    height: 100%;

    padding-bottom: 1rem;
    
    & > *:not(dialog) {
      width: var(--item-width);
      height: var(--item-height);

      margin: auto;
    }
  }
</style>
