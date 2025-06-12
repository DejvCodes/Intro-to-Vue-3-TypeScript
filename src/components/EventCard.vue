<template>
  <RouterLink 
    v-if="event" 
    class="event-link" :to="{ name: 'event-details-page', params: { id: event.id } }"
    :aria-label="`Zobrazit detaily události: ${event.title}`"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';
  import type { EventItem } from '@/types/EventItem';

  defineProps<{
    event: EventItem
  }>()
</script>

<style scoped>  
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .event-link {
    color: #2c3e50;
    text-decoration: none;
  }
</style>