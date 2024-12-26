import { Link, useNavigate } from "react-router-dom";
import SignInWithGoogle from "../components/SignInWithGoogle";
import { useContext, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import signUp from '../../public/sign up.json';



const SignUp = () => {

    const {user, signUpUser, updateUserProfile } = useContext(AuthContex)
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState("")
    

    const handleSignUp = (e) => {
        e.preventDefault();
        setError("")

        const form = new FormData(e.target)
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');

        const passvalidation =/^(?=.*[a-z])(?=.*[A-Z]).*$/;
        if (!passvalidation.test(password)) {
            return setError("Password have must one uppercase and one lowercase charecter")
        }

        // const updateUser = { name , photoURL };
        // console.log(updateUser)

        signUpUser(email, password)
            .then(() => {
                updateUserProfile({displayName: name , photoURL: photoURL})
                    .then(() => {
                          navigate("/")
                        //   console.log(user?.displayName)

                    })
                    .catch(err => setError(err.code))
            })
            .catch(err => {
                setError(err.code.slice(5))
            })
    }
    return (
        <div className="pt-10 bg-base-200 min-h-screen pb-20">
            <Helmet>
                <title>Sign up | ArtifactsTracker</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row px-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                   <Lottie animationData={signUp} className=""></Lottie>
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
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div>
                            <p className="text-red-600">{error}</p>
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