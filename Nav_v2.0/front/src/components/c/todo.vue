<template>
  <div>
    <input
      @keyup.enter="run"
      v-model="value"
      class="flex w-full outline-none border-zinc-300 border-2 py-1 px-4"
    />
    {{ todoMsg }}
    <ul class="">
      <li
        class="bg-indigo-400 text-white rounded-[9px] px-4 py-3 my-4 flex justify-between transition-[0.3s]"
        v-for="(item, index) in todos"
        :key="item.id"
      >
        <span v-if="index <= 2">
          {{ "⭐".repeat(index + 1) + item.data }}
        </span>
        <span v-else>
          {{ "✨".repeat(todos.length - index) + item.data }}
        </span>
        <Close
          theme="outline"
          size="24"
          fill="#d0021b"
          @click="deleteTodo(item.id)"
          class="hover:opacity-80 cursor-pointer"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Close } from "@icon-park/vue-next";
import { computed, ref, watch } from "vue";
let newTodo = ref("");
let todoMsg = ref("");

const todos = ref(getFromStorage());
const value = computed({
  get() {
    return newTodo.value;
  },
  set(v) {
    newTodo.value = v;
  },
});
function init() {
  if (todos._value) {
    localStorage.removeItem("todos");
    localStorage.setItem(
      "todos",
      JSON.stringify([
        {
          data: "123",
          time: getTime(),
          id: 0,
        },
      ])
    );
  }
}
function run() {
  // init();
  addTodoItem(value.value);
}
function getTime() {
  return new Date().getTime();
}
// 从本地存储中获取已有对象
function getFromStorage() {
  const todoJSON = localStorage.getItem("todos");
  if (todoJSON) {
    return JSON.parse(todoJSON);
  } else {
    return [];
  }
}

function saveTodosToLocalStorage(todos: any) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem("todos", todosJSON);
}

function addTodoItem(todo: any) {
  try {
    todos.value.push({
      data: todo,
      time: getTime(),
      id: todos.value.length || 0,
    });
    saveTodosToLocalStorage(todos.value);
    success();
    newTodo.value = ""; // 清空输入框
  } catch (e) {
    localStorage.removeItem("todos");
    location.reload()
  }
}
const success = () => {
  ElNotification({
    title: "Todo 添加成功✨",
    message: newTodo.value,
    type: "success",
  });
};

function deleteTodo(itemId) {
  const index = todos.value.findIndex((todo) => todo.id == itemId);
  if (index != -1) {
    todos.value.splice(index, 1);
    saveTodosToLocalStorage(todos);
  }
}
</script>

<style scoped></style>
