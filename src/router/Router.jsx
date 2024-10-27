import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import App from "../components/templates/App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminHome from "../pages/AdminHome"
import Admin from "../components/templates/Admin";
import CreateBook from "../components/form/CreateBook";
import Inventory from "../pages/Inventory";
import EditBook from "../components/form/EditBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<Error404/>,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/productos",
                element: <Detail />,
            },
        ]   
    },
    {
        path: "/login",
        element: <Login />,
        errorElement:<Error404/>,
    },
    {
        path: "/registro",
        element: <Register />,
        errorElement:<Error404/>,
    },
    {
        path: "/admin",
        element: <Admin />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <AdminHome />,
            },
            {
                path: "/admin/crear",
                element: <CreateBook />,
            },
            {
                path: "/admin/inventario",
                element: <Inventory />,
            },
            {
                path: "/admin/detalles/:id",
                element: <CreateBook />,
            }
        ],
    },
    
])

export default router;