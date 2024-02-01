import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createRoutesFromElements } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Summary from "./pages/Summary.jsx"
import Form from "./pages/Form.jsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path=":id/summary" element={<Summary />} />
      <Route path=":id/book" element={<Form />} />
    </Route>
  )
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
