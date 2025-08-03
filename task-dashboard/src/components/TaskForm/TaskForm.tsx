/*
This is the component that handles new task addition.
Fields are valid if they are not an empty string.
*/

import { useEffect, useState } from "react"
import type { FieldValidity, Task, TaskFormProps } from "../../types"
import { blankFormData } from "../../constants"
import { fieldIsValid } from "../../utils/taskUtils"

export default function TaskForm({ onTaskAdd }: TaskFormProps) {
  const [formData, setFormData] = useState<Task>(blankFormData)
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)
  const [fieldValidity, setFieldValidity] = useState<FieldValidity>({
    title: null,
    description: null,
    dueDate: null,
    status: true,
    priority: true,
  })

  useEffect(() => {
    if (Object.values(fieldValidity).every((v) => v === true)) {
      setSubmitDisabled(false)
    }
  }, [fieldValidity])

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target

    setFieldValidity((prevFieldValidity) => ({
      ...prevFieldValidity,
      [name]: fieldIsValid(value),
    }))

    setFormData((prevFormData) => ({
      ...prevFormData,
      id: window.crypto.randomUUID(),
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    onTaskAdd(formData)
    setFormData(blankFormData)
    setFieldValidity((prevFieldValidity) => ({
      ...prevFieldValidity,
      title: null,
      description: null,
      dueDate: null,
    }))
    setSubmitDisabled(true)
  }

  return (
    <div className="border rounded-3 p-3 mb-3">
      <h2 className="fs-4 text-center">Add Task</h2>
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
              className={`form-control ${
                fieldValidity.title ? "is-valid" : "is-invalid"
              }`}
              value={formData.title}
              aria-describedby={
                !fieldValidity.title ? `title-input-help-${formData.id}` : ""
              }
              required
            />
            {!fieldValidity.title && (
              <div
                id={`title-input-help-${formData.id}`}
                className="form-text text-danger">
                You must enter a title.
              </div>
            )}
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
              className={`form-control ${
                fieldValidity.description ? "is-valid" : "is-invalid"
              }`}
              value={formData.description}
              required
              aria-describedby={
                !fieldValidity.description
                  ? `description-input-help-${formData.id}`
                  : ""
              }
            />
            {!fieldValidity.description && (
              <div
                id={`description-input-help-${formData.id}`}
                className="form-text text-danger">
                You must enter a description.
              </div>
            )}
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
              className={`form-control ${
                fieldValidity.dueDate ? "is-valid" : "is-invalid"
              }`}
              onChange={handleChange}
              value={formData.dueDate}
              required
              aria-describedby={
                !fieldValidity.dueDate
                  ? `due-date-input-help-${formData.id}`
                  : ""
              }
            />
            {!fieldValidity.dueDate && (
              <div
                id={`due-date-input-help-${formData.id}`}
                className="form-text text-danger">
                You must enter a due date.
              </div>
            )}
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
              value={formData.status}
              required>
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
              value={formData.priority}
              required>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={submitDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
