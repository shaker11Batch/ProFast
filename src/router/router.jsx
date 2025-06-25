import { createBrowserRouter } from "react-router";
import RootLayOut from "../layOut/RootLayOut";
import Home from "../pages/Home";
import AuthLayOut from "../layOut/AuthLayOut";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";


 export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayOut,
        children: [
            {
                index: true,
                Component: Home
            },
          {
            path: "/coverage",
            Component: Coverage,
            loader: () => fetch('./serviceCenter.json')
          }
        ]
    },
    {
        path:'/',
        Component: AuthLayOut,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])