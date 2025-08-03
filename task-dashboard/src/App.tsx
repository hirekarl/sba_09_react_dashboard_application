import { useEffect, useState } from "react"
import type { BootstrapTheme } from "./types"
import Dashboard from "./components/Dashboard/Dashboard"
import "./App.css"

function App() {
  const [colorTheme, setColorTheme] = useState<BootstrapTheme>("dark")

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", colorTheme)
  })

  function toggleTheme(): void {
    if (colorTheme === "dark") setColorTheme("light")
    else setColorTheme("dark")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-5">SBA 9: React Dashboard Application</h1>
          <button
            type="button"
            className="btn btn-tertiary border"
            onClick={toggleTheme}>
            {colorTheme === "dark" ? (
              <>
                <i className="bi bi-sun-fill"></i> Light Mode
              </>
            ) : (
              <>
                <i className="bi bi-moon-fill"></i> Dark Mode
              </>
            )}
          </button>
        </div>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
