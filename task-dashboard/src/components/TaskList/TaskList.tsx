import TaskItem from "./TaskItem"
import type { TaskListProps, SortFunc } from "../../types"
import { SORT_CATEGORY_TO_SORT_FUNC } from "../../constants"

export default function TaskList({
  tasks,
  sortCategory,
  onTaskStatusChange,
  onTaskEdit,
  onTaskDelete,
}: TaskListProps) {
  const sortFunc: SortFunc = SORT_CATEGORY_TO_SORT_FUNC[sortCategory]
  tasks.sort(sortFunc)

  const tasksToRender = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        onStatusChange={onTaskStatusChange}
        onEdit={onTaskEdit}
        onDelete={onTaskDelete}
      />
    )
  })

  return <>{tasksToRender}</>
}
