import { useContext } from "react";
import { AuthContex } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    
    const {user, loading }= useContext(AuthContex);
    const location = useLocation();
 

    if(loading){
        return <span className="loading loading-dots loading-lg "></span>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivetRoute;