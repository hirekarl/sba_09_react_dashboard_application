import type {
  TaskFilterProps,
  TaskPriorityFilters,
  TaskStatusFilters,
  SortCategory
} from "../../types"

export default function TaskFilter({
  filters,
  sortCategory,
  onFilterChange,
  onSortCategoryChange,
}: TaskFilterProps) {
  const { status, priority } = filters

  function handleStatusFilterSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    onFilterChange({ status: event.target.value as TaskStatusFilters })
  }

  function handlePriorityFilterSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    onFilterChange({ priority: event.target.value as TaskPriorityFilters })
  }

  function handleSortCategorySelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    onSortCategoryChange(event.target.value as SortCategory)
  }

  return (
    <>
      <div className="d-flex justify-content-between gap-3 mb-3">
        <div className="input-group">
          <label htmlFor="status-filter-select" className="input-group-text">
            Filter by Status
          </label>
          <select
            id="status-filter-select"
            className="form-select"
            onChange={handleStatusFilterSelect}
            value={status}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="priority-filter-select" className="input-group-text">
            Filter by Priority
          </label>
          <select
            id="priority-filter-select"
            className="form-select"
            onChange={handlePriorityFilterSelect}
            value={priority}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <div className="input-group">
          <label htmlFor="sort-category-select" className="input-group-text">
            Sort by
          </label>
          <select
            id="sort-category-select"
            className="form-select"
            onChange={handleSortCategorySelect}
            value={sortCategory}>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
            <option value="due-date">Due Date</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </>
  )
}
