import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import { GiCompass } from "react-icons/gi";

const Navbar = () => {
    const user = useContext(AuthContex);



    const links = <>
         <li><Link to={"/"}>Home</Link></li>                     
         <li><Link to={"/all-artifacts"}>All Artifacts</Link></li>
         <li><Link to={"/add-artifacts"}>Add Artifacts</Link></li>         
    </>
    return (
        <div className="navbar bg-green-400 py-3 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <Link to={"/"} className=" flex gap-2 font-semibold text-2xl items-center"><GiCompass className="text-5xl text-red-600"/>ArtifactsTracker</Link>
            </div>
            
            <div className="navbar-end gap-2">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div >
            {user?.name}
                <Link to={"/login"} className="btn">Login</Link>
                <Link to={"/sign-up"} className="btn">Sign up</Link>
            </div>
        </div>
    );
};

export default Navbar;