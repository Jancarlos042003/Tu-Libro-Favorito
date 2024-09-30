import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Detail from './pages/Detail.jsx'
import Header from "./components/header/Header.jsx"
import ContentCategory from './pages/ContentCategory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    <Detail />
    <Header />
    <ContentCategory />
  </StrictMode>,
)
