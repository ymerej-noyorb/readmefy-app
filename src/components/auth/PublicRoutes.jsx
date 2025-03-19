import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { route } from "../../utils/path";

const PublicRoutes = () => {
	const { user } = useAuth();
	const location = useLocation();

	return user ? (
		<Navigate to={route.dashboard} state={{ from: location }} replace />
	) : (
		<Outlet />
	);
};

export default PublicRoutes;
