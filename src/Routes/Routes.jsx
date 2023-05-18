import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layouts/Main";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
            path: 'signup', 
            element: <Register></Register>
        },
        {
            path: 'blog', 
            element: <Blog></Blog>
        },
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