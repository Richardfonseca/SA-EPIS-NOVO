import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Epi from './Epi.jsx'
import Funcionario from './Funcionario.jsx'
import Registro from './Registro.jsx'
import Historico from './Historico.jsx'

//define as páginas do projeto
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/epi",
    element: <Epi />
  },
  {
    path: "/funcionario",
    element: <Funcionario />
  },
  {
    path: "/registro",
    element: <Registro />
  },
  {
    path: "/historico",
    element: <Historico />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
