import { push } from "svelte-spa-router";

const pusher = (urlBase: string) => (deckID: string) =>
  push(`/${urlBase}/${deckID}`);

export const review = pusher("review")
export const viewAttempts = pusher("attempts")