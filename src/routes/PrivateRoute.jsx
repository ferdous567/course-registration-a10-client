import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <h2 className="text-4xl text-center font-bold">Loading...</h2>
    }

    if(user){
        return children;
    }

    return <Navigate to = '/login'></Navigate>
};

export default PrivateRoute;