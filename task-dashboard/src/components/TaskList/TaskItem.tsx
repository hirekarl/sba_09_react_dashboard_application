/*
This is the component that renders each Task.
*/

import type { Task, TaskStatus, TaskItemProps } from "../../types"
import { PRIORITY_TO_BOOTSTRAP_COLOR, TASK_STATUSES } from "../../constants"
import { formatDate } from "../../utils/taskUtils"

export default function TaskItem({
  task,
  onStatusChange,
  onEdit,
  onDelete,
}: TaskItemProps) {
  const { id, title, description, dueDate, status, priority }: Task = task

  function handleEditButtonClick(): void {
    onEdit(id)
  }

  function handleDeleteButtonClick(): void {
    onDelete(id)
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
        <div className="card-title d-flex justify-content-between align-items-center">
          <h3 className="fs-5">{title}</h3>
          <span
            className={`badge text-bg-${PRIORITY_TO_BOOTSTRAP_COLOR[priority]}`}>
            {priority.toUpperCase()}
          </span>
        </div>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Due:</strong> {formatDate(dueDate)}
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
