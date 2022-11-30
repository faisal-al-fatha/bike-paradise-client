import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import useVerifyRole from '../hooks/useVerifyRole';
import Loading from '../Pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {userRole, user, loading} = useContext(AuthContext);
    const [role, setVerifyLoading] = useVerifyRole(user?.email)
    const location = useLocation();
    console.log(role);

    if(loading || setVerifyLoading){
        return <Loading></Loading>
    }

    if (user &&  role === 'Admin'){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;