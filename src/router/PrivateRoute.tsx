import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
	const isAuthenticated = localStorage.getItem('accessToken');
	return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
