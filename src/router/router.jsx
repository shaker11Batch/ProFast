import { createBrowserRouter } from "react-router";
import RootLayOut from "../layOut/RootLayOut";
import Home from "../pages/Home";


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

            }
        ]
    }
])