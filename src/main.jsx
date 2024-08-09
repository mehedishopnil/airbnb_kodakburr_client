import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './providers/AuthProvider/AuthProvider'
import { router } from './routers/Rourter.jsx/Router'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>
)
