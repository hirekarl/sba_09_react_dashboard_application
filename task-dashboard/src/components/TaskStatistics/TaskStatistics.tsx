import type { TaskStatisticsProps } from "../../types"
import { TASK_STATUSES, TASK_PRIORITIES } from "../../constants"

export default function TaskStatistics({ tasks }: TaskStatisticsProps) {
  const totalTasksCount = tasks.length

  const [completedTasksCount, inProgressTasksCount, pendingTasksCount] =
    TASK_STATUSES.map((status) =>
      tasks.reduce(
        (acc, t) => (t.status === status ? (acc += 1) : acc),
        0
      )
    )

  const [
    highPriorityTasksCount,
    mediumPriorityTasksCount,
    lowPriorityTasksCount,
  ] = TASK_PRIORITIES.map((priority) =>
    tasks.reduce(
      (acc, t) => (t.priority === priority ? (acc += 1) : acc),
      0
    )
  )

  return (
    <div className="mb-3 border rounded-3 p-3">
      <h2 className="fs-4 text-center">Task Statistics</h2>
      <h3 className="fs-5 text-center mb-3">Total Tasks: {totalTasksCount}</h3>
      <div className="d-flex justify-content-between gap-3">
        <div className="border rounded-3 p-3 w-100">
          <h3 className="fs-6 text-center">Total By Status</h3>
          <ul>
            <li>Pending: {pendingTasksCount}</li>
            <li>In Progress: {inProgressTasksCount}</li>
            <li>Completed: {completedTasksCount}</li>
          </ul>
        </div>
        <div className="border rounded-3 p-3 w-100">
          <h3 className="fs-6 text-center">Total By Priority</h3>
          <ul>
            <li>High: {highPriorityTasksCount}</li>
            <li>Medium: {mediumPriorityTasksCount}</li>
            <li>Low: {lowPriorityTasksCount}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
