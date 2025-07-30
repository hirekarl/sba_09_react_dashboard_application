import { useState } from "react"
import type { Task } from "../../types"
import TaskForm from "../TaskForm/TaskForm"
import TaskFilter from "../TaskFilter/TaskFilter"
import TaskList from "../TaskList/TaskList"

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <>
      <h2>Dashboard</h2>
      <div className="col-6">
        <TaskForm />
      </div>
      <div className="col-6">
        <TaskFilter />
        <TaskList tasks={tasks} />
      </div>
    </>
  )
}
