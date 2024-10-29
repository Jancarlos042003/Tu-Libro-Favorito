import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import './index.css'
import { CartProvider } from './context/CartContext'


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
)
