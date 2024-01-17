import { getUserData } from 'enteties/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useSelector(getUserData);
    const location = useLocation();

    if (!auth?.username) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
