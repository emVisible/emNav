<template>
  <div class="flex justify-between items-center">
    <section class="icon">
      <slot name="icon"></slot>
    </section>
    <section class="description flex flex-col">
      <slot name="name"></slot>
      <slot name="description"></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const state = ref([1, 2, 3, 4, 5]);
</script>

<style scoped lang="scss">
.icon {
  @apply flex-[3] bg-indigo-300;
}
.description {
  @apply flex-[7] bg-blue-400;
}
</style>
