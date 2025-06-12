export interface EventItem {
  id: number
  title: string
  category: string
  description: string
  location: string
  date: string
  time: string
}

type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface TodoItem {
  label: string
  type: TaskType
  isCompleted: boolean
}

export interface State {
  newTask: TodoItem
  taskItems: TodoItem[]
  listFilter: 'all' | 'complete' | 'incomplete'
}