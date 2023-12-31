import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layouts/Main";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import ShowToysDetails from "../Pages/Components/ShowToysDetails/ShowToysDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
           
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader:()=>fetch('https://toys-market-place-server.vercel.app/allToys')
            },
        
            {
                path: '/allToys/:id',
                element: <PrivateRoute><ShowToysDetails/> </PrivateRoute>,
                // loader:({params})=>fetch(`https://toys-market-place-server.vercel.app/allToys/${params.id}`)
            }
        ]
    },
]);


export default router;
