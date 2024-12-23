import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContex } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const SignInWithGoogle = () => {
    const {user, loginWithGoogle} = useContext(AuthContex);
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(()=> {
            navigate(location?.state ? location?.state : "/")
           
        })
        .catch(err=> {
            console.log('error from google login',err);
        })
    }


    return (
        <div>
            <button onClick={handleGoogleLogin} className="py-3 w-full rounded-lg border flex gap-2 items-center bg-base-100 hover:bg-base-200 justify-center font-semibold"><FcGoogle className="text-2xl " />Login with Google</button>
        </div>
    );
};

export default SignInWithGoogle;