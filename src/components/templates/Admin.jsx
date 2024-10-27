import { Outlet } from "react-router-dom"
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