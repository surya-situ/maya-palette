import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import './index.css'
// import App from './App.jsx'
import Layout from './pages/Layout.jsx'
import Home from './components/Home.jsx'
import Templates from './components/Templates.jsx'
import Projects from './components/Projects.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/templates',
        element: <Templates />
      },
      {
        path: '/projects',
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
