import React from "react"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"
// import TasksContext from "./context/TasksContext"

export default function App() {
  return (
    <div>
      {/* <TasksContext /> */}
      <AddTask />
      <TaskList />
    </div>
  )
}