import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import auth from '../firebase.init';
import Loading from './Shared/Loading';

const RequiredAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    let location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;