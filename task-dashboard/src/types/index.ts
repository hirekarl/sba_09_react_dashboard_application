export type TaskID = string

export type TaskStatus = "completed" | "in-progress" | "pending"
export type TaskPriority = "high" | "medium" | "low"

export type TaskPriorityFilter = TaskPriority | "all"
export type TaskStatusFilter = TaskStatus | "all"

export type Filter =
  | { status: TaskStatusFilter }
  | { priority: TaskPriorityFilter }

export type SortCategory = "status" | "priority" | "due-date" | "title"

export interface Task {
  id: TaskID
  title: string
  description: string
  dueDate: string
  status: TaskStatus
  priority: TaskPriority
}

export interface TaskListProps {
  tasks: Task[]
  sortCategory: SortCategory
  onTaskDelete: (taskID: TaskID) => void
  onTaskStatusChange: (taskID: TaskID, newTaskStatus: TaskStatus) => void
}

export interface TaskItemProps {
  key: TaskID
  task: Task
  onDelete: (taskID: TaskID) => void
  onStatusChange: (taskID: TaskID, newTaskStatus: TaskStatus) => void
}

export interface TaskFormProps {
  onTaskAdd: (task: Task) => void
}

export interface Filters {
  status: TaskStatusFilter
  priority: TaskPriorityFilter
}

export interface TaskFilterProps {
  filters: Filters
  sortCategory: SortCategory
  onFilterChange: (newFilter: Filter) => void
  onSortCategoryChange: (newSortCategory: SortCategory) => void
}

export interface TaskStatisticsProps {
  tasks: Task[]
}
