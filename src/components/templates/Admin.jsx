import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Sidebar from "../sidebar/Sidebar"

const Admin = () => {
    return(
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Admin