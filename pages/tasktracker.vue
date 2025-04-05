<template>
  <div class="absolute top-4 right-4 z-50">
    <HomeButton>🏠 Home</HomeButton>
  </div>
  <div
    class="min-h-screen bg-surface bg-gray-100 flex flex-col items-center justify-center px-4 py-10"
  >
    <h1 class="text-3xl font-display text-primary mb-6">📋 Task Tracker</h1>
    <!-- Top-right HomeButton -->
    <!-- Form -->
    <form
      @submit.prevent="handleSubmit"
      class="flex gap-2 mb-8 w-full max-w-md"
    >
      <input
        v-model="taskName"
        type="text"
        placeholder="Enter your task"
        class="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all"
      >
        Add
      </button>
    </form>

    <!-- Task List -->
    <div class="w-full max-w-md space-y-3">
      <div
        v-for="task in taskArray"
        :key="task.id"
        class="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200"
      >
        <div class="flex items-center gap-3">
          <input
            type="checkbox"
            v-model="task.done"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span
            :class="{ 'line-through text-gray-400': task.done }"
            class="text-gray-800 whitespace-pre"
          >
            {{ task.text }}
          </span>
        </div>
        <!-- Uncomment if you want a remove button -->
        <!--
          <button
            @click="removeTodo(task)"
            class="text-sm text-red-500 hover:underline"
          >
            Remove
          </button>
          -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
let nextId = 1;
const taskName = ref("");
let taskArray = reactive([]);

const handleSubmit = () => {
  if (taskName.value.trim()) {
    taskArray.push({ id: nextId++, text: taskName.value, done: false });
    // Clear input after submission if desired
    taskName.value = "";
  }
};
</script>
