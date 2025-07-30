import { useState } from "react"
import type { Task, TaskID, TaskStatus, Filter, Filters } from "../../types"
import TaskForm from "../TaskForm/TaskForm"
import TaskFilter from "../TaskFilter/TaskFilter"
import TaskList from "../TaskList/TaskList"
import { mockTasks } from "../../data/mockTasks"

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  const defaultFilters: Filters = { status: "all", priority: "all" }
  const [filters, setFilters] = useState<Filters>(defaultFilters)

  function handleTaskAdd(task: Task) {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  function handleTaskDelete(taskID: TaskID): void {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskID))
  }

  function handleTaskStatusChange(
    taskID: TaskID,
    newTaskStatus: TaskStatus
  ): void {
    const task = tasks.find((t) => t.id === taskID)

    if (task)
      setTasks((prevTasks) =>
        prevTasks.toSpliced(prevTasks.indexOf(task), 1, {
          ...task,
          status: newTaskStatus,
        })
      )
  }

  function handleFilterChange(newFilter: Filter) {
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

  return (
    <>
      <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
        <TaskForm onTaskAdd={handleTaskAdd} />
      </div>
      <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
        <h2>Tasks</h2>
        <TaskFilter filters={filters} onFilterChange={handleFilterChange} />
        <hr />
        <TaskList
          onTaskStatusChange={handleTaskStatusChange}
          onTaskDelete={handleTaskDelete}
          tasks={tasks.filter(
            (t) =>
              (filters.status === "all" || t.status === filters.status) &&
              (filters.priority === "all" || t.priority === filters.priority)
          )}
        />
      </div>
    </>
  )
}
