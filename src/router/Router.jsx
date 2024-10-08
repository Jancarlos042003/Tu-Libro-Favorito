import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import App from "../components/templates/App";

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
            }
        ]   
    },
])

export default router;