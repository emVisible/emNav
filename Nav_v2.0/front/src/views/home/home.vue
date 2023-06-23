<template>
  <div class="mx-64">
    <section>
      <h2 class="text-2xl text-right mb-4">⭐Todo</h2>
      <cTodo></cTodo>
    </section>
    <section class="">
      <h2 class="text-2xl text-right">⭐日历表</h2>
      <cCalendar class=""></cCalendar>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  @apply p-9 my-4 border-4 border-zinc-300 rounded-lg shadow-md shadow-zinc-400;
}
section:hover {
  h2 {
    @apply animate-pulse;
  }
}

@keyframes pulse {
  50% {
    opacity: 0.3;
  }
}
.animate-pulse {
  animation: pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
