import type { RouteDefinition } from "svelte-spa-router";
import DecksScreen from "./screens/DecksScreen/DecksScreen.svelte";
import CardsScreen from "./screens/CardsScreen//CardsScreen.svelte";
import ReviewScreen from "./screens/ReviewScreen/ReviewScreen.svelte";
import AttemptsScreen from "./screens/AttemptsScreen/AttemptsScreen.svelte";

const routes: RouteDefinition = {
  "/": DecksScreen,
  "/deck/:deckID": CardsScreen,
  "/review/:deckID": ReviewScreen,
  "/attempts/:deckID": AttemptsScreen,
} as const;

export default routes;
