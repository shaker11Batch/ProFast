import React from 'react';
import authImg from '../assets/authImage.png'
import { Outlet } from 'react-router';
import ProfastLogo from '../pages/shared/ProfastLogo/ProfastLogo';

const AuthLayOut = () => {
    return (
        <div className="p-12 bg-base-200 ">
            <ProfastLogo/>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className='flex-1'>
              <img
                    src={authImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayOut;