<template>
  <h1>naef</h1>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import type { TodoItem } from '@/types/EventItem';
  import type { State } from '@/types/EventItem';

  // Data
  const state: State = reactive({
    newTask: {
      label: '',
      type: 'personal',
      isCompleted: false
    },
    taskItems: [],
    listFilter: 'all'
  })

  const taskItems = ref<TodoItem[]>([])
  const listFilter = ref('all')
</script>