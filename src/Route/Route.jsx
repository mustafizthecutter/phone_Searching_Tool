import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Favorite from "../Pages/Favorite";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import PhoneDetails from "../Pages/PhoneDetails";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('phones.json')
            },
            {
                path: '/favorite',
                element: <Favorite></Favorite>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <PhoneDetails></PhoneDetails>,
                loader: ()=>fetch('phones.json')
            }
        ]
    }


])

export default route;