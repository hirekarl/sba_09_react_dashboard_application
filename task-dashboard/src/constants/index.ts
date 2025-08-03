import type {
  TaskStatus,
  TaskPriority,
  Filters,
  SortCategory,
  SortRank,
  SortFunc,
  Task,
  BootstrapColors,
} from "../types"

//////////////
// Defaults //
//////////////

export const defaultFilters: Filters = {
  status: "all",
  priority: "all",
} as const

export const defaultSortCategory: SortCategory = "status"

export const blankFormData: Task = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
  status: "pending",
  priority: "low",
} as const

export const defaultModalState = {
  taskToEdit: blankFormData,
  modalVisible: false,
} as const

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

/////////////
// Sorting //
/////////////

// When sorting by status, show pending, then in-progress, then completed.
export const STATUS_SORT_RANK: Record<TaskStatus, SortRank> = {
  "pending": 1,
  "in-progress": 2,
  "completed": 3,
} as const

// When sorting by priority, show high, then medium, then low.
export const PRIORITY_SORT_RANK: Record<TaskPriority, SortRank> = {
  high: 1,
  medium: 2,
  low: 3,
} as const

//////////
// Maps //
//////////

// Maps the given status to its corresponding search function.
export const SORT_CATEGORY_TO_SORT_FUNC: Record<SortCategory, SortFunc> = {
  "status": (a, b) => STATUS_SORT_RANK[a.status] - STATUS_SORT_RANK[b.status],
  "priority": (a, b) =>
    PRIORITY_SORT_RANK[a.priority] - PRIORITY_SORT_RANK[b.priority],
  "due-date": (a, b) => {
    const dateA = new Date(a.dueDate)
    const dateB = new Date(b.dueDate)
    return dateA.getTime() - dateB.getTime()
  },
  "title": (a, b) => a.title.localeCompare(b.title),
} as const

// Maps the given priority to its corresponding Bootstrap color.
export const PRIORITY_TO_BOOTSTRAP_COLOR: Record<
  TaskPriority,
  BootstrapColors
> = {
  high: "danger",
  medium: "warning",
  low: "info",
}
