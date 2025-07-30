export type TaskID = string
export type TaskStatus = "completed" | "in-progress" | "pending"
export type TaskStatusFilters = TaskStatus | "all"
export type TaskPriority = "high" | "medium" | "low"
export type TaskPriorityFilters = TaskPriority | "all"

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

export type Filter =
  | { status: TaskStatusFilters }
  | { priority: TaskPriorityFilters }

export interface Filters {
  status: TaskStatusFilters
  priority: TaskPriorityFilters
}

export interface TaskFilterProps {
  filters: Filters
  onFilterChange: (newFilter: Filter) => void
}
