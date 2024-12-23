import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Lottie from "lottie-react";
import ErrorAnimation from "../../public/Error animation.json"

const Error = () => {
    return (
        <div className="flex flex-col w-10/12 pr-10 mx-auto  items-center justify-end">
            <div>
                <Lottie
                animationData={ErrorAnimation}
                loop={true}
                autoPlay={true}
                style={{width: "70%", margin: "auto"}}

                >

                </Lottie>
            </div>
            <div>
                <h3 className="md:text-3xl text-2xl text-center font-semibold mb-4">Opps! Page not Found</h3>
                <p className="font-semibold text-center pb-8">The page you are searching, it's maybe not available or something else</p>
                <Link className="flex gap-2  items-center mx-auto py-3 w-44 justify-center font-semibold rounded-lg  bg-orange" to={"/"} ><FaArrowLeft />
                Back</Link>
            </div>

        </div>
    );
};

export default Error;