import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import './index.css'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Crear una instancia de QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </CartProvider>
    </UserProvider>
  </QueryClientProvider>
)
