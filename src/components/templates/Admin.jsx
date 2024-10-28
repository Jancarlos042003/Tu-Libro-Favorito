import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"

const Admin = () => {
    return(
        <div>
            <Sidebar />
            <div className="ml-12 px-2 py-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin