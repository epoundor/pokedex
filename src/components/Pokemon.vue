<template>
  <div
    class="rounded-lg border justify-between overflow-hidden bg-white w-[104px] h-28 flex flex-col"
    :style="`border-color:${color};color:${color}`"
  >
    <span class="text-end flex-1 text-xs mt-1 mx-2">#{{ id }}</span>
    <img
      class="object-fill object-center h-[72px]"
      loading="lazy"
      :src="
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' +
        id +
        '.svg'
      "
      alt=""
    />
    <div
      class="flex-1 h-6 flex items-center justify-center text-white text-xs capitalize"
      :style="`background-color:${color}`"
    >
      {{ name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";

const PokeType: Record<string, string> = {
  normal: "#AAA67F",
  fighting: "#C12239",
  flying: "#A891EC",
  poison: "#A43E9E",
  ground: "#A43E9E",
  rock: "#B69E31",
  bug: "#A7B723",
  ghost: "#70559B",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  electric: "#F9CF30",
  psychic: "#FB5584",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  dark: "#75574C",
  fairy: "#E69EAC",
  unknown: "#000000",
  shadow: "#666666",
};
const props = defineProps<{
  id: string;
  name: string;
}>();

const typePoke: any = ref("normal");
const color: Ref<string> = ref("#AAA67F");
function fetchTypePokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}/`)
    .then((response) => response.json())
    .then((pokemon) => {
      typePoke.value = pokemon.types[0].type.name;
      color.value = PokeType[typePoke.value];
    });
}
onMounted(() => {
  fetchTypePokemon();
});
</script>
<style lang=""></style>
