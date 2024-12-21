import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContex } from "../provider/AuthProvider";

const SignInWithGoogle = () => {
    const {loginWithGoogle} = useContext(AuthContex);

    const handleGoogleLogin =()=>{
        loginWithGoogle()
    }


    return (
        <div>
            <button onClick={handleGoogleLogin} className="py-3 w-full rounded-lg border flex gap-2 items-center bg-base-100 hover:bg-base-200 justify-center font-semibold"><FcGoogle className="text-2xl " />Login with Google</button>
        </div>
    );
};

export default SignInWithGoogle;