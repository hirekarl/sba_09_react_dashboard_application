import { useState } from "react"
import type { Task, TaskFormProps } from "../../types"

export default function TaskForm({ onTaskAdd }: TaskFormProps) {
  const uuid: string = window.crypto.randomUUID()
  const blankFormData: Task = {
    id: uuid,
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
    priority: "low",
  }
  const [formData, setFormData] = useState<Task>(blankFormData)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    onTaskAdd(formData)
    setFormData(blankFormData)
  }

  return (
    <div className="border rounded-3 p-3">
      <h2 className="fs-4">Add a new Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label
            htmlFor={`title-input-${formData.id}`}
            className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              id={`title-input-${formData.id}`}
              onChange={handleChange}
              className="form-control"
              value={formData.title}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor={`description-input-${formData.id}`}
            className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="description"
              id={`description-input-${formData.id}`}
              onChange={handleChange}
              className="form-control"
              value={formData.description}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor={`due-date-input-${formData.id}`}
            className="col-sm-2 col-form-label">
            Due Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              name="dueDate"
              id={`due-date-input-${formData.id}`}
              className="form-control"
              onChange={handleChange}
              value={formData.dueDate}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between gap-3 mb-3">
          <div className="input-group">
            <label
              htmlFor={`status-select-${formData.id}`}
              className="input-group-text">
              Status
            </label>
            <select
              name="status"
              id={`status-select-${formData.id}`}
              className="form-select"
              onChange={handleChange}
              value={formData.status}>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="input-group">
            <label
              htmlFor={`priority-select-${formData.id}`}
              className="input-group-text">
              Priority
            </label>
            <select
              name="priority"
              id={`priority-select-${formData.id}`}
              className="form-select"
              onChange={handleChange}
              value={formData.priority}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
