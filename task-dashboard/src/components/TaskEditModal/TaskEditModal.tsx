import { useEffect, useState } from "react"
import type { Task, TaskEditModalProps, ModalState } from "../../types"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"

export default function TaskEditModal({
  modalState,
  onModalClose,
  onModalSave,
}: TaskEditModalProps) {
  const {taskToEdit, modalVisible}: ModalState = modalState
  const [modalFormData, setModalFormData] = useState<Task>(taskToEdit)

  useEffect(() => {
    setModalFormData(taskToEdit)
  }, [taskToEdit])

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target

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
                  className="form-control"
                  onChange={handleChange}
                  value={modalFormData.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="modal-description-input" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="modal-description-input"
                  className="form-control"
                  onChange={handleChange}
                  value={modalFormData.description}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="modal-due-date-input" className="form-label">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  id="modal-due-date-input"
                  className="form-control"
                  onChange={handleChange}
                  value={modalFormData.dueDate}
                />
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
                    value={modalFormData.priority}>
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
              <Button type="submit" variant="primary">
                Save changes
              </Button>
            </Modal.Footer>
          </form>
        </>
      )}
    </Modal>
  )
}
