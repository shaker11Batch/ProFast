import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../socialLogin/socialLogin';

const Register = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser } = useAuth()

    const onSubmit = data => {
        console.log(data)
        createUser(data?.email, data?.password)
            .then(res => {
                console.log(res.user)
                navigate('/')
            })
            .then(error => {
                console.log(error)
            })
    }

    return (


        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Create an Account!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* email filed  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'>Email is require</p>
                        }
                        <label className="label">Password</label>
                        {/* password  */}
                        <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>password is require</p>
                        }
                        {/* forget pass  */}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p>Already have an account <Link className='btn btn-link' to='/login'>  Please Login</Link></p>
                <SocialLogin/>
            </div>
        </div>

    );
};

export default Register;