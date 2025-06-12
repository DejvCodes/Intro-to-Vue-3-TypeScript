<template>
  <h1>TODO</h1>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
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
</script>