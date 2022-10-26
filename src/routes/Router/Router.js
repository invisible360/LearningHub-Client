import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Loading from "../../pages/Loading/Loading";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/loading',
                element: <Loading />
            },
            {
                path: '/faq',
                element:<FAQ/>
            },
            {
                path: '/courses',
                loader: ()=> fetch (`http://localhost:5000/courses`),
                element: <PrivateRoute><Courses/></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
])
