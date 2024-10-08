import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const App = () => {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App