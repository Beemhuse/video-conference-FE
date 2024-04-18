import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainVideoPage from './videoComponents/MainVideoPage'
import HomePage from './pages/Home'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/join-video",
      element: <MainVideoPage />,
    },
  ])

  return (
    <RouterProvider
    router={router}
    future={{ v7_startTransition: true }}
  />
  )
}

export default App
