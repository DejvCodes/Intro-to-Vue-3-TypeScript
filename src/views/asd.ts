

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TodoItem } from '../types'

const newTask = ref<TodoItem>({
  label: '',
  type: 'personal',
  isComplete: false
})

const taskItems = ref<TodoItem[]>([])
const listFilter = ref<'all' | 'complete' | 'incomplete'>('all')

const filteredTasks = computed(() => {
  if (listFilter.value === 'complete') {
    return taskItems.value.filter(t => t.isComplete)
  } else if (listFilter.value === 'incomplete') {
    return taskItems.value.filter(t => !t.isComplete)
  }
  return taskItems.value
})

function addTask() {
  taskItems.value.push({
    ...newTask.value,
    isComplete: false
  })
  newTask.value.label = ''
}
</script>
