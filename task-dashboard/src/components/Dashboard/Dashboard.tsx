import { useState } from "react"
import type { Task, TaskID } from "../../types"
import TaskForm from "../TaskForm/TaskForm"
import TaskFilter from "../TaskFilter/TaskFilter"
import TaskList from "../TaskList/TaskList"

import { mockTasks } from "../../data/mockTasks"

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  function handleTaskDelete(taskID: TaskID): void {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskID))
  }

  return (
    <>
      <h2>Dashboard</h2>
      <div className="col-6">
        <TaskForm />
      </div>
      <div className="col-6">
        <TaskFilter />
        <TaskList onTaskDelete={handleTaskDelete} tasks={tasks} />
      </div>
    </>
  )
}
