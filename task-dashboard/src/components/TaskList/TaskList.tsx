import TaskItem from "./TaskItem"
import type { Task, TaskListProps } from "../../types"
import { STATUS_SORT_RANK, PRIORITY_SORT_RANK } from "../../constants"

export default function TaskList({
  tasks,
  sortCategory,
  onTaskDelete,
  onTaskStatusChange,
}: TaskListProps) {
  let sortFunc: (a: Task, b: Task) => number

  switch (sortCategory) {
    case "status":
      sortFunc = (a, b) => STATUS_SORT_RANK[a.status] - STATUS_SORT_RANK[b.status]
      break
    case "priority":
      sortFunc = (a, b) =>
        PRIORITY_SORT_RANK[a.priority] - PRIORITY_SORT_RANK[b.priority]
      break
    case "due-date":
      sortFunc = (a, b) => {
        const dateA = new Date(a.dueDate)
        const dateB = new Date(b.dueDate)
        return dateA.getTime() - dateB.getTime()
      }
      break
    case "title":
      sortFunc = (a, b) => a.title.localeCompare(b.title)
      break
  }

  tasks.sort(sortFunc)

  const tasksToRender = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        onDelete={onTaskDelete}
        onStatusChange={onTaskStatusChange}
      />
    )
  })

  return <>{tasksToRender}</>
}
