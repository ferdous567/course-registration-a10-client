
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainOutlet from "../layout/MainOutlet";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainOutlet></MainOutlet>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default routes;