import SearchPage from "@/pages/index.vue";
import PokemonPage from "@/pages/pokemon.vue";

const router = [
  {
    path: "/",
    name: "search",
    component: SearchPage,
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: PokemonPage,
  },
];

export default router;
