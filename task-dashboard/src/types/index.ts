export type TaskID = string
export type TaskStatus = "completed" | "in-progress" | "pending" | "overdue"
export type TaskPriority = "high" | "medium" | "low"

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
}

export interface TaskItemProps {
  key: TaskID
  task: Task
  onDelete: (taskID: TaskID) => void
}
