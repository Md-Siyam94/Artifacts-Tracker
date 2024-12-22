import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInWithGoogle from "../components/SignInWithGoogle";
import { useContext, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const { loginUser } = useContext(AuthContex)
    const [showPass, setShowPass] = useState(false)
    const location= useLocation()
   const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')


        loginUser(email, password)
            .then(() => { 
                navigate(location?.state ? location?.state : "/")
            })
            .catch(err => {
                console.log('error form login', err.message);
            })
    }
    return (
        <div className="pt-10 bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row px-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative " required />

                            <button onClick={() => setShowPass(!showPass)} className="absolute mt-12 pt-1 ml-72">
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center mt-1">Don't have any account ? please <Link to={'/sign-up'} className="text-violet-800 font-semibold">Sign up</Link></p>
                        <div className="divider">OR</div>
                        <div>
                            <SignInWithGoogle></SignInWithGoogle>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;