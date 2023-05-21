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
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

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
                element: <PrivateRoute><AllToys></AllToys></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/toys')
            },
            {
                path: '/toyDetails/:_id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/toys/${params._id}`)
            }
        ]
    },
]);


export default router;
// {
//   path: 'book/:id',
//   element: <BookService></BookService>,
//   loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
// },
// {
//   path: 'bookings',
//   element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
// }