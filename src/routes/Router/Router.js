import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import AllCourseCard from "../../pages/AllCourseCard/AllCourseCard";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Loading from "../../pages/Loading/Loading";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import CatCourses from "../../pages/CatCourses/CatCourses";


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
                element: <FAQ />
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses><AllCourseCard></AllCourseCard></Courses></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses_categories/${params.id}`),
                element: <Courses><CatCourses></CatCourses></Courses>
            }
        ]
    }
])
