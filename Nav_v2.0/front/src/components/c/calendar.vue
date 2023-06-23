<template>
  <el-calendar v-model="value">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''" class="flex-wrap">
        {{ data.day.split("-").slice(1).join("-") }}
      <div v-if="data.isSelected && data.day.split('-').slice(1)[1] == time ">
        <div v-for="s of result">{{ s }}</div>
      </div>
      </p>
    </template>
    <template #header="{}">
      <span></span>
    </template>
  </el-calendar>
</template>
<style lang="scss" scoped>
.is-selected {
  @apply flex flex-wrap flex-col;
}
</style>
<script lang="ts" setup>
import { ref } from "vue";
const value = ref(new Date());
const time = new Date().getDate()
console.log(time)
const todoInCalendar = ref(localStorage.getItem("todos")!);
const todoData: string[] = JSON.parse(todoInCalendar.value);
function msg() {
  if (todoData && todoData.length > 0) {
    return Object.values(todoData.slice(0, 2));
  } else {
    return null;
  }
}
const overview = ref(msg());
const result = overview.value == null ? null : overview.value.map((item:any) => item.data);
console.log(overview);
</script>
