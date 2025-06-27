import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../socialLogin/socialLogin';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
const {signIn} = useAuth()
    const location = useLocation()
    const from = location.state?.from || '/';
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
        .then(res =>{
            console.log(res.user)
            navigate(from)
        }).catch (error =>{
            console.log(error)
        })
    }

    return (
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className='card-body'>
                <h1 className="text-5xl font-bold">Please Login!</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" {...register('email')} className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {/* error handle  */}
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is require</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>

                    </fieldset>
                    <button className="btn btn-neutral mt-4 w-full">Login</button>
                </form>
                <p>If you New here <Link className='btn btn-link' to='/register'>  Please SignIn</Link></p>
                <SocialLogin />
            </div>

        </div>
    );
};

export default Login;