<template>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
  <!-- <ElConfigProvider :locale="zhCn">
    </ElConfigProvider> -->
  <!-- <ElConfigProvider :locale="zhCn">
      <RouterView v-slot="{ Component }">
        <template :v-if="Component">
          <Suspense>
            <component :is="Component"></component>
          </Suspense>
        </template>
      </RouterView>
    </ElConfigProvider> -->
</template>

<script setup lang="ts">
console.log("main");
</script>

<style scoped></style>
