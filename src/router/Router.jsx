import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import App from "../components/templates/App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminHome from "../pages/AdminHome"
import CreateBook from "../components/form/CreateBook";
import Admin from "../components/templates/Admin";

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
                path: "libros",
                element: <AdminHome />,
            },
            {
                path: "detalles",
                element: <CreateBook />,
            },
        ],
    },
    
])

export default router;