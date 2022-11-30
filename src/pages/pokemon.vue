<template>
  <div
    class="w-full relative flex flex-col justify-between"
    :style="`background-color:${color}`"
  >
    <svg
      width="206"
      height="208"
      viewBox="0 0 206 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute right-2 top-2 z-0"
    >
      <g opacity="0.1">
        <path
          d="M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532056C7.26233 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532056C7.26233 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
          fill="white"
        />
      </g>
    </svg>
    <div
      class="flex justify-between items-center text-white mx-6 mt-6 font-bold"
    >
      <div class="flex gap-5 items-center">
        <router-link :to="{ name: 'search' }">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.23045 17.5117L10.0039 16.7383C10.1869 16.5553 10.1869 16.2585 10.0039 16.0754L3.94408 10.0157H17.2812C17.5401 10.0157 17.75 9.80578 17.75 9.54691V8.45316C17.75 8.1943 17.5401 7.98441 17.2812 7.98441H3.94408L10.0039 1.92465C10.1869 1.7416 10.1869 1.4448 10.0039 1.26172L9.23045 0.488359C9.04741 0.305312 8.75061 0.305312 8.56752 0.488359L0.387285 8.66859C0.204238 8.85164 0.204238 9.14844 0.387285 9.33152L8.56752 17.5118C8.75057 17.6948 9.04737 17.6948 9.23045 17.5117Z"
              fill="white"
            />
          </svg>
        </router-link>

        <span class="text-2xl capitalize">{{ pokemon.name }}</span>
      </div>
      <span class="text-xs">#001</span>
    </div>
    <div
      class="bg-white flex flex-col gap-4 h-[412px] m-1 rounded-lg relative pt-16"
    >
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
        alt=""
        class="absolute w-[200px] aspect-square -top-1/3 right-1/2 translate-x-1/2"
      />
      <div class="flex justify-center gap-4">
        <template v-for="type in pokemon.types">
          <Badge :label="type.type.name" :color="PokeType[type.type.name]" />
        </template>
      </div>

      <h3 class="text-center text-sm font-bold" :style="`color: ${color}`">
        About
      </h3>
      <div class="flex"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import Badge from "@/components/Badge.vue";
const route = useRoute();
const id = computed(() => route.params.id);

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

const color: Ref<string> = ref("#AAA67F");
const typePoke: any = ref("normal");
const pokemon: Ref<Record<any, any>> = ref({});
function fetchTypePokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}/`)
    .then((response) => response.json())
    .then((poke) => {
      console.log(poke);
      pokemon.value = poke;
      typePoke.value = poke.types[0].type.name;
      color.value = PokeType[typePoke.value];
    });
}
onMounted(() => {
  fetchTypePokemon();
});
</script>
<style></style>
