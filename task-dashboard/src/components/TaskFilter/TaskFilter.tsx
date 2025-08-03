/*
This is the component that handles filtering and search.
*/

import type {
  TaskFilterProps,
  TaskPriorityFilter,
  TaskStatusFilter,
  SortCategory,
} from "../../types"

export default function TaskFilter({
  filters,
  sortCategory,
  onFilterChange,
  onSortCategoryChange,
  onSearchInputChange,
}: TaskFilterProps) {
  const { status, priority } = filters

  function handleStatusFilterSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    onFilterChange({ status: event.target.value as TaskStatusFilter })
  }

  function handlePriorityFilterSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    onFilterChange({ priority: event.target.value as TaskPriorityFilter })
  }

  function handleSortCategorySelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    onSortCategoryChange(event.target.value as SortCategory)
  }

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>): void {
    onSearchInputChange(event.target.value.toLowerCase())
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
      <div className="mb-3">
        <div className="input-group">
          <label htmlFor="search-input" className="input-group-text">
            <i className="bi bi-search"></i>
          </label>
          <input
            type="search"
            id="search-input"
            className="form-control"
            onChange={handleSearchInput}
            aria-describedby="search-input-help"
          />
        </div>
        <p id="search-input-help" className="form-text">
          Search for text in task title or description.
        </p>
      </div>
    </>
  )
}
