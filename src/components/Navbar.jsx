import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import { GiCompass } from "react-icons/gi";
import Theme from "./Theme";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContex);
    const navigate = useNavigate()
    const { displayName } = user || {}



    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate("/")
            })
            .catch(err => {
                console.log('error from logout', err.message)
            })
    }

    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/all-artifacts"}>All Artifacts</Link></li>
        <li><Link to={"/about-us"}>About Us</Link></li>
        {
            user && <>
                <li><Link to={"/add-artifacts"}>Add Artifacts</Link></li>
                <li><Link to={"/my-artifacts"}><div className="dropdown  dropdown-end  dropdown-hover z-50">
                    <div tabIndex={0} role="button" className=" ">My profile</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100    w-56 p-2 shadow">
                        <li><Link to={"/my-artifacts"}>My Artifacts</Link></li>
                        <li><Link to={"/linked-artifacts"}>Liked Artifacts</Link></li>
                    </ul>
                </div>
                </Link>
                </li>
            </>
        }
    </>
    return (
        <div className="navbar bg-success bg-opacity-80 fixed z-50 py-3 px-10">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={"/"} className=" flex gap-2 font-semibold text-3xl items-center"><GiCompass className="text-5xl text-red-600" />ArtifactsTracker</Link>
            </div>

            <div className="navbar-end gap-3">
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu  menu-horizontal px-1 font-semibold">
                        {links}
                    </ul>
                </div >
                <div className="mr-4">
                    <Theme></Theme>
                </div>
                <div>
                    {
                        user ? <div> <div className="dropdown dropdown-end  dropdown-hover z-50">
                            <div tabIndex={0} role="button" className=""> <img
                                className="h-10 w-10 rounded-full object-cover"
                                referrerPolicy="no-referrer"
                                src={user?.photoURL}
                                alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content font-semibold menu bg-base-100  z-[1] w-52 p-2 shadow">
                                <li><Link>{displayName}</Link></li>
                                <li><button onClick={handleLogOut}>Log out</button></li>
                            </ul>
                        </div>
                        </div> : <div className="flex gap-2"><Link to={"/login"} className="btn">Login</Link>
                            <Link to={"/sign-up"} className="btn">Sign up</Link></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;