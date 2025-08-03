import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import type {
  Task,
  TaskEditModalProps,
  ModalState,
  ModalFieldValidity,
} from "../../types"
import { fieldIsValid } from "../../utils/taskUtils"

export default function TaskEditModal({
  modalState,
  onModalClose,
  onModalSave,
}: TaskEditModalProps) {
  const { taskToEdit, modalVisible }: ModalState = modalState
  const [modalFormData, setModalFormData] = useState<Task>(taskToEdit)
  const [saveDisabled, setSaveDisabled] = useState<boolean>(false)
  const [fieldValidity, setFieldValidity] = useState<ModalFieldValidity>({
    title: true,
    description: true,
    dueDate: true,
    priority: true,
  })

  useEffect(() => {
    setModalFormData(taskToEdit)
  }, [taskToEdit])

  useEffect(() => {
    if (Object.values(fieldValidity).every((v) => v === true)) {
      setSaveDisabled(false)
    }
  }, [fieldValidity])

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target

    setFieldValidity((prevFieldValidity) => ({
      ...prevFieldValidity,
      [name]: fieldIsValid(value),
    }))

    setModalFormData((prevModalFormData) => ({
      ...prevModalFormData,
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    onModalSave(modalFormData)
    onModalClose()
  }

  return (
    <Modal show={modalVisible}>
      <Modal.Header>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      {taskToEdit && modalFormData && (
        <>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="modal-title-input" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="modal-title-input"
                  className={`form-control ${
                    fieldValidity.title ? "is-valid" : "is-invalid"
                  }`}
                  onChange={handleChange}
                  value={modalFormData.title}
                  required
                  aria-describedby={
                    !fieldValidity.title ? "modal-title-input-help" : ""
                  }
                />
                {!fieldValidity.title && (
                  <div
                    id="modal-title-input-help"
                    className="form-text text-danger">
                    You must enter a title.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="modal-description-input" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="modal-description-input"
                  className={`form-control ${
                    fieldValidity.description ? "is-valid" : "is-invalid"
                  }`}
                  onChange={handleChange}
                  value={modalFormData.description}
                  required
                  aria-describedby={
                    !fieldValidity.description
                      ? "modal-description-input-help"
                      : ""
                  }
                />
                {!fieldValidity.description && (
                  <div
                    id="modal-description-input-help"
                    className="form-text text-danger">
                    You must enter a description.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="modal-due-date-input" className="form-label">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  id="modal-due-date-input"
                  className={`form-control ${
                    fieldValidity.dueDate ? "is-valid" : "is-invalid"
                  }`}
                  onChange={handleChange}
                  value={modalFormData.dueDate}
                  required
                  aria-describedby={
                    !fieldValidity.dueDate ? "modal-due-date-input-help" : ""
                  }
                />
                {!fieldValidity.dueDate && (
                  <div
                    id="modal-due-date-input-help"
                    className="form-text text-danger">
                    You must enter a due date.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <label
                    htmlFor="modal-priority-select"
                    className="input-group-text">
                    Priority
                  </label>
                  <select
                    name="priority"
                    id="modal-priority-select"
                    className="form-select"
                    onChange={handleChange}
                    value={modalFormData.priority}
                    required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onModalClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" disabled={saveDisabled}>
                Save changes
              </Button>
            </Modal.Footer>
          </form>
        </>
      )}
    </Modal>
  )
}
