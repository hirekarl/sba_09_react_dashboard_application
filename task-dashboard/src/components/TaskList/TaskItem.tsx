import type { Task, TaskID, TaskStatus, TaskItemProps } from "../../types"
import { TASK_STATUSES } from "../../constants"

export default function TaskItem({
  task,
  onStatusChange,
  onEdit,
  onDelete,
}: TaskItemProps) {
  const { id, title, description, dueDate, status, priority }: Task = task

  function formatDate(): string {
    const [year, month, day] = dueDate.split("-").map((part) => parseInt(part))
    return `${month}/${day}/${year}`
  }

  function handleEditButtonClick(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    const taskID: TaskID = event.currentTarget.dataset.id as TaskID
    onEdit(taskID)
  }

  function handleDeleteButtonClick(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    const taskID: TaskID = event.currentTarget.dataset.id as TaskID
    onDelete(taskID)
  }

  function handleStatusChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    if (TASK_STATUSES.includes(event.target.value as TaskStatus)) {
      const newTaskStatus = event.target.value as TaskStatus
      onStatusChange(id, newTaskStatus)
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-title">
          <h3 className="fs-5">{title}</h3>
        </div>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Priority:</strong> {priority}
        </p>
        <p className="card-text">
          <strong>Due:</strong> {formatDate()}
        </p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between gap-3">
          <div className="input-group w-50">
            <label htmlFor={`status-select-${id}`} className="input-group-text">
              Status
            </label>
            <select
              id={`status-select-${id}`}
              data-id={id}
              onChange={handleStatusChange}
              value={status}
              className="form-select">
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-sm btn-warning"
              data-id={id}
              onClick={handleEditButtonClick}>
              Edit
            </button>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              data-id={id}
              onClick={handleDeleteButtonClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
