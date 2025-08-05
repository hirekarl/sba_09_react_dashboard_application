import type { ImportExportProps } from "../../types";

export default function ImportExport({onImport, exportURL}: ImportExportProps) {
  return (
    <div className="btn-group w-100 mb-3">
      <button type="button" className="btn btn-sm btn-primary" onClick={onImport} disabled>Import Tasks</button>
      <a href={exportURL} download="tasks.json" type="button" className="btn btn-sm btn-primary">Export Tasks</a>
    </div>
  )
}
