import { useState } from "react"
import "./App.css"
import "./styles/sb-admin-2.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"
import { Login } from "./pages/Account"
import { Admin } from "./pages/Admin/Admin"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" id="wrapper">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
