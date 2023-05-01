import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div>Lading...</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;