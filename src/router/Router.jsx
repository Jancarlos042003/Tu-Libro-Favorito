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
                path: "productos",
                element: <Detail />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <Error404 />,
    },
    {
        path: "registro",
        element: <Register />,
        errorElement: <Error404 />,
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
        ],
    },
]);

export default router;
