<template>
  <div class="flex">
    <aside
      class="flex-[1.5] bg-zinc-100 text-neutral-700 flex flex-col overflow-y-scroll min-h-[calc(100vh-55px)] border-zinc-300 border-r-[0.5px]"
    >
      <ul>
        <li
          v-for="category of categories"
          class="flex flex-col relative cursor-pointer"
        >
          <h2 class="sticky top-0 pl-2 text-xl bg-zinc-500 text-white">
            {{ category[0] }}
          </h2>
          <a
            :href="(item.link as string)"
            v-for="item of category"
            class="pl-6 w-fit text-lg"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </aside>
    <main class="flex-[8]">
      <div class="flex">
        <section class="ySection ">
          <ul v-for="item of new Array(2)">
            <li
              class="bg-indigo-300 w-full h-full flex justify-center items-center"
              v-for="item of new Array(6)"
            >
              <div class="flex-[3]"><img src="" alt="" />img</div>
              <div class="flex-[7] flex justify-between">
                <div>name</div>
                <div>descript</div>
              </div>
            </li>
          </ul>
        </section>
        <section class="ySection">
          <div>C</div>
          <div>D</div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const categories = [
  [
    "Learning",
    {
      name: "Nuxt",
      link: "https://juejin.cn/video/7202149403342143520?enter_from=course_center&utm_source=course_center",
    },
  ],
  [
    "Dev",
    {
      name: "L-3000",
      link: "http://localhost:3000/",
    },
    {
      name: "L-5173",
      link: "http://localhost:5173/",
    },
  ],
  [
    "Code",
    {
      name: "力扣",
      link: "https://leetcode.cn/problemset/all/",
    },
    {
      name: "GitHub",
      link: "https://github.com/emVisible",
    },
    {
      name: "编程导航",
      link: "https://www.code-nav.cn/",
    },
    {
      name: "后盾人",
      link: "https://www.houdunren.com/",
    },
    {
      name: "FM",
      link: "https://coderadio.freecodecamp.org/",
    },
    {
      name: "BiliBili",
      link: "https://www.bilibili.com/",
    },
  ],
  [
    "Utils",
    { name: "", link: "" },
    {
      name: "GPT",
      link: "https://chat.openai.com/",
    },
  ],
];
</script>

<style scoped lang="scss">
$yH: "min-h-[calc(100vh-100px)]";
ul {
  @apply sticky;
}
.active {
  @apply border-r-2 border-lime-300;
}
.ySection {
  @apply flex px-4 py-4 flex-[1] border-2 border-zinc-700 rounded-xl  gap-4 mx-4 my-4 #{$yH};
  ul {
    @apply flex-[1] flex flex-col ;
  }
}
</style>
