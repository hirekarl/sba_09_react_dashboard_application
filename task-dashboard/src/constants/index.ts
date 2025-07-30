import type { TaskStatus, TaskPriority, Filters, SortCategory } from "../types"

export const defaultFilters: Filters = { status: "all", priority: "all" }
export const defaultSortCategory: SortCategory = "status"

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
  "title",
] as const

type SortRank = 1 | 2 | 3

export const STATUS_SORT_RANK: Record<TaskStatus, SortRank> = {
  "pending": 1,
  "in-progress": 2,
  "completed": 3,
} as const

export const PRIORITY_SORT_RANK: Record<TaskPriority, SortRank> = {
  high: 1,
  medium: 2,
  low: 3,
} as const
