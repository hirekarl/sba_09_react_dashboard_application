import { useState } from "react"
import type { Task, TaskID, TaskStatus } from "../../types"
import TaskForm from "../TaskForm/TaskForm"
import TaskFilter from "../TaskFilter/TaskFilter"
import TaskList from "../TaskList/TaskList"

import { mockTasks } from "../../data/mockTasks"

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

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

  return (
    <>
      <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
        <TaskForm onTaskAdd={handleTaskAdd} />
      </div>
      <div className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
        <TaskFilter />
        <TaskList
          onTaskStatusChange={handleTaskStatusChange}
          onTaskDelete={handleTaskDelete}
          tasks={tasks}
        />
      </div>
    </>
  )
}
