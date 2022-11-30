<template>
  <div
    class="px-2 text-white font-bold text-[10px] leading-4 rounded-full inline-block capitalize"
    :style="`background-color: ${color}`"
  >
    {{ label }}
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string;
  color: string;
}>();
</script>
<style lang=""></style>
