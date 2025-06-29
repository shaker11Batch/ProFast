import React from 'react';
import { Link, Outlet } from 'react-router';
import ProfastLogo from '../pages/shared/ProfastLogo/ProfastLogo';

import { FaHome, FaBox, FaMoneyCheckAlt, FaTruck, FaUser } from 'react-icons/fa';

const Dashboard = () => {
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                    <div className="hidden flex-none lg:hidden">

                    </div>
                </div>
                {/* Page content here */}
                <Outlet />

                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80  p-4">
                    {/* Sidebar content here */}
                    <ProfastLogo/>
                    <li>
        <Link to="/dashboard/home" className="flex items-center gap-2">
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard/myParcels" className="flex items-center gap-2">
          <FaBox /> My Parcels
        </Link>
      </li>
      <li>
        <Link to="/dashboard/paymentHistory" className="flex items-center gap-2">
          <FaMoneyCheckAlt /> Payment History
        </Link>
      </li>
      <li>
        <Link to="/dashboard/track" className="flex items-center gap-2">
          <FaTruck /> Track a Package
        </Link>
      </li>
      <li>
        <Link to="/dashboard/profile" className="flex items-center gap-2">
          <FaUser /> Update Profile
        </Link>
      </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;