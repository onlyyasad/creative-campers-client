import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { BiShow, BiHide } from 'react-icons/bi';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const { loginUser, googleLogin } = useAuth();
    const [error, setError] = useState("");
    const [show, setShow] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLogin = data => {
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                navigate(from, { replace: true })
                setError("")
            })
            .catch(error => {
                if (error.code === "auth/wrong-password") {
                    setError("Wrong password")
                }
                if (error.code === "auth/user-not-found") {
                    setError("No user registered with this Email")
                }
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email, photoURL: user.photoURL, role: "student" };
                axios.post("https://assignment-12-server-psi-three.vercel.app/users", saveUser)
                    .then(() => {
                        setError("");
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div>

            </div>
            <div className="hero min-h-screen py-8 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={""} alt="" />
                    </div>
                    <div className="card border flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <div className='card-body pb-0'>
                            <h3 className='text-center font-bold text-xl pb-4'>Sign In</h3>
                        </div>
                        <form className="card-body pt-0" onSubmit={handleSubmit((data) => handleLogin(data))}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                                {errors.email && <p className='text-xs mt-2 text-red-500'>Email is required.</p>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} placeholder="password" {...register('password', { required: true })} className="input input-bordered"></input>
                                {!show ?
                                    <BiShow onClick={() => setShow(!show)} className='absolute text-xl bottom-3 right-3' /> :
                                    <BiHide onClick={() => setShow(!show)} className='absolute text-xl bottom-3 right-3' />}
                            </div>
                            {errors.password && <p className='text-xs mt-2 text-red-500'>Password is required.</p>}
                            <div>
                                <p className='text-xs text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className={`btn bg-yellow-600 hover:bg-yellow-700 normal-case border-0 hover:border-0`}>Sign In</button>
                            </div>
                        </form>

                        <div className='card-body pt-0 text-center'>
                            <h3>New here? <Link to="/registration" className='font-bold'>Create an Account!</Link></h3>
                            <h3>Or Sign up with</h3>
                            <div className='flex justify-center gap-4'>
                                <button className="btn btn-circle btn-sm btn-outline"><FaFacebookF /></button>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-sm btn-outline"><FaGoogle /></button>
                                <button className="btn btn-circle btn-sm btn-outline"><FaGithub /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;