import { createBrowserRouter } from "react-router";
import RootLayOut from "../layOut/RootLayOut";
import Home from "../pages/Home";
import AuthLayOut from "../layOut/AuthLayOut";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SentParcel from "../pages/SentPearcel/SentParcel";
import Dashboard from "../layOut/Dashboard";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Pyment from "../pages/Dashboard/Pyment/Pyment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";


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
            },
            {
                path: '/sentParcel',
                // element: <PrivateRoute><SentParcel /></PrivateRoute>,
                element: <SentParcel></SentParcel>,
                loader: () => fetch('./serviceCenter.json')
            }
        ]
    },
    {
        path: '/',
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
    },
    {
        path: '/dashboard',
        // element: <PrivateRoute>
        //     <Dashboard></Dashboard>
        // </PrivateRoute>,
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myParcels',
                Component: MyParcels
            },
            {
                path: 'payment/:parcelId',
                Component: Pyment
            },
            {
                path: 'paymentHistory',
                Component: PaymentHistory
            },
            {
                path: 'track',
                Component: TrackParcel
            },
        ]
    }
])