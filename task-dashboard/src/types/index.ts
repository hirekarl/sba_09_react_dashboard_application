export type TaskID = string

export type TaskStatus = "completed" | "in-progress" | "pending"
export type TaskPriority = "high" | "medium" | "low"

export type TaskPriorityFilters = TaskPriority | "all"
export type TaskStatusFilters = TaskStatus | "all"

export type Filter =
  | { status: TaskStatusFilters }
  | { priority: TaskPriorityFilters }

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
  status: TaskStatusFilters
  priority: TaskPriorityFilters
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
