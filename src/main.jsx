import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Cadastro } from './Cadastro.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Home } from './pages/Home.jsx';
import { Contato } from './pages/Contato.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },

  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/cadastro",
    element: <Cadastro/>,
  },

  {
    path: "*",
    element: <NotFound/>,
  },


   {
    path: "/contato",
    element: <Contato/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
