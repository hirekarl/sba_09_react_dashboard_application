import type { TaskStatus, TaskPriority, SortCategory } from "../types"

export const TASK_STATUSES: TaskStatus[] = [
  "completed",
  "in-progress",
  "pending",
] as const

export const TASK_PRIORITIES: TaskPriority[] = [
  "high",
  "medium",
  "low",
] as const

export const SORT_CATEGORIES: SortCategory[] = [
  "status",
  "priority",
  "due-date",
  "title"
] as const

export const statusSortRank: Record<TaskStatus, number> = {
  "pending": 1,
  "in-progress": 2,
  "completed": 3,
} as const

export const prioritySortRank: Record<TaskPriority, number> = {
  high: 1,
  medium: 2,
  low: 3,
} as const
