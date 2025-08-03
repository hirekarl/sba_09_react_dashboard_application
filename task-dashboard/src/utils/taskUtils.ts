import type { Task } from "../types"

export function getTasksFromLocalStorage(): Task[] | null {
  const tasksJSON = localStorage.getItem("tasks")

  if (tasksJSON) {
    return JSON.parse(tasksJSON)
  }

  return null
}

export function saveTasksToLocalStorage(tasks: Task[]): void {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } catch (error) {
    console.error(error)
  }
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split("-").map((part) => parseInt(part))
  return `${month}/${day}/${year}`
}

export function fieldIsValid(value: string): boolean {
  return value !== ""
}
