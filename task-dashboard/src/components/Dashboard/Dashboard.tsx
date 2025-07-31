import { useState } from "react"
import {
  type Task,
  type TaskID,
  type TaskStatus,
  type Filter,
  type Filters,
  type SortCategory,
} from "../../types"
import TaskForm from "../TaskForm/TaskForm"
import TaskFilter from "../TaskFilter/TaskFilter"
import TaskList from "../TaskList/TaskList"
import TaskStatistics from "../TaskStatistics/TaskStatistics"
import TaskEditModal from "../TaskEditModal/TaskEditModal"
import {
  blankFormData,
  defaultFilters,
  defaultSortCategory,
} from "../../constants"
import { mockTasks } from "../../data/mockTasks"

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [sortCategory, setSortCategory] =
    useState<SortCategory>(defaultSortCategory)
  const [taskToEdit, setTaskToEdit] = useState<Task>(blankFormData)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  function getTaskByID(taskID: TaskID): Task | null {
    const task = tasks.find((t) => t.id === taskID)
    return task ? task : null
  }

  function handleTaskAdd(newTask: Task) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  function handleTaskEdit(taskID: TaskID): void {
    const task = getTaskByID(taskID)
    if (task) {
      setTaskToEdit(task)
      setModalVisible(true)
    }
  }

  function handleModalSave(newTask: Task): void {
    setTasks((prevTasks) =>
      prevTasks.toSpliced(prevTasks.indexOf(taskToEdit), 1, newTask)
    )
  }

  function handleModalClose(): void {
    setModalVisible(false)
  }

  function handleTaskDelete(taskID: TaskID): void {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskID))
  }

  function handleTaskStatusChange(
    taskID: TaskID,
    newTaskStatus: TaskStatus
  ): void {
    const task = getTaskByID(taskID)

    if (task)
      setTasks((prevTasks) =>
        prevTasks.toSpliced(prevTasks.indexOf(task), 1, {
          ...task,
          status: newTaskStatus,
        })
      )
  }

  function handleFilterChange(newFilter: Filter): void {
    if ("status" in newFilter) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        status: newFilter.status,
      }))
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        priority: newFilter.priority,
      }))
    }
  }

  function handleSortCategoryChange(newSortCategory: SortCategory): void {
    setSortCategory(newSortCategory)
  }

  return (
    <>
      <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
        <TaskForm onTaskAdd={handleTaskAdd} />
        <TaskStatistics tasks={tasks} />
      </div>
      <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
        <TaskFilter
          filters={filters}
          sortCategory={sortCategory}
          onFilterChange={handleFilterChange}
          onSortCategoryChange={handleSortCategoryChange}
        />
        <hr />
        <TaskList
          tasks={tasks.filter(
            (t) =>
              (filters.status === "all" || t.status === filters.status) &&
              (filters.priority === "all" || t.priority === filters.priority)
          )}
          sortCategory={sortCategory}
          onTaskStatusChange={handleTaskStatusChange}
          onTaskEdit={handleTaskEdit}
          onTaskDelete={handleTaskDelete}
        />
      </div>
      <TaskEditModal
        taskToEdit={taskToEdit}
        modalVisible={modalVisible}
        onModalClose={handleModalClose}
        onModalSave={handleModalSave}
      />
    </>
  )
}
