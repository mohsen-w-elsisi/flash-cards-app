import DecksScreen from "./screens/DecksScreen/DecksScreen.svelte";
import CardsScreen from "./screens/CardsScreen//CardsScreen.svelte";
import type { RouteDefinition } from "svelte-spa-router";

const routes: RouteDefinition = {
  "/": DecksScreen,
  "/deck/:deckID": CardsScreen,
} as const;

export default routes;
