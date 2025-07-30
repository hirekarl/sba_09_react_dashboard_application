import TaskItem from "./TaskItem"
import type { TaskListProps } from "../../types"

export default function TaskList({
  tasks,
  onTaskDelete,
  onTaskStatusChange,
}: TaskListProps) {
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

  return (
    <>
      {tasksToRender}
    </>
  )
}
