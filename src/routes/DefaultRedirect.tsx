import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_ROUTE, routes } from './routes';

const DefaultRedirect = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!routes.includes(pathname)) {
            navigate(DEFAULT_ROUTE);
        }
    }, [pathname]);

    return null;
};

export default DefaultRedirect;
