import { Route, Routes } from "react-router-dom"
import Login from "./component/login/Login"
import Todo from "./component/todo/Todo"


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default App
