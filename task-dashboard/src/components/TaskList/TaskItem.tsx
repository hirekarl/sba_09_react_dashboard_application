import type { Task, TaskItemProps } from "../../types"

export default function TaskItem({ task }: TaskItemProps) {
  const { id, title, description, dueDate, status, priority }: Task = task
  return (
    <div>
      <h4>TaskItem</h4>
      <h5>Props</h5>
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Description: {description}</li>
        <li>Due Date: {dueDate}</li>
        <li>Status: {status}</li>
        <li>Priority: {priority}</li>
      </ul>
    </div>
  )
}
