<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';
  import EventService from '../services/EventService';
  import type { EventItem } from '@/types/Types';

  const props = defineProps<{
    id: number  
  }>()

  const event = ref<EventItem | null>(null)

  onMounted(() => {
    EventService.getEvent(props.id)
      .then((response) => {
        event.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  })
</script>