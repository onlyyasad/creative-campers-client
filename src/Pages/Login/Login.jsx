import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';



const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleLogin = data =>{
        console.log(data)
    }
    const handleGoogleLogin = () =>{

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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('password', { required: true })} className="input input-bordered" />
                                {errors.password && <p className='text-xs mt-2 text-red-500'>Password is required.</p>}
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