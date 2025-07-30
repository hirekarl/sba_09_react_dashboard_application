import type { Task, TaskID, TaskItemProps } from "../../types"

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  const { id, title, description, dueDate, status, priority }: Task = task

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const taskID: TaskID = event.currentTarget.dataset.id as TaskID
    onDelete(taskID)
  }

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
      <button className="btn btn-danger" data-id={id} onClick={handleClick}>
        Delete
      </button>
    </div>
  )
}
