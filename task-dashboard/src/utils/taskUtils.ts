import type { Task } from "../types";

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
  } catch(error) {
    console.error(error)
  }
}
