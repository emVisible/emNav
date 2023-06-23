<template>
  <div class="relative  flex flex-col justify-center">
    <nav
      class="flex justify-center items-center  border-b-2 border-zinc-200 sticky top-0 bg-zinc-100 h-top_bar_h px-4"
    >
      <router-link :to="{ name: 'home' }" class="text-2xl font-sans font-semibold"
        >Young's Nav</router-link
      >
      <section class="grid grid-cols-3 grid-rows-1 flex-1">
        <div class="">
          <SendOne theme="outline" size="24" fill="#4a4a4a" />
          <router-link :to="{ name: 'navigation' }">导航</router-link>
        </div>
        <div class="">
          <Badge theme="outline" size="24" fill="#333" />
          <router-link :to="{ name: 'blog' }">博客</router-link>
        </div>
        <div class="">
          <Fm theme="outline" size="24" fill="#333" />
          <router-link :to="{ name: 'fm' }">电台</router-link>
        </div>
      </section>

      <img
        class="w-[40px] h-[40px] border-solid border-[1px] border-y-zinc-300 rounded-full"
        src="@/assets/avatar.jpg"
        alt=""
      />
    </nav>
    <RouterView> </RouterView>
  </div>
</template>

<script setup lang="ts">
import { SendOne, Badge, Fm } from "@icon-park/vue-next";
</script>

<style scoped lang="scss">
nav {
  section {
    div {
      @apply flex gap-2 justify-center;
    }
  }
}
</style>
