import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

// Definimos el layout que mantendrá el footer siempre abajo
const App = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App