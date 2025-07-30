import TaskItem from "./TaskItem"
import type { TaskListProps } from "../../types"

export default function TaskList({ tasks, onTaskDelete }: TaskListProps) {
  const tasksToRender = tasks.map((task) => {
    return <TaskItem key={task.id} task={task} onDelete={onTaskDelete} />
  })

  return (
    <>
      <h3>TaskList</h3>
      {tasksToRender}
    </>
  )
}
