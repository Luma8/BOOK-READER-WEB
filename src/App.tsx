import { RouterProvider } from "react-router-dom"
import { routerAuth } from "./routers/Router"

function App() {

  return (
    <RouterProvider router={routerAuth} />
  )
}

export default App
