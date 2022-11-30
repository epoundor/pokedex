<template>
  <div class="px-4 py-6 flex flex-col w-full gap-2">
    <div class="flex gap-4 font-bold text-2xl items-center">
      <Logo /> Pokédèx
    </div>
    <input
      type="search"
      class="border rounded-lg w-full block py-1 px-2 bg-white placeholder:text-xs"
      placeholder="Rechercher"
    />
    <div class="flex flex-wrap gap-2 overflow-auto">
      <template v-for="(pokemon, id) in pokemons">
        <Pokemon
          :id="id + 1"
          :name="pokemon.name"
          @click="changePage(id + 1)"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from "@/assets/logo.vue";
import Pokemon from "@/components/Pokemon.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const pokemons: any = ref([]);
function fetchKantoPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=21")
    .then((response) => response.json())
    .then((allpokemon) => {
      pokemons.value = allpokemon.results;
      console.log(pokemons.value);
    });
}
function changePage(id: number) {
  router.push({
    name: "pokemon",
    params: {
      id,
    },
  });
}
onMounted(() => {
  fetchKantoPokemon();
});
</script>
<style lang=""></style>
