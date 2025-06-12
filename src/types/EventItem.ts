export interface EventItem {
  id: number
  title: string
  category: string
  description: string
  location: string
  date: string
  time: string
}

export type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface TodoItem {
  label: string
  type: TaskType
  isCompleted: boolean
}

export type ListFilter = 'all' | 'complete' | 'incomplete'

export interface State {
  newTask: TodoItem
  taskItems: TodoItem[]
  listFilter: ListFilter
}