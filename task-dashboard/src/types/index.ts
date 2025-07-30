export type TaskStatus = "completed" | "in-progress" | "pending" | "overdue"

export type TaskPriority = "high" | "medium" | "low"

export interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  status: TaskStatus
  priority: TaskPriority
}

export interface TaskListProps {
  tasks: Task[]
}

export interface TaskItemProps {
  task: Task
}
