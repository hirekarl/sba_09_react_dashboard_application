import type { Task } from "../types"

// Utility function for getting tasks from localStorage
export function getTasksFromLocalStorage(): Task[] | null {
  const tasksJSON = localStorage.getItem("tasks")

  if (tasksJSON) {
    return JSON.parse(tasksJSON)
  }

  return null
}

// Utility function for saving tasks to localStorage
export function saveTasksToLocalStorage(tasks: Task[]): void {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } catch (error) {
    console.error(error)
  }
}

// Utility function for transforming YYYY-MM-DD to M(M)/D(D)/YYYY
export function formatDate(date: string): string {
  const [year, month, day] = date.split("-").map((part) => parseInt(part))
  return `${month}/${day}/${year}`
}

// Utility function for determining whether a field input is not an empty string
export function fieldIsValid(value: string): boolean {
  return value !== ""
}
