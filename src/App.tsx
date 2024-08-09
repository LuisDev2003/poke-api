import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Details from "./pages/Details"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:name",
    element: <Details />,
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
