<template>
  <div class="todo-page">
    <h1>TODO</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Task Label: </label>
        <input type="text" id="task-label" v-model="newTask.label">
      </div>
      <div class="mb1">
        <label for="task-type">Task Type: </label>
        <select name="task-type" id="task-type" v-model="newTask.type">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </form>
    <h2>Type List</h2>
    <div>
      <button @click="listFilter = 'all'">All</button> |
      <button @click="listFilter = 'incomplete'">Incomplete</button> |
      <button @click="listFilter = 'complete'">Complete</button>
    </div>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="`task - ${index}`">
        <input type="checkbox" v-model="task.isCompleted">
        {{ task.label }}
        ({{ task.type }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import type { ListFilter, TodoItem } from '@/types/Types';

  const newTask = ref<TodoItem>({
    label: '',
    type: 'personal',
    isCompleted: false,
  })
  const taskItems = ref<TodoItem[]>([])
  const listFilter = ref<ListFilter>('all')

  const filteredTasks = computed<TodoItem[]>(() => {
    if (listFilter.value === 'complete') {
      return taskItems.value.filter(taskItem => taskItem.isCompleted)
    } else if (listFilter.value === 'incomplete') {
      return taskItems.value.filter(taskItem => !taskItem.isCompleted)
    }
    return taskItems.value
  })

  const addTask = () => {
    if (newTask.value.label.trim() === '') {
      alert("Empty task")
      return
    }

    taskItems.value.push({
      ...newTask.value,
      isCompleted: false
    })

    newTask.value.label = ''
    newTask.value.type = 'personal'
  }
</script>

<style scoped>
  .todo-page {
    max-width: 800px;
    margin: 0 auto;
  }
  ul {
    list-style: none;
  }
  .mb1 {
    margin-bottom: 1rem;
  }
</style>