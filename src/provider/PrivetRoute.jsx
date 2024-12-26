import { useContext } from "react";
import { AuthContex } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    
    const {user, loading }= useContext(AuthContex);
    const location = useLocation();
 

    if(loading){
        return <div className="flex items-center justify-center h-96 "><span className="loading loading-dots loading-lg "></span></div>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivetRoute;