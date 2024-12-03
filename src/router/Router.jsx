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
import Checkout from "../pages/Checkout";
import OrderCompleted from "../pages/OrderCompleted";
import ContentCategory from "../pages/ContentCategory";
import Alert from "../pages/Alert";
import SearchResults from "../components/header/SearchResults";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "libro/:id",
                element: <Detail />,
            },
            {
                path: "categoria/:id",
                element: <ContentCategory />,
            },
            {
                path: "buscar",
                element: <SearchResults />, // Ruta para manejar las búsquedas
            },
            
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "registro",
        element: <Register />,
    },
    {
        path: "checkout",
        element: <Checkout />,
    },
    {
        path: "orden-completada",
        element: <OrderCompleted />,
    },
    {
        path: "admin",
        element: <Admin />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <AdminHome />,
            },
            {
                path: "crear",
                element: <CreateBook />,
            },
            {
                path: "inventario",
                element: <Inventory />,
            },
            {
                path: "detalles/:id",
                element: <CreateBook />,
            },
            {
                path: "alertas",
                element: <Alert />,
            },
        ],
    },
]);

export default router;
