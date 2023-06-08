import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import Swal from 'sweetalert2';


const Registration = () => {
    const { createUser, updateUserData, googleLogin, logOutUser } = useAuth();
    const [error, setError] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const navigate = useNavigate();

    const handleSignUp = user => {
        const name = user.name;
        const email = user.email;
        const password = user.password;
        const confirmPassword = user.confirm_password;
        const photo = "";
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    updateUserData(result.user, name, photo)
                        .then(() => {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Sign-up successful, now please login.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            logOutUser();
                            setError("");
                            navigate("/login");
                            reset();
                        })
                        .catch(error => {
                            setError(error.message)
                        })
                })
                .catch(error => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: error.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setError(error.message)
                })
        }
        else {
            setError("Confirm Password doesn't match")
            alert(error)
        }
        console.log(user)
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() =>{
            navigate("/")
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen py-8 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='w-full' src={""} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100">
                        <div className='card-body pb-0'>
                            <h3 className='text-center font-bold text-xl pb-4'>Sign Up</h3>
                        </div>
                        <form className="card-body pt-0" onSubmit={handleSubmit((data) => handleSignUp(data))}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register('name', { required: true })} className="input input-bordered" />
                                {errors.name && <p className='text-xs mt-2 text-red-600'>Name is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                                {errors.email && <p className='text-xs mt-2 text-red-600'>Email is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[\W_]).*$/ })} className="input input-bordered" />
                                {errors.password?.type === "required" && <p className='text-xs mt-2 text-red-600'>Password is required.</p>}
                                {errors.password?.type === 'minLength' && <p className="text-xs mt-2 text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-xs mt-2 text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-xs mt-2 text-red-600">Password must have one Uppercase and one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('confirm_password', { required: true })} className="input input-bordered" />
                                {errors.confirm_password && <p className='text-xs mt-2 text-red-600'>Password is required.</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Photo</span>
                                </label>
                                <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-md" />
                                {errors.photo && <p className='text-xs mt-2 text-red-600'>Photo is required.</p>}
                            </div>
                            <div>
                                <p className='text-xs text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-yellow-600 hover:bg-yellow-700 normal-case border-0 hover:border-0">Sign Up</button>
                            </div>
                        </form>

                        <div className='card-body pt-0 text-center'>
                            <h3>Already have an account? <Link to="/login" className='font-bold'>Go to Sign In</Link></h3>
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

export default Registration;