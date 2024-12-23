import { Link, useNavigate } from "react-router-dom";
import SignInWithGoogle from "../components/SignInWithGoogle";
import { useContext, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const SignUp = () => {

    const { signUpUser, updateUserProfile } = useContext(AuthContex)
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)


    const handleSignUp = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');

        const updateUser = { name, photoURL };
        // console.log(updateUser)

        signUpUser(email, password)
            .then(() => {
                // console.log('user from signup', data)
                updateUserProfile(updateUser)
                    .then(() => {
                        navigate('/')
                        Swal.fire({
                            title: "Custom animation with Animate.css",
                            showClass: {
                              popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                              popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                          });
                    })
                    .catch(err => console.log("error from updateProfile", err.message))
            })
            .catch(err => {
                console.log('error from signup', err.message)
            })
    }
    return (
        <div className="pt-10 bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row px-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" name="photoURL" placeholder="Your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative " required />
                            
                                <button onClick={()=> setShowPass(!showPass)} className="absolute mt-12 pt-1 ml-72">
                                    {
                                        showPass ? <FaEye /> : <FaEyeSlash />
                                    }
                                </button>
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <p className="text-center mt-1">Already have an account ? please <Link to={'/login'} className="text-violet-800 font-semibold">Login</Link></p>
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

export default SignUp;