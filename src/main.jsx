import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import './index.css'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'


createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </CartProvider>
  </UserProvider>
)
