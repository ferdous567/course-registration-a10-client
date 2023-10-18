
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainOutlet from "../layout/MainOutlet";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProducts from "../pages/AddProducts";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainOutlet></MainOutlet>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default routes;