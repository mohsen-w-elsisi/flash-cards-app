import type { RouteDefinition } from "svelte-spa-router";
import DecksScreen from "./screens/DecksScreen/DecksScreen.svelte";
import CardsScreen from "./screens/CardsScreen//CardsScreen.svelte";
import ReviewScreen from "./screens/ReviewScreen/ReviewScreen.svelte";

const routes: RouteDefinition = {
  "/": DecksScreen,
  "/deck/:deckID": CardsScreen,
  "/review/:deckID": ReviewScreen,
} as const;

export default routes;
