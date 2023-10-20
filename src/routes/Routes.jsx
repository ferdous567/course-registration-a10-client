
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainOutlet from "../layout/MainOutlet";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProducts from "../pages/AddProducts";
// import Products from "../pages/products/Products";
import AddBrand from "../components/AddBrand";
import BrandWishProduct from "../pages/BrandWishProduct";
import ProductCardDetails from "../pages/ProductCardDetails";
import AddCart from "../pages/AddCart";
import Update from "../pages/Update";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainOutlet></MainOutlet>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/brand-product/:id',
                element: <BrandWishProduct />,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)

            },
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>,
                loader: () => fetch('http://localhost:5000/brands')

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
    },
    {
        path: '/brand',
        element: <AddBrand></AddBrand>
    },
    {
        path: '/productCardDetails/:id',
        element: <PrivateRoute>
            <ProductCardDetails></ProductCardDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
    },
    {
        path: '/myCart',
        element: <PrivateRoute>
            <AddCart></AddCart>
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/carts')
    },
    {
        path: '/update/:id',
        element: <PrivateRoute>
            <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
    }

])

export default routes;